import React from 'react';
import classes from './Hero.module.css'
import logo from '../../../assets/images/logo.svg'
import Calculator from "../../Calculator/Calculator.jsx";

const Hero = () => {
    return (
        <section className={classes.hero}>
            <img src={logo} alt="" width={58} height={58}/>
            <div className={classes.content}>
                <div className={classes.textContainer}>
                    <h1 className={classes.title}>Body Mass <br/>Index Calculator</h1>
                    <p className={classes.description}>Better understand your weight in relation to your height using
                        our body mass index (BM) calculator.
                        While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point
                        to evaluate your overall health and well-being.
                    </p>
                </div>
                <Calculator/>
            </div>
        </section>
    );
};

export default Hero;