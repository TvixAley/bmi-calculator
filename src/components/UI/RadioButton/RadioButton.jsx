import React from 'react';
import classes from './RadioButton.module.css'

const RadioButton = ({id, name, label, disabled, checked, onChange}) => {
    return (
        <div className={classes.wrapper}>
            <input id={id}
                   name={name}
                   type={'radio'}
                   className={classes.input}
                   disabled={disabled}
                   checked={checked}
                   onChange={(e) => onChange(e.target.id)}
            />
            <label htmlFor={id} className={classes.label}>{label}</label>
        </div>
    );
};

export default RadioButton;