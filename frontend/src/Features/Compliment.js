import React, { useState } from 'react';
import '../css/Compliment.css'; // Import the CSS file for the component

const Compliment = () => {
  compliments = [
    "Your smile radiates warmth and happiness, brightening any room you enter.",
    "Your kindness and compassion touch the hearts of those around you, leaving a lasting impact.",
    "Your sense of style is impeccable and unique, setting you apart with effortless elegance.",
    "Your intelligence and quick thinking impress and inspire others, making you a trusted source of wisdom.",
    "Your creativity knows no limits, bringing beauty and innovation to everything you do.",
    "Your positive energy uplifts and energizes those in your presence, creating a joyful atmosphere.",
    "Your dedication and hard work are truly admirable qualities, driving you to achieve great things.",
    "Your sense of humor is infectious, bringing laughter and joy to all who have the pleasure of knowing you.",
    "Your determination and resilience are sources of inspiration, motivating others to overcome challenges.",
    "Your genuine nature and warmth make you a treasured friend to many, creating deep and meaningful connections."
];

  const [currentCompliment, setCurrentCompliment] = useState('');
  const [isShaking, setIsShaking] = useState(false);

  const generateCompliment = () => {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    const randomCompliment = compliments[randomIndex];
    setCurrentCompliment(randomCompliment);
    setIsShaking(true);

    // Stop shaking after 500 milliseconds (adjust as needed)
    setTimeout(() => {
      setIsShaking(false);
    }, 500);
  };

  return (
    <div className="compliment-container">

        <h2>Compliment Jar</h2>
      <div className={`jar-image-container ${isShaking ? 'shake-animation' : ''}`}>
        <img
          className="jar-image"
          src="https://static.vecteezy.com/system/resources/previews/009/637/571/original/cute-cartoon-jar-file-png.png"
          alt="Compliment Jar"
        />
      </div>
      <p className="compliment-text">{currentCompliment}</p>
      <button className="compliment-button" onClick={generateCompliment}>
        Get Compliment
      </button>
    </div>
  );
};

export default Compliment;