import React from 'react';

interface SimulationResultsProps {
    totalEnergy: number;
    maxPowerDemand: number;
    concurrencyFactor: number;
}

export default function SimulationResults({ totalEnergy, maxPowerDemand, concurrencyFactor }: SimulationResultsProps) {
    return (
        <div>
            <h3>Simulation Results</h3>
            <p>Total Energy Consumed: {totalEnergy} kWh</p>
            <p>Max Power Demand: {maxPowerDemand} kW</p>
            <p>Concurrency Factor: {concurrencyFactor}</p>
        </div>
    );
}
