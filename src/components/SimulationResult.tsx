import React from 'react';
import { ResultsContainer, ResultTitle, ResultItem } from '../styles/SimulationResult.style';
import { SimulationResults } from '../types/types';

interface SimulationResultProps {
    simulationResults: SimulationResults;
}

const SimulationResult: React.FC<SimulationResultProps> = ({ simulationResults }) => {
    return (
        <ResultsContainer>
            <ResultTitle>Simulation Results</ResultTitle>
            <ResultItem>Total Energy Consumed: {simulationResults.totalEnergyConsumed.toFixed(2)} kWh</ResultItem>
            <ResultItem>Theoretical Max Power Demand: {simulationResults.theoreticalMaxPowerDemand.toFixed(2)} kW</ResultItem>
            <ResultItem>Actual Max Power Demand: {simulationResults.actualMaxPowerDemand.toFixed(2)} kW</ResultItem>
            <ResultItem>Concurrency Factor: {(simulationResults.concurrencyFactor * 100).toFixed(2)}%</ResultItem>
        </ResultsContainer>
    );
}

export default SimulationResult;
