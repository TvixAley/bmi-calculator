import React, {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import classes from "./Calculator.module.css";
import RadioButton from "../UI/RadioButton/RadioButton.jsx";
import InputField from "../UI/InputField/InputField.jsx";
import InfoBar from "./InfoBar/InfoBar.jsx";
import {calculateBMI} from "../../utils/bmi.js";
import {handleImperialChange, handleMetricChange} from "../../utils/conversions.js";

const Calculator = () => {
    const [system, setSystem] = useState("metric");

    const handleRadioChange = (value) => {
        setSystem(value);
    };

    const [data, setData] = useState({
        metric: {
            height: '',
            weight: ''
        },
        imperial: {
            heightFt: '',
            heightIn: '',
            weightSt: '',
            weightLbs: ''
        }
    });

    const onMetricChange = (field, value) => {
        setData((prev) => handleMetricChange(prev, field, value));
    };

    const onImperialChange = (field, unit, value) => {
        setData( (prev) => handleImperialChange(prev, field, unit, value))
    }

    let result = null;
    if(data.metric.height && data.metric.weight) result = calculateBMI(data.metric.height, data.metric.weight)

    return (
        <div className={classes.calculator}>
            <div className={classes.title}>Enter your details below</div>

            <div className={classes.selectionContainer}>
                <div className={classes.selectionInputContainer}>
                    <RadioButton
                        id={"metric"}
                        name={"metric-select"}
                        label={"Metric"}
                        checked={system === "metric"}
                        onChange={handleRadioChange}
                    />
                </div>
                <div className={classes.selectionInputContainer}>
                    <RadioButton
                        id={"imperial"}
                        name={"metric-select"}
                        label={"Imperial"}
                        checked={system === "imperial"}
                        onChange={handleRadioChange}
                    />
                </div>
            </div>

            <AnimatePresence mode="wait">
                {system === "metric" ? (
                    <motion.div
                        key="metric"
                        className={classes.fieldsContainer}
                        initial={{height: 0, opacity: 0}}
                        animate={{height: "auto", opacity: 1}}
                        exit={{height: 0, opacity: 0}}
                        transition={{duration: 0.3, ease: "easeInOut"}}
                    >
                        <InputField label="Height"
                                    units="cm"
                                    value={data.metric.height}
                                    onChange={(v) => onMetricChange("height", v)}
                        />
                        <InputField label="Weight"
                                    units="kg"
                                    value={data.metric.weight}
                                    onChange={(v) => onMetricChange("weight", v)}
                        />
                    </motion.div>
                ) : (
                    <motion.div
                        key="imperial"
                        className={[classes.fieldsContainer, classes.imperial].join(" ")}
                        initial={{height: 0, opacity: 0}}
                        animate={{height: "auto", opacity: 1}}
                        exit={{height: 0, opacity: 0}}
                        transition={{duration: 0.3, ease: "easeInOut"}}
                    >
                        <InputField label="Height"
                                    units={["ft", "in"]}
                                    values={[data.imperial.heightFt, data.imperial.heightIn]}
                                    onChange={(subField, v) => onImperialChange('height', subField, v)}
                        />
                        <InputField label="Weight"
                                    units={["st", "lbs"]}
                                    values={[data.imperial.weightSt, data.imperial.weightLbs]}
                                    onChange={(subField, v) => onImperialChange('weight', subField, v)}
                        />
                    </motion.div>
                )}
            </AnimatePresence>


            <InfoBar result={result ?? null} system={system}/>
        </div>
    );
};

export default Calculator;
