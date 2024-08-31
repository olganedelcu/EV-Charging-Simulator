export function simulation(params: SimulationParams) {
    const totalEnergy = params.chargePoints * params.chargingPower * 0.75;
    const maxPowerDemand = params.chargePoints * params.chargingPower * 0.55;
    const concurrencyFactor = maxPowerDemand / (params.chargePoints * params.chargingPower);
    const chartData = Array.from({ length: 24 }, (_, i) => ({ name: `${i}:00`, value: Math.random() * maxPowerDemand }));

    return { totalEnergy, maxPowerDemand, concurrencyFactor, chartData };
}
