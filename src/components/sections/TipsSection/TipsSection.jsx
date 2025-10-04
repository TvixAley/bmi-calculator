import React from 'react';
import classes from './TipsSection.module.css'
import TipCard from "./TipCard/TipCard.jsx";
import eatingIcon from '../../../assets/images/icon-eating.svg';
import exerciseIcon from '../../../assets/images/icon-exercise.svg';
import sleepIcon from '../../../assets/images/icon-sleep.svg';

const TipsSection = () => {
    const content = [
        {
            title: 'Healthy eating',
            image: eatingIcon,
            text: 'Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.'
        },
        {
            title: 'Regular exercise',
            image: exerciseIcon,
            text: 'Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.'
        },
        {
            title: 'Adequate sleep',
            image: sleepIcon,
            text: 'Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.'
        }
    ]

    return (
        <section className={classes.tipsSection}>
            <ul className={classes.tipsCardList}>
                {content.map(cardContent => (
                    <li key={cardContent.title}>
                        <TipCard cardContent={cardContent}/>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default TipsSection;