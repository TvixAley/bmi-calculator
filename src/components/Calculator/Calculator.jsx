import React, { useState, useRef } from 'react';
import classes from './Calculator.module.css';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import RadioButton from "../UI/RadioButton/RadioButton.jsx";
import InputField from "../UI/InputField/InputField.jsx";
import InfoBar from "./InfoBar/InfoBar.jsx";

const Calculator = () => {
    const [system, setSystem] = useState('radio-metric');
    // nodeRef должен указывать на реальный DOM-элемент (div)
    const nodeRef = useRef(null);

    const handleRadioChange = (value) => setSystem(value);

    return (
        <div className={classes.calculator}>
            <div className={classes.title}>Enter your details below</div>

            <div className={classes.selectionContainer}>
                <div className={classes.selectionInputContainer}>
                    <RadioButton id="radio-metric" name="metric-select" label="Metric"
                                 checked={system === 'radio-metric'} onChange={handleRadioChange} />
                </div>
                <div className={classes.selectionInputContainer}>
                    <RadioButton id="radio-imperial" name="metric-select" label="Imperial"
                                 checked={system === 'radio-imperial'} onChange={handleRadioChange} />
                </div>
            </div>

            <SwitchTransition mode="out-in">
                <CSSTransition
                    key={system}
                    nodeRef={nodeRef}
                    timeout={200}
                    unmountOnExit
                    classNames={{
                        enter: classes.fadeEnter,
                        enterActive: classes.fadeEnterActive,
                        enterDone: classes.fadeEnterDone,
                        exit: classes.fadeExit,
                        exitActive: classes.fadeExitActive,
                    }}
                >
                    <div ref={nodeRef}>
                        {system === 'radio-metric' ? (
                            <div className={classes.fieldsContainer}>
                                <InputField label="Height" units="cm" />
                                <InputField label="Weight" units="kg" />
                            </div>
                        ) : (
                            <>
                                <InputField label="Height" units={["ft", "in"]} />
                                <InputField label="Weight" units={["st", "lbs"]} />
                            </>
                        )}
                    </div>
                </CSSTransition>
            </SwitchTransition>

            <InfoBar result={0} />
        </div>
    );
};

export default Calculator;
