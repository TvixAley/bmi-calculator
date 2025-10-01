import React from 'react';
import classes from './InputField.module.css'

const InputField = ({ label, units }) => {
    return (
        <div className={classes.container}>
            <label className={classes.label}>{label}</label>
            <div className={classes.fieldsWrapper}>
                {Array.isArray(units) ? (
                    units.map((unit, i) => (
                        <div key={unit} className={classes.inputContainer}>
                            <input className={classes.input} placeholder={'0'}/>
                            <span className={classes.units}>{unit}</span>
                        </div>
                    ))
                ) : (
                    <div className={classes.inputContainer}>
                        <input className={classes.input}  placeholder={'0'}/>
                        <span className={classes.units}>{units}</span>
                    </div>
                )}
            </div>
        </div>
    );
};


export default InputField;