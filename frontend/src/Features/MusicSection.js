import React, { useState } from 'react';
import YouTube from 'react-youtube';
import Navbar from '../NavBar';
import '../css/MusicSection.css';

const MusicSection = () => {
  const songs = [
      {
        title: 'Happiness in Liquid Form',
        artist: 'Alfie Templeman',
        description: 'Love this one.',
        youtubeUrl: 'https://www.youtube.com/watch?v=7h4_cD6A5Bs'
      },
      {
        title: 'Alt J - Interlude II (cover)',
        artist: 'Me!',
        description: 'Had to put this in',
        youtubeUrl: 'https://www.youtube.com/watch?v=JLWPxZJ5PX0'
      },

      {
        title: 'Young Dumb & Broke',
        artist: 'Khalid',
        description: 'Best concert of my life',
        youtubeUrl: 'https://www.youtube.com/watch?v=IPfJnp1guPc'
      },

      
    
      {
        title: 'Silence',
        artist: 'Marshmello Ft. Khalid',
        description: 'FIGHTAAA',
        youtubeUrl: 'https://www.youtube.com/watch?v=Tx1sqYc3qas'
      },
      {
        title: 'Steal My Girl',
        artist: 'One Direction',
        description: 'bring back 1D ):',
        youtubeUrl: 'https://www.youtube.com/watch?v=UpsKGvPjAgw'
      },

      {
        title: 'Something About Us',
        artist: 'Daft Punk',
        description: 'bop',
        youtubeUrl: 'https://www.youtube.com/watch?v=em0MknB6wFo'
      },
      
    // Add more songs as needed
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const getVideoIdFromUrl = (url) => {
    const videoIdMatch = url.match(/(?:\?v=|&v=|youtu\.be\/|\/embed\/|\/v\/|\/\d{1,2}\/|\/vi\/)([^#\&\?]{11})/);
    if (videoIdMatch) {
      return videoIdMatch[1];
    }
    return null;
  };

  const handleNextSong = () => {
    // setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    const randomIndex = Math.floor(Math.random() * songs.length);
    // const randomSong = songs[randomIndex];
    setCurrentSongIndex(randomIndex);
  };

  const currentSong = songs[currentSongIndex];
  const videoId = currentSong?.youtubeUrl ? getVideoIdFromUrl(currentSong.youtubeUrl) : null;

  return (
    <section id="music-section">
      <h2>Music Section</h2>
      <div className="song">
        <h3>{currentSong.title}</h3>
        <p>Artist: {currentSong.artist}</p>
        <p>Description: {currentSong.description}</p>
        {videoId && <YouTube videoId={videoId} />}
      </div>
      <button onClick={handleNextSong}>Shuffle!</button>
    </section>
  );
};

export default MusicSection;