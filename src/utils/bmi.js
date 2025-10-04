export function calculateBMI(heightCm, weightKg) {
    const heightM = heightCm / 100;
    const bmi = weightKg / (heightM * heightM);

    const minWeight = 18.5 * (heightM * heightM);
    const maxWeight = 24.9 * (heightM * heightM);

    let classification
    if (bmi < 18.5) classification = 'underweight'
    else if (bmi >= 18.5 && bmi < 25) classification = 'healthy weight'
    else if (bmi >= 25 && bmi < 30) classification = 'overweight'
    else classification = 'obese'

    return {
        bmi: bmi.toFixed(1),
        minWeight: minWeight.toFixed(1),
        maxWeight: maxWeight.toFixed(1),
        classification: classification,
    };
}
