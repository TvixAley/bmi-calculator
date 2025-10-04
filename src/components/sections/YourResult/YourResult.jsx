import React from 'react';
import classes from './YourResult.module.css'
import image from '../../../assets/images/image-man-eating.webp'
import imageTablet from '../../../assets/images/image-man-eating-tablet.webp'

const YourResult = () => {
    return (
        <section className={classes.resultsSection}>
            <picture>
                <source srcSet={image} width={375} height={355} media="(max-width: 600px)"/>
                <source srcSet={image} width={564} height={532} media="(min-width: 1100px)"/>
                <img className={classes.image} src={imageTablet} alt="Man eating sushi" width={435} height={411}/>
            </picture>
            <div className={classes.explanationContainer}>
                <h2 className={classes.explanationTitle}>What your BMI result means</h2>
                <p className={classes.explanationText}>A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower
                    your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a
                    nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables.
                    Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a
                    week.</p>
            </div>
        </section>
    );
};

export default YourResult;