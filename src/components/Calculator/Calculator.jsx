import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import classes from "./Calculator.module.css";
import RadioButton from "../UI/RadioButton/RadioButton.jsx";
import InputField from "../UI/InputField/InputField.jsx";
import InfoBar from "./InfoBar/InfoBar.jsx";

const Calculator = () => {
    const [system, setSystem] = useState("radio-metric");

    const handleRadioChange = (value) => {
        setSystem(value);
    };

    return (
        <div className={classes.calculator}>
            <div className={classes.title}>Enter your details below</div>

            <div className={classes.selectionContainer}>
                <div className={classes.selectionInputContainer}>
                    <RadioButton
                        id={"radio-metric"}
                        name={"metric-select"}
                        label={"Metric"}
                        checked={system === "radio-metric"}
                        onChange={handleRadioChange}
                    />
                </div>
                <div className={classes.selectionInputContainer}>
                    <RadioButton
                        id={"radio-imperial"}
                        name={"metric-select"}
                        label={"Imperial"}
                        checked={system === "radio-imperial"}
                        onChange={handleRadioChange}
                    />
                </div>
            </div>

            <AnimatePresence mode="wait">
                {system === "radio-metric" ? (
                    <motion.div
                        key="metric"
                        className={classes.fieldsContainer}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <InputField label="Height" units="cm" />
                        <InputField label="Weight" units="kg" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="imperial"
                        className={[classes.fieldsContainer, classes.imperial].join(" ")}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <InputField label="Height" units={["ft", "in"]} />
                        <InputField label="Weight" units={["st", "lbs"]} />
                    </motion.div>
                )}
            </AnimatePresence>


            <InfoBar result={0} />
        </div>
    );
};

export default Calculator;
