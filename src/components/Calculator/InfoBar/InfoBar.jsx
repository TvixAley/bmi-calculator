import React from 'react';
import classes from './InfoBar.module.css'

const InfoBar = ({result}) => {
    return (
        <div className={classes.infoBar}>
            {result ? (
                <>
                    <div className={classes.resultContainer}>
                        <div className={classes.leftColumn}>
                            <div className={classes.resultTitle}>Your BMI is...</div>
                            <span className={classes.result}>{result}</span>
                        </div>
                        <p className={classes.description}>Your BMI suggests you’re a healthy weight.
                            Your ideal weight is between <b>63.3kgs - 85.2kgs.</b></p>
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