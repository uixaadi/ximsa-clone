import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorFollower = ({ cursorVariant }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      setCursorPosition({ x: clientX, y: clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: cursorPosition.x - 5,
      y: cursorPosition.y - 5,
    },
    onenter: {
      height: 100,
      width: 100,
      x: cursorPosition.x - 50,
      y: cursorPosition.y - 50,
    },
  };

  return (
    <motion.div className="cursor-follower flex items-center justify-center" variants={variants} animate={cursorVariant}>
      {cursorVariant === 'onenter' && <div className="font-bold text-white">View</div>}
    </motion.div>
  );
};

export default CursorFollower;
