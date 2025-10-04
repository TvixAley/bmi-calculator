import React from 'react';
import classes from './InfoBar.module.css'
import {kgToStLbs} from "../../../utils/conversions.js";
import { motion, AnimatePresence, animate } from "framer-motion";
import AnimatedNumber from "../../AnimatedNumber/AnimatedNumber.jsx";





const InfoBar = ({result, system}) => {
    const formatWeightString = (w, system) => {
        if (system === 'metric') {
            return `${w}kgs`;
        } else {
            let imperialW = kgToStLbs(w);
            return `${imperialW.stones}st ${imperialW.lbs}lbs`;
        }
    };

    return (
        <div className={classes.infoBar}>
            <AnimatePresence mode="wait">
                {result ? (
                    <motion.div
                        key="result"
                        initial={{opacity: 0, height: 0}}
                        animate={{opacity: 1, height: 'auto'}}
                        exit={{opacity: 0, height: 0}}
                        transition={{duration: 0.3, ease: "easeInOut"}}
                        className={classes.resultContainer}
                    >
                        <div className={classes.leftColumn}>
                            <div className={classes.resultTitle}>Your BMI is...</div>
                            <span className={classes.result}>
                                <AnimatedNumber value={Number(result.bmi)} />
                            </span>
                        </div>
                        <p className={classes.description}>
                            Your BMI suggests you’re a healthy weight.
                            Your ideal weight is between{" "}
                            <b>
                                {formatWeightString(result.minWeight, system)} -{" "}
                                {formatWeightString(result.maxWeight, system)}.
                            </b>
                        </p>
                    </motion.div>
                ) : (
                    <motion.div
                        key="welcome"
                        initial={{opacity: 0, height: 0}}
                        animate={{opacity: 1, height: 'auto'}}
                        exit={{opacity: 0, height: 0}}
                        transition={{duration: 0.3}}
                        className={classes.welcomeContainer}
                    >
                        <div className={classes.title}>Welcome</div>
                        <p className={classes.description}>
                            Enter your height and weight and you’ll see your BMI result here
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};


export default InfoBar;