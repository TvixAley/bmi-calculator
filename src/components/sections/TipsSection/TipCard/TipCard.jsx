import React from 'react';
import classes from './TipCard.module.css'

const TipCard = ({cardContent}) => {
    return (
        <div className={classes.card}>
            <img src={cardContent.image} width={64} height={64} alt={''}/>
            <div className={classes.textContainer}>
                <b className={classes.title}>{cardContent.title}</b>
                <p className={classes.description}>{cardContent.text}</p>
            </div>
        </div>
    );
};

export default TipCard;