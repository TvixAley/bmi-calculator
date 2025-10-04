import React, {useEffect} from 'react';
import {animate, motion, useMotionValue, useTransform} from "framer-motion";

const AnimatedNumber = ({ value }) => {
    const motionValue = useMotionValue(0);
    const rounded = useTransform(motionValue, (latest) => latest.toFixed(1));

    useEffect(() => {
        const controls = animate(motionValue, value, {
            duration: 0.6,
            ease: "easeOut"
        });
        return controls.stop;
    }, [value]);

    return <motion.span>{rounded}</motion.span>;
};

export default AnimatedNumber;