import React, { useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

const CircularProgressBar = ({ percentage, maxPercentage }) => {
  const circleRef = React.useRef(null);
  const circumference = 2 * Math.PI * 54;
  const offset = (100 - percentage) / 100 * circumference;

  const control = useAnimation();

  useEffect(() => {
    control.start({
      strokeDashoffset: offset,
      transition: { duration: 1, ease: 'linear' }
    });
  }, [offset, control]);

  return (
    <svg width="215" height="215" viewBox="0 0 120 120">
      <circle
        cx="60"
        cy="60"
        r="54"
        fill="transparent"
        stroke="#424245"
        strokeWidth="6"
      />
      <motion.circle
        ref={circleRef}
        cx="60"
        cy="60"
        r="54"
        fill="transparent"
        stroke="#5E80DA"
        strokeWidth="6"
        strokeDasharray={circumference}
        strokeDashoffset={circumference}
        animate={control}
      />
      <AnimatePresence>
        <motion.text
          key={percentage}
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ fontWeight: 'bold', fill: 'white', fontSize: '32px' }}
        >
          {percentage}%
        </motion.text>
      </AnimatePresence>
    </svg>
  );
};

export default CircularProgressBar;
