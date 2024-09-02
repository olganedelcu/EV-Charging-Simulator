export function getRandomElement(probabilities: number[]): number {
    const rand = Math.random();
    let sum = 0;
    for (let i = 0; i < probabilities.length; i++) {
        sum += probabilities[i];
        if (rand < sum) return i;
    }
    return probabilities.length - 1;
}
