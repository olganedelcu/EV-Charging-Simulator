import React from 'react';
import { ChartContainer, ChartTitle } from "../styled/ChargePointChart.style" ;

interface ChargePointChartProps {
    numChargePoints: number;
    chargingPower: number;
}

const ChargePointChart: React.FC<ChargePointChartProps> = ({ numChargePoints, chargingPower }) => {
    // Placeholder content
    return (
        <ChartContainer>
            <ChartTitle>Charge Point Utilization</ChartTitle>
            <p>Number of Charge Points: {numChargePoints}</p>
            <p>Charging Power per Point: {chargingPower} kW</p>
            {/* Replace this with actual chart rendering logic */}
            <div>Chart will be rendered here.</div>
        </ChartContainer>
    );
};

export default ChargePointChart;
