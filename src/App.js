import React, { useState, useEffect } from 'react';
import './App.css';
import FlowerAnimation from './components/FlowerAnimation';

function App() {
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [loveMessage, setLoveMessage] = useState('');
  const [showHearts, setShowHearts] = useState([]);

  // Initialize background music
  useEffect(() => {
    const backgroundAudio = new Audio('/background-music.mp3');
    backgroundAudio.loop = false; // Tắt loop tự động
    backgroundAudio.volume = 0.3;
    setAudio(backgroundAudio);

    // Auto-play music when page loads
    const playMusic = async () => {
      try {
        await backgroundAudio.play();
        setIsPlaying(true);
      } catch (error) {
        console.log('Auto-play was prevented by browser');
        setIsPlaying(false);
      }
    };

    // Add event listeners for audio state changes
    backgroundAudio.addEventListener('play', () => setIsPlaying(true));
    backgroundAudio.addEventListener('pause', () => setIsPlaying(false));
    backgroundAudio.addEventListener('ended', () => {
      setIsPlaying(false);
      // Phát lại từ đầu khi nhạc kết thúc
      setTimeout(() => {
        backgroundAudio.currentTime = 0;
        backgroundAudio.play().catch(error => {
          console.log('Could not replay audio:', error);
        });
      }, 1000); // Chờ 1 giây rồi phát lại
    });

    playMusic();

    return () => {
      if (backgroundAudio) {
        backgroundAudio.pause();
      }
    };
  }, []);

  // Countdown timer
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      const targetDate = new Date(currentYear, 9, 20); // October 20th (month is 0-indexed)
      
      // If the date has passed this year, target next year
      if (targetDate < now) {
        targetDate.setFullYear(currentYear + 1);
      }
      
      const difference = targetDate - now;
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  // Love messages
  const loveMessages = [
    "Em là ánh sáng trong cuộc đời anh 💖",
    "Mỗi ngày bên em đều là một món quà 🎁",
    "Anh yêu em hơn cả những gì anh có thể diễn tả 💕",
    "Em làm trái tim anh hạnh phúc mỗi ngày 🌹",
    "Cảm ơn em đã là người phụ nữ tuyệt vời nhất 💐",
    "Anh muốn dành cả đời để yêu thương em 💝",
    "Em là lý do anh mỉm cười mỗi sáng ☀️",
    "Tình yêu của anh dành cho em là vô tận ♾️"
  ];

  // Show random love message
  useEffect(() => {
    const showRandomMessage = () => {
      // Check if window height is sufficient to avoid overlapping with footer
      const windowHeight = window.innerHeight;
      const footerHeight = 80; // Approximate footer height
      const popupHeight = 100; // Approximate popup height
      
      // Only show popup if there's enough space
      if (windowHeight > 600) {
        const randomMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)];
        setLoveMessage(randomMessage);
        
        // Hide message after 5 seconds
        setTimeout(() => {
          setLoveMessage('');
        }, 5000);
      }
    };

    // Show message every 15 seconds
    const messageInterval = setInterval(showRandomMessage, 15000);
    
    // Show first message after 3 seconds
    setTimeout(showRandomMessage, 3000);

    return () => clearInterval(messageInterval);
  }, []);

  // Interactive hearts on click
  const handleContainerClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newHeart = {
      id: Date.now(),
      x: x,
      y: y,
      timestamp: Date.now()
    };
    
    setShowHearts(prev => [...prev, newHeart]);
    
    // Remove heart after animation
    setTimeout(() => {
      setShowHearts(prev => prev.filter(heart => heart.id !== newHeart.id));
    }, 2000);
  };

  // Toggle music play/pause
  const toggleMusic = () => {
    if (audio) {
      if (audio.paused) {
        audio.play().catch(error => {
          console.log('Could not play audio:', error);
          setIsPlaying(false);
        });
      } else {
        audio.pause();
      }
    }
  };

  return (
    <div className="App">
      {/* Background animations */}
      <FlowerAnimation />
      
      {/* Main content */}
      <div className="main-content">
        <div className="celebration-container" onClick={handleContainerClick}>
          <div className="sparkle-1">✨</div>
          <div className="sparkle-2">⭐</div>
          <div className="sparkle-3">💫</div>
          
          <h1 className="main-title">
            Gửi đến em yêu của anh
          </h1>
          <h2 className="date-title">20 tháng 10</h2>
          
          {/* Countdown Timer */}
          <div className="countdown-container">
            <h3 className="countdown-title">Còn lại đến ngày đặc biệt:</h3>
            <div className="countdown-timer">
              <div className="countdown-item">
                <span className="countdown-number">{timeLeft.days}</span>
                <span className="countdown-label">Ngày</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-number">{timeLeft.hours}</span>
                <span className="countdown-label">Giờ</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-number">{timeLeft.minutes}</span>
                <span className="countdown-label">Phút</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-number">{timeLeft.seconds}</span>
                <span className="countdown-label">Giây</span>
              </div>
            </div>
          </div>
          
          <p className="main-message">
            Em là người phụ nữ tuyệt vời nhất trong cuộc đời anh. 
            Chúc em luôn xinh đẹp, hạnh phúc và thành công trong mọi việc. 
            Anh yêu em rất nhiều! 💕
          </p>
          
          {/* Interactive Hearts */}
          {showHearts.map(heart => (
            <div
              key={heart.id}
              className="interactive-heart"
              style={{
                left: heart.x,
                top: heart.y,
              }}
            >
              💖
            </div>
          ))}
        </div>
        
        {/* Love Message Popup */}
        {loveMessage && (
          <div className="love-message-popup">
            <p>{loveMessage}</p>
          </div>
        )}
      </div>

      {/* Music control button */}
      <button className="music-toggle" onClick={toggleMusic}>
        {isPlaying ? '🔊' : '🔇'}
      </button>

      {/* Footer */}
      <footer className="footer">
        <p>Made with 💖 by KhangDC</p>
      </footer>
    </div>
  );
}

export default App;
