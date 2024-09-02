import React, { useState } from 'react';
import InputForm from './components/InputForm';
import OutputVisualization from '../src/components/OutpuVisualization';
import runSimulation from './services/simulationService';
import { SimulationParams, SimulationResults } from './types/types';
import './App.css';

export default function App() {
    const [simulationResults, setSimulationResults] = useState<SimulationResults | null>(null);

    const handleRunSimulation = (params: SimulationParams) => {
        const results = runSimulation(params);
        setSimulationResults(results);
    };

    return (
        <div className="App">
            <h1>EV Charging Simulation</h1>
            <InputForm onRunSimulation={handleRunSimulation} />
            {simulationResults && (
                <OutputVisualization simulationResults={simulationResults} />
            )}
        </div>
    );
}
