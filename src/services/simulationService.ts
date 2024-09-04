import { SimulationParams, SimulationResults, ChargingEvent } from '../types/types';
import { getRandomElement } from '../utils/simulation';
import {TOTAL_INTERVALS, DAYS_PER_YEAR, INTERVALS_PER_DAY, arrivalProbabilities, chargingDemandProbabilities, chargingDemandKm, kwhPer100Km} from '../constants/values'



function generateChargingEvents(numChargePoints: number, chargingPower: number): ChargingEvent[] {
    const events: ChargingEvent[] = [];
    const chargepointsStatus = new Array(numChargePoints).fill(0); // 0 means available, positive number means charging until that time

    for (let interval = 0; interval < TOTAL_INTERVALS; interval++) {
        // Determine if new EVs arrive
        const arrivals = Array.from({ length: numChargePoints }, () => getRandomElement(arrivalProbabilities));
        const chargingNeeds = Array.from({ length: numChargePoints }, () => {
            const kmIndex = getRandomElement(chargingDemandProbabilities);
            return (chargingDemandKm[kmIndex] * kwhPer100Km) / 100;
        });

        // Allocate charging for arriving EVs
        //inside of another function SEPARATE
        arrivals.forEach((arrival, i) => {
            if (arrival < numChargePoints) {
                const energyRequired = chargingNeeds[i];
                const endTime = interval + Math.ceil(energyRequired / chargingPower);
                events.push({ startTime: interval, endTime, energyRequired });
                chargepointsStatus[arrival] = endTime;
            }
        });

        // Updating charge points status
        // in another function as well, maybe we need it again in the fututre SEPARATE
        for (let j = 0; j < numChargePoints; j++) {
            if (chargepointsStatus[j] > interval) {
                chargepointsStatus[j] = Math.max(chargepointsStatus[j] - 1, 0);
            }
        }
    }
    return events;
}

export default function runSimulation(params: SimulationParams): SimulationResults {
    const { numChargePoints, chargingPower } = params;

    const events = generateChargingEvents(numChargePoints, chargingPower);

    const totalEnergyConsumed = events.reduce((sum, event) => sum + event.energyRequired, 0);
    const theoreticalMaxPowerDemand = numChargePoints * chargingPower;

    let actualMaxPowerDemand = 0;
    const powerDemandAtIntervals = new Array(TOTAL_INTERVALS).fill(0);

    events.forEach(event => {
        for (let interval = event.startTime; interval <= event.endTime; interval++) {
            powerDemandAtIntervals[interval] += chargingPower;
            actualMaxPowerDemand = Math.max(actualMaxPowerDemand, powerDemandAtIntervals[interval]);
        }
    });

    const concurrencyFactor = actualMaxPowerDemand / theoreticalMaxPowerDemand;

    // Calculate additional metrics for visualization
    const chargingEventsPerDay = new Array(DAYS_PER_YEAR).fill(0);
    const chargingEventsPerMonth = new Array(12).fill(0);
    const chargingEventsPerYear = new Array(1).fill(0); // Initialize as an array with one element (or more if needed)
    const totalChargingValues = new Array(numChargePoints).fill(0);

    events.forEach(event => {
        const day = Math.floor(event.startTime / INTERVALS_PER_DAY);
        const month = Math.floor(day / (DAYS_PER_YEAR / 12));
        chargingEventsPerDay[day]++;
        chargingEventsPerMonth[month]++;
        chargingEventsPerYear[0]++; // Increment year value (or distribute over multiple years if applicable)
        const chargePointIndex = event.startTime % numChargePoints;
        totalChargingValues[chargePointIndex] += event.energyRequired;
    });

    // Create months array for labels -- for month projection
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    return {
        totalEnergyConsumed,
        theoreticalMaxPowerDemand,
        actualMaxPowerDemand,
        concurrencyFactor,
        chargingEventsPerDay,
        chargingEventsPerMonth,
        chargingEventsPerYear,
        totalChargingValues,
        months
    };
}
