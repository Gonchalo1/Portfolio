// BouncingBall.js
import React, { useEffect, useRef, useState } from 'react';
import '../../../App.css';

const BouncingBall = () => {
  const ballRef = useRef(null);
  const containerRef = useRef(null);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [direction, setDirection] = useState({ dx: 2, dy: 2 });

  useEffect(() => {
    const ball = ballRef.current;
    const container = containerRef.current;

    const updatePosition = () => {
      setPosition(prev => {
        const newX = prev.x + direction.dx;
        const newY = prev.y + direction.dy;
        const ballWidth = ball.clientWidth;
        const ballHeight = ball.clientHeight;
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;

        if (newX <= 0 || newX >= containerWidth - ballWidth) {
          setDirection(prev => ({ ...prev, dx: -prev.dx }));
        }
        if (newY <= 0 || newY >= containerHeight - ballHeight) {
          setDirection(prev => ({ ...prev, dy: -prev.dy }));
        }

        return { x: newX, y: newY };
      });
    };

    const intervalId = setInterval(updatePosition, 10);

    return () => clearInterval(intervalId);
  }, [direction]);

  return (
    <div ref={containerRef} className="container">
      <div
        ref={ballRef}
        className="bouncing-ball"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
    </div>
  );
};

export default BouncingBall;
