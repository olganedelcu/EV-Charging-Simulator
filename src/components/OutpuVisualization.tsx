import React from 'react';
import {
    ResultsContainer,
    ResultTitle,
    ResultItem,
    ChartContainer,
} from '../styled/OutputVisualization.style';
import { SimulationResults } from '../types/types';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register necessary components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

interface OutputVisualizationProps {
    simulationResults: SimulationResults;
}

const OutputVisualization: React.FC<OutputVisualizationProps> = ({ simulationResults }) => {
    const {
        chargingEventsPerMonth,
        chargingEventsPerDay,
        totalChargingValues,
        months,
        chargingEventsPerYear
    } = simulationResults;

    // Data for Charging Events Per Month Chart
    const chargingEventsPerMonthData = {
        labels: months, // Use months for labels
        datasets: [
            {
                label: 'Charging Events Per Month',
                data: chargingEventsPerMonth,
                backgroundColor: '#3498db',
                borderColor: '#2980b9',
                borderWidth: 1,
            },
        ],
    };

    // Data for Charging Events Per Day Chart
    const chargingEventsPerDayData = {
        labels: Array.from({ length: chargingEventsPerDay.length }, (_, i) => `Day ${i + 1}`),
        datasets: [
            {
                label: 'Charging Events Per Day',
                data: chargingEventsPerDay,
                backgroundColor: '#e74c3c',
                borderColor: '#c0392b',
                borderWidth: 1,
            },
        ],
    };

    // Data for Total Charging Values Chart
    const totalChargingValuesData = {
        labels: Array.from({ length: totalChargingValues.length }, (_, i) => `Charge Point ${i + 1}`),
        datasets: [
            {
                label: 'Total Charging Values (kW)',
                data: totalChargingValues,
                backgroundColor: '#2ecc71',
                borderColor: '#27ae60',
                borderWidth: 1,
            },
        ],
    };

    // Data for Charging Events Per Year Chart
    const chargingEventsPerYearData = {
        labels: Array.from({ length: chargingEventsPerYear.length }, (_, i) => `Year ${i + 1}`),
        datasets: [
            {
                label: 'Charging Events Per Year',
                data: chargingEventsPerYear,
                backgroundColor: '#f39c12',
                borderColor: '#e67e22',
                borderWidth: 1,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            tooltip: {
                callbacks: {
                    label: (context: any) => `${context.dataset.label}: ${context.raw}`,
                },
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'X Axis Label',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Y Axis Label',
                },
                beginAtZero: true,
            },
        },
    };

    return (
        <ResultsContainer>
            <ResultTitle>Simulation Results</ResultTitle>
            <ResultItem>
                Total Energy Consumed: {simulationResults.totalEnergyConsumed.toFixed(2)} kWh
            </ResultItem>
            <ResultItem>
                Theoretical Max Power Demand: {simulationResults.theoreticalMaxPowerDemand.toFixed(2)} kW
            </ResultItem>
            <ResultItem>
                Actual Max Power Demand: {simulationResults.actualMaxPowerDemand.toFixed(2)} kW
            </ResultItem>
            <ResultItem>
                Concurrency Factor: {(simulationResults.concurrencyFactor * 100).toFixed(2)}%
            </ResultItem>

            <ChartContainer>
                <h3>Charging Events Per Day</h3>
                <Bar data={chargingEventsPerDayData} options={chartOptions} />
            </ChartContainer>

            <ChartContainer>
                <h3>Total Charging Values (kW)</h3>
                <Bar data={totalChargingValuesData} options={chartOptions} />
            </ChartContainer>

            <ChartContainer>
                <h3>Charging Events Per Month</h3>
                <Bar data={chargingEventsPerMonthData} options={chartOptions} />
            </ChartContainer>

            <ChartContainer>
                <h3>Charging Events Per Year</h3>
                <Bar data={chargingEventsPerYearData} options={chartOptions} />
            </ChartContainer>
        </ResultsContainer>
    );
}

export default OutputVisualization;
