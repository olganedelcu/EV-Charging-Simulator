export interface SimulationParams {
    numChargePoints: number;
    arrivalProbabilityMultiplier: number;
    consumptionPerCar: number;
    chargingPower: number;
}

export interface SimulationResults {
    totalEnergyConsumed: number;
    theoreticalMaxPowerDemand: number;
    actualMaxPowerDemand: number;
    concurrencyFactor: number;
    chargingEventsPerDay: number[];
    chargingEventsPerMonth: number[];
    chargingEventsPerYear: number[];
    totalChargingValues: number[];
    months: string[];
}



export interface ChargingEvent {
    startTime: number;
    endTime: number;
    energyRequired: number;
}
