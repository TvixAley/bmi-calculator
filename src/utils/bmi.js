export function calculateBMI(heightCm, weightKg) {
    const heightM = heightCm / 100;
    const bmi = weightKg / (heightM * heightM);

    const minWeight = 18.5 * (heightM * heightM);
    const maxWeight = 24.9 * (heightM * heightM);

    return {
        bmi: bmi.toFixed(1),
        minWeight: minWeight.toFixed(1),
        maxWeight: maxWeight.toFixed(1),
    };
}
