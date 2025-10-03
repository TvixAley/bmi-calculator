import React from 'react';
import classes from './InputField.module.css'

const InputField = ({label, units, value, values, onChange}) => {
    return (
        <div className={classes.container}>
            <label className={classes.label}>{label}</label>
            <div className={classes.fieldsWrapper}>
                {Array.isArray(units) ? (
                    units.map((unit, i) => (
                        <div key={unit} className={classes.inputContainer}>
                            <input className={classes.input}
                                   placeholder={'0'}
                                   value={values[i]}
                                   onChange={event => onChange(unit, event.target.value)}
                            />
                            <span className={classes.units}>{unit}</span>
                        </div>
                    ))
                ) : (
                    <div className={classes.inputContainer}>
                        <input className={classes.input}
                               placeholder={'0'}
                               value={value}
                               onChange={event => onChange(event.target.value)}
                        />
                        <span className={classes.units}>{units}</span>
                    </div>
                )}
            </div>
        </div>
    );
};


export default InputField;