export const cmToFeetInches = (cm) => {
    if (!cm || isNaN(cm)) return { feet: "", inches: "" };

    const totalInches = cm / 2.54;
    const feet = Math.floor(totalInches / 12);
    const inches = Math.round(totalInches % 12);

    return { feet, inches };
};


export const kgToStLbs = (kg) => {
    if (!kg || isNaN(kg)) return { stones: "", lbs: "" };

    const pounds = kg * 2.20462;
    const stones = Math.floor(pounds / 14);
    const lbs = Math.round(pounds % 14);

    return { stones, lbs };
};


export const feetInchesToCm = (feet, inches) => {
    const totalInches = (Number(feet) || 0) * 12 + (Number(inches) || 0);
    const cm = totalInches * 2.54;
    return Math.round(cm);
};


export const stLbsToKg = (stones, lbs) => {
    const totalPounds = (Number(stones) || 0) * 14 + (Number(lbs) || 0);
    const kg = totalPounds / 2.20462;
    return Math.round(kg);
};


export const handleMetricChange = (prev, field, value) => {
    const num = Number(value);

    if (field === "height") {
        const { feet, inches } = cmToFeetInches(num);
        return {
            ...prev,
            metric: { ...prev.metric, height: value },
            imperial: { ...prev.imperial, heightFt: feet, heightIn: inches }
        };
    }

    if (field === "weight") {
        const { stones, lbs } = kgToStLbs(num);
        return {
            ...prev,
            metric: { ...prev.metric, weight: value },
            imperial: { ...prev.imperial, weightSt: stones, weightLbs: lbs }
        };
    }

    return prev;
};


export const handleImperialChange = (prev, field, unit, value) => {
    if (field === "height") {
        const subField = unit === 'ft' ? 'heightFt' : 'heightIn'
        const newImperial = { ...prev.imperial, [subField]: value };
        const cm = feetInchesToCm(newImperial.heightFt, newImperial.heightIn);
        return {
            ...prev,
            imperial: newImperial,
            metric: { ...prev.metric, height: cm }
        };
    }

    if (field === "weight") {
        const subField = unit === 'lbs' ? 'weightLbs' : 'weightSt'
        const newImperial = { ...prev.imperial, [subField]: value };
        const kg = stLbsToKg(newImperial.weightSt, newImperial.weightLbs);
        return {
            ...prev,
            imperial: newImperial,
            metric: { ...prev.metric, weight: kg }
        };
    }

    return prev;
};
