export const INTERVALS_PER_DAY = 96;
export const DAYS_PER_YEAR = 365;
export const TOTAL_INTERVALS = INTERVALS_PER_DAY * DAYS_PER_YEAR;

// Mock Data
export const arrivalProbabilities = [
    0.0094, 0.0094, 0.0094, 0.0094, 0.0094, 0.0094, 0.0094, 0.0094, 0.0283, 0.0283,
    0.0566, 0.0566, 0.0566, 0.0755, 0.0755, 0.0755, 0.1038, 0.1038, 0.1038, 0.0472,
    0.0472, 0.0472, 0.0094, 0.0094
];

export const chargingDemandProbabilities = [
    0.3431, 0.049, 0.098, 0.1176, 0.0882, 0.1176, 0.1078, 0.049, 0.0294
];
export const chargingDemandKm = [0, 5, 10, 20, 30, 50, 100, 200, 300];
export const kwhPer100Km = 18;