import React, {useState} from 'react';
import classes from './Calculator.module.css'
import RadioButton from "../UI/RadioButton/RadioButton.jsx";
import InputField from "../UI/InputField/InputField.jsx";
import InfoBar from "./InfoBar/InfoBar.jsx";

const Calculator = () => {
    const [system, setSystem] = useState('radio-metric')

    const handleRadioChange = (value) => {
        setSystem(value);
    };

    return (
        <div className={classes.calculator}>
            <div className={classes.title}>Enter your details below</div>
            <div className={classes.selectionContainer}>
                <div className={classes.selectionInputContainer}>
                    <RadioButton id={'radio-metric'}
                                 name={'metric-select'}
                                 label={'Metric'}
                                 checked={system === 'radio-metric'}
                                 onChange={handleRadioChange}
                    />
                </div>
                <div className={classes.selectionInputContainer}>
                    <RadioButton id={'radio-imperial'}
                                 name={'metric-select'}
                                 label={'Imperial'}
                                 checked={system === 'radio-imperial'}
                                 onChange={handleRadioChange}
                    />
                </div>
            </div>
            {system === 'radio-metric' ? (
                <div className={classes.fieldsContainer}>
                    <InputField label={'Height'} units={'cm'}/>
                    <InputField label={'Weight'} units={'kg'}/>
                </div>) : (
                <>
                    <InputField label="Height" units={["ft", "in"]} />
                    <InputField label="Weight" units={["st", "lbs"]} />
                </>
            )}

            <InfoBar result={0}/>
        </div>
    );
};

export default Calculator;