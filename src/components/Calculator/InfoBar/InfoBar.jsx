import React from 'react';
import classes from './InfoBar.module.css'
import {kgToStLbs} from "../../../utils/conversions.js";

const InfoBar = ({result, system}) => {

    const formatWeightString = (w, system) => {
        if (system === 'metric'){
            return `${w}kgs`
        }
        else{
            let imperialW = kgToStLbs(w)
            return `${imperialW.stones}st ${imperialW.lbs}lbs`
        }
    }


    return (
        <div className={classes.infoBar}>
            {result ? (
                <>
                    <div className={classes.resultContainer}>
                        <div className={classes.leftColumn}>
                            <div className={classes.resultTitle}>Your BMI is...</div>
                            <span className={classes.result}>{result.bmi}</span>
                        </div>
                        <p className={classes.description}>Your BMI suggests you’re a healthy weight.
                            Your ideal weight is between <b>{formatWeightString(result.minWeight, system)} - {formatWeightString(result.maxWeight, system)}.</b></p>
                    </div>
                </>
            ) : (
                <>
                    <div className={classes.title}>Welcome</div>
                    <p className={classes.description}>Enter your height and weight and you’ll see your BMI result here</p>
                </>
            )}
        </div>
    );
};

export default InfoBar;