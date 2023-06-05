import { useEffect, useState } from 'react';

const CursorFollower = () => {
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

  return (
    <div
      className="cursor-follower"
      style={{
        position: 'fixed',
        left: cursorPosition.x,
        top: cursorPosition.y,
        transform: 'translate(-50%, -50%)',
        transition: 'transform 0.2s ease-out',
      }}
    />
  );
};

export default CursorFollower;
