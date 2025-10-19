import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import FlowerAnimation from './components/FlowerAnimation';

function App() {
  const audioRef = useRef(null);
  const replayTimeoutRef = useRef(null);
  const interactionBoundRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [loveMessage, setLoveMessage] = useState(''); 
  const [showHearts, setShowHearts] = useState([]);

  // Initialize background music using an <audio> element in DOM
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = false;
    audio.volume = 0.3;
    audio.preload = 'auto';
    // ensure the browser is aware of the source
    try { audio.load(); } catch (_) {}

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      setIsPlaying(false);
      // Attempt gentle replay after a short delay if user did not pause
      replayTimeoutRef.current = window.setTimeout(() => {
        if (!audioRef.current) return;
        if (audioRef.current.paused) return;
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {});
      }, 1000);
    };

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);

    // Try to autoplay (will be blocked in most cases)
    audio.play().catch((error) => {
      console.log('Autoplay blocked:', error.message);
      setIsPlaying(false);
      if (!interactionBoundRef.current) {
        interactionBoundRef.current = true;
        const resumeOnInteraction = () => {
          const a = audioRef.current;
          if (!a) return;
          // iOS unlock: play muted then unmute
          const originalMuted = a.muted;
          a.muted = true;
          a.play().then(() => {
            a.muted = originalMuted;
            setIsPlaying(true);
            window.removeEventListener('pointerdown', resumeOnInteraction);
            window.removeEventListener('keydown', resumeOnInteraction);
            window.removeEventListener('click', resumeOnInteraction);
          }).catch((err) => {
            console.log('Play failed:', err.message);
            setIsPlaying(false);
          });
        };
        window.addEventListener('pointerdown', resumeOnInteraction, { once: true });
        window.addEventListener('keydown', resumeOnInteraction, { once: true });
        window.addEventListener('click', resumeOnInteraction, { once: true });
      }
    });

    return () => {
      if (replayTimeoutRef.current) {
        window.clearTimeout(replayTimeoutRef.current);
      }
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
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

  // Blessing messages for Thao My
  const blessingMessages = [
    "Chúc Thảo My luôn xinh đẹp và rạng rỡ 💖",
    "Mong bạn luôn khỏe mạnh và tràn đầy năng lượng 🌟",
    "Chúc bạn gặp nhiều may mắn trong cuộc sống 🍀",
    "Mong bạn luôn hạnh phúc và thành công 💕",
    "Chúc bạn có những ngày tháng tuyệt vời 🌹",
    "Mong bạn luôn mỉm cười và lạc quan ☀️",
    "Chúc bạn đạt được mọi ước mơ 💐",
    "Mong bạn luôn được yêu thương và trân trọng 💝"
  ];

  // Show random blessing message
  useEffect(() => {
    const showRandomMessage = () => {
      // Check if window height is sufficient to avoid overlapping with footer
      const windowHeight = window.innerHeight;
      const footerHeight = 80; // Approximate footer height
      const popupHeight = 100; // Approximate popup height
      
      // Only show popup if there's enough space
      if (windowHeight > 600) {
        const randomMessage = blessingMessages[Math.floor(Math.random() * blessingMessages.length)];
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
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch((error) => {
        console.log('Play failed:', error.message);
        // iOS/Autoplay unlock fallback: play muted then unmute
        const originalMuted = audio.muted;
        audio.muted = true;
        audio.play()
          .then(() => {
            audio.muted = originalMuted;
            setIsPlaying(true);
          })
          .catch((err) => {
            console.log('Muted play also failed:', err.message);
            setIsPlaying(false);
          });
      });
    } else {
      audio.pause();
      setIsPlaying(false);
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
            Gửi đến Thảo My
          </h1>
          <h2 className="date-title">Lời chúc từ trái tim</h2>
          
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
            Ê nhỏ Thảo My! Tao muốn gửi đến mày những lời chúc tốt đẹp nhất. 
            Chúc mày luôn xinh đẹp, khỏe mạnh và hạnh phúc trong cuộc sống. 
            Mong mày luôn thành công và gặp nhiều may mắn! 💕
            20/10 chỉ biết làm cái này tặng mày thôi, tao bận quá chứ ko cũng rủ mày đi chơi, à mà quên m có người yêu rồi tao rủ làm gì nữa           </p>
          
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
        
        {/* Blessing Message Popup */}
        {loveMessage && (
          <div className="love-message-popup">
            <p>{loveMessage}</p>
          </div>
        )}
      </div>

      {/* Hidden audio element for better compatibility */}
      <audio
        ref={audioRef}
        src={`${process.env.PUBLIC_URL}/background-music.mp3`}
        preload="auto"
        playsInline
        aria-hidden="true"
        tabIndex={-1}
        style={{ display: 'none' }}
      />

      {/* Music control button */}
      <button
        className="music-toggle"
        onClick={toggleMusic}
        aria-label={isPlaying ? 'Tắt nhạc' : 'Phát nhạc'}
        title={isPlaying ? 'Tắt nhạc' : 'Phát nhạc (Click để bật nhạc nền)'}
      >
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
