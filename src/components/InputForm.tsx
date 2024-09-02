import React, { useState } from 'react';
import {
    Form,
    Label,
    Input,
    SubmitButton,
    InputContainer,
} from '../styled/InputForm.style';
import { SimulationParams } from '../types/types';

interface InputFormProps {
    onRunSimulation: (params: SimulationParams) => void;
}

export default function InputForm({ onRunSimulation }: InputFormProps) {
    const [numChargePoints, setNumChargePoints] = useState<number>(20);
    const [arrivalProbabilityMultiplier, setArrivalProbabilityMultiplier] =
        useState<number>(100); // Percentage (20-200%)
    const [consumptionPerCar, setConsumptionPerCar] = useState<number>(18); // kWh per car
    const [chargingPower, setChargingPower] = useState<number>(11); // kW per charge point

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validate inputs
        if (numChargePoints < 1 || numChargePoints > 100) {
            alert('Number of charge points must be between 1 and 100.');
            return;
        }
        if (arrivalProbabilityMultiplier < 20 || arrivalProbabilityMultiplier > 200) {
            alert('Arrival probability multiplier must be between 20 and 200%.');
            return;
        }
        if (consumptionPerCar < 10 || consumptionPerCar > 50) {
            alert('Consumption per car must be between 10 and 50 kWh.');
            return;
        }
        if (chargingPower < 5 || chargingPower > 50) {
            alert('Charging power must be between 5 and 50 kW.');
            return;
        }

        onRunSimulation({
            numChargePoints,
            arrivalProbabilityMultiplier,
            consumptionPerCar,
            chargingPower,
        });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <InputContainer>
                <Label htmlFor="numChargePoints">Number of Charge Points:</Label>
                <Input
                    id="numChargePoints"
                    type="number"
                    value={numChargePoints}
                    onChange={(e) => setNumChargePoints(parseInt(e.target.value) || 0)}
                    min="1"
                    max="100"
                />
            </InputContainer>

            <InputContainer>
                <Label htmlFor="arrivalProbabilityMultiplier">
                    Arrival Probability Multiplier (%):
                </Label>
                <Input
                    id="arrivalProbabilityMultiplier"
                    type="number"
                    value={arrivalProbabilityMultiplier}
                    onChange={(e) =>
                        setArrivalProbabilityMultiplier(parseInt(e.target.value) || 0)
                    }
                    min="20"
                    max="200"
                />
            </InputContainer>

            <InputContainer>
                <Label htmlFor="consumptionPerCar">Consumption per Car (kWh):</Label>
                <Input
                    id="consumptionPerCar"
                    type="number"
                    value={consumptionPerCar}
                    onChange={(e) => setConsumptionPerCar(parseInt(e.target.value) || 0)}
                    min="10"
                    max="50"
                />
            </InputContainer>

            <InputContainer>
                <Label htmlFor="chargingPower">Charging Power (kW):</Label>
                <Input
                    id="chargingPower"
                    type="number"
                    value={chargingPower}
                    onChange={(e) => setChargingPower(parseInt(e.target.value) || 0)}
                    min="5"
                    max="50"
                />
            </InputContainer>

            <SubmitButton type="submit">Run Simulation</SubmitButton>
        </Form>
    );
}
