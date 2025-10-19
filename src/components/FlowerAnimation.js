import React, { useEffect, useState } from 'react';
import './FlowerAnimation.css';

const FlowerAnimation = () => {
  const [flowers, setFlowers] = useState([]);
  const [hearts, setHearts] = useState([]);

  // Create falling flowers
  const createFlower = () => {
    const flower = {
      id: Date.now() + Math.random(),
      x: Math.random() * window.innerWidth,
      y: -80,
      size: Math.random() * 30 + 20,
      rotation: Math.random() * 360,
      fallSpeed: Math.random() * 3 + 1.5,
      rotationSpeed: Math.random() * 8 - 4,
      type: Math.random() > 0.5 ? 'flower' : 'petal',
      opacity: Math.random() * 0.9 + 0.3,
      sway: Math.random() * 3 - 1.5,
      scale: Math.random() * 0.5 + 0.8,
      glow: Math.random() * 0.5 + 0.5
    };
    return flower;
  };

  // Create floating hearts
  const createHeart = () => {
    const heart = {
      id: Date.now() + Math.random(),
      x: Math.random() * window.innerWidth,
      y: window.innerHeight + 80,
      size: Math.random() * 25 + 15,
      floatSpeed: Math.random() * 2.5 + 1,
      opacity: Math.random() * 0.9 + 0.3,
      sway: Math.random() * 4 - 2,
      rotation: Math.random() * 360,
      rotationSpeed: Math.random() * 6 - 3,
      scale: Math.random() * 0.6 + 0.9,
      glow: Math.random() * 0.6 + 0.4
    };
    return heart;
  };

  // Initialize animations
  useEffect(() => {
    // Create initial flowers
    const initialFlowers = Array.from({ length: 25 }, createFlower);
    setFlowers(initialFlowers);

    // Create initial hearts
    const initialHearts = Array.from({ length: 15 }, createHeart);
    setHearts(initialHearts);

    // Flower generation interval
    const flowerInterval = setInterval(() => {
      setFlowers(prevFlowers => {
        const newFlower = createFlower();
        return [...prevFlowers.slice(-30), newFlower];
      });
    }, 1000);

    // Heart generation interval
    const heartInterval = setInterval(() => {
      setHearts(prevHearts => {
        const newHeart = createHeart();
        return [...prevHearts.slice(-20), newHeart];
      });
    }, 1500);

    // Enhanced animation loop
    const animate = () => {
      setFlowers(prevFlowers => 
        prevFlowers.map(flower => ({
          ...flower,
          y: flower.y + flower.fallSpeed,
          rotation: flower.rotation + flower.rotationSpeed,
          x: flower.x + Math.sin(flower.y * 0.008) * flower.sway * 0.5,
          opacity: Math.max(0, Math.min(1, flower.opacity + Math.sin(Date.now() * 0.003 + flower.id) * 0.2)),
          scale: flower.scale + Math.sin(Date.now() * 0.002 + flower.id) * 0.1
        })).filter(flower => flower.y < window.innerHeight + 150)
      );

      setHearts(prevHearts => 
        prevHearts.map(heart => ({
          ...heart,
          y: heart.y - heart.floatSpeed,
          x: heart.x + heart.sway * 0.3 + Math.sin(Date.now() * 0.001 + heart.id) * 2,
          rotation: heart.rotation + heart.rotationSpeed,
          opacity: Math.max(0, Math.min(1, heart.opacity + Math.sin(Date.now() * 0.004 + heart.id) * 0.2)),
          scale: heart.scale + Math.sin(Date.now() * 0.003 + heart.id) * 0.15
        })).filter(heart => heart.y > -150)
      );
    };

    const animationInterval = setInterval(animate, 60);

    return () => {
      clearInterval(flowerInterval);
      clearInterval(heartInterval);
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <div className="flower-animation">
      {/* Enhanced falling flowers */}
      {flowers.map(flower => (
        <div
          key={flower.id}
          className={`flower ${flower.type}`}
          style={{
            left: flower.x,
            top: flower.y,
            width: flower.size,
            height: flower.size,
            transform: `rotate(${flower.rotation}deg) scale(${flower.scale})`,
            opacity: Math.min(flower.opacity, flower.y > window.innerHeight - 250 ? 
              Math.max(0, (window.innerHeight - flower.y) / 250) : 1),
            filter: `drop-shadow(0 0 ${8 + flower.glow * 4}px rgba(255, 107, 157, ${0.4 + flower.glow * 0.3}))`
          }}
        >
          {flower.type === 'flower' ? '🌸' : '🌺'}
        </div>
      ))}

      {/* Enhanced floating hearts */}
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="heart"
          style={{
            left: heart.x,
            top: heart.y,
            width: heart.size,
            height: heart.size,
            transform: `rotate(${heart.rotation}deg) scale(${heart.scale})`,
            opacity: heart.opacity,
            filter: `drop-shadow(0 0 ${10 + heart.glow * 5}px rgba(255, 182, 193, ${0.5 + heart.glow * 0.4}))`
          }}
        >
          💖
        </div>
      ))}

      {/* Enhanced confetti effect on load */}
      <div className="confetti-container">
        {Array.from({ length: 60 }).map((_, index) => (
          <div
            key={index}
            className="confetti"
            style={{
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 4 + 's',
              backgroundColor: ['#ff6b9d', '#ffc0cb', '#fff8dc', '#ffb6c1', '#ff69b4', '#ff1493'][Math.floor(Math.random() * 6)],
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          />
        ))}
      </div>

      {/* Enhanced romantic floating elements */}
      <div className="romantic-elements">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="romantic-element"
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 6 + 's',
              animationDuration: (Math.random() * 4 + 5) + 's',
              fontSize: (Math.random() * 0.5 + 1.2) + 'rem'
            }}
          >
            {['💕', '💖', '💗', '💝', '🌹', '💐', '✨', '💫', '🌟', '⭐', '🌺', '🌸'][index]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlowerAnimation;
