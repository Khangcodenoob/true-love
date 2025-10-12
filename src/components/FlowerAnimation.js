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
      y: -50,
      size: Math.random() * 25 + 15,
      rotation: Math.random() * 360,
      fallSpeed: Math.random() * 2.5 + 1,
      rotationSpeed: Math.random() * 6 - 3,
      type: Math.random() > 0.6 ? 'flower' : 'petal',
      opacity: Math.random() * 0.8 + 0.2,
      sway: Math.random() * 2 - 1
    };
    return flower;
  };

  // Create floating hearts
  const createHeart = () => {
    const heart = {
      id: Date.now() + Math.random(),
      x: Math.random() * window.innerWidth,
      y: window.innerHeight + 50,
      size: Math.random() * 20 + 10,
      floatSpeed: Math.random() * 2 + 0.8,
      opacity: Math.random() * 0.8 + 0.2,
      sway: Math.random() * 3 - 1.5,
      rotation: Math.random() * 360,
      rotationSpeed: Math.random() * 4 - 2
    };
    return heart;
  };

  // Initialize animations
  useEffect(() => {
    // Create initial flowers
    const initialFlowers = Array.from({ length: 20 }, createFlower);
    setFlowers(initialFlowers);

    // Create initial hearts
    const initialHearts = Array.from({ length: 12 }, createHeart);
    setHearts(initialHearts);

    // Flower generation interval
    const flowerInterval = setInterval(() => {
      setFlowers(prevFlowers => {
        const newFlower = createFlower();
        return [...prevFlowers.slice(-25), newFlower];
      });
    }, 1200);

    // Heart generation interval
    const heartInterval = setInterval(() => {
      setHearts(prevHearts => {
        const newHeart = createHeart();
        return [...prevHearts.slice(-18), newHeart];
      });
    }, 2000);

    // Animation loop
    const animate = () => {
      setFlowers(prevFlowers => 
        prevFlowers.map(flower => ({
          ...flower,
          y: flower.y + flower.fallSpeed,
          rotation: flower.rotation + flower.rotationSpeed,
          x: flower.x + Math.sin(flower.y * 0.01) * flower.sway * 0.3,
          opacity: flower.opacity + Math.sin(Date.now() * 0.002 + flower.id) * 0.1
        })).filter(flower => flower.y < window.innerHeight + 100)
      );

      setHearts(prevHearts => 
        prevHearts.map(heart => ({
          ...heart,
          y: heart.y - heart.floatSpeed,
          x: heart.x + heart.sway * 0.2,
          rotation: heart.rotation + heart.rotationSpeed,
          opacity: heart.opacity + Math.sin(Date.now() * 0.003 + heart.id) * 0.15
        })).filter(heart => heart.y > -100)
      );
    };

    const animationInterval = setInterval(animate, 80);

    return () => {
      clearInterval(flowerInterval);
      clearInterval(heartInterval);
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <div className="flower-animation">
      {/* Falling flowers */}
      {flowers.map(flower => (
        <div
          key={flower.id}
          className={`flower ${flower.type}`}
          style={{
            left: flower.x,
            top: flower.y,
            width: flower.size,
            height: flower.size,
            transform: `rotate(${flower.rotation}deg)`,
            opacity: Math.min(flower.opacity, flower.y > window.innerHeight - 200 ? 
              Math.max(0, (window.innerHeight - flower.y) / 200) : 1)
          }}
        >
          {flower.type === 'flower' ? '🌸' : '🌺'}
        </div>
      ))}

      {/* Floating hearts */}
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="heart"
          style={{
            left: heart.x,
            top: heart.y,
            width: heart.size,
            height: heart.size,
            transform: `rotate(${heart.rotation}deg)`,
            opacity: heart.opacity
          }}
        >
          💖
        </div>
      ))}

      {/* Confetti effect on load */}
      <div className="confetti-container">
        {Array.from({ length: 50 }).map((_, index) => (
          <div
            key={index}
            className="confetti"
            style={{
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 3 + 's',
              backgroundColor: ['#ff6b9d', '#ffc0cb', '#fff8dc', '#ffb6c1'][Math.floor(Math.random() * 4)]
            }}
          />
        ))}
      </div>

      {/* Romantic floating elements */}
      <div className="romantic-elements">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="romantic-element"
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: (Math.random() * 3 + 4) + 's'
            }}
          >
            {['💕', '💖', '💗', '💝', '🌹', '💐', '✨', '💫'][index]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlowerAnimation;
