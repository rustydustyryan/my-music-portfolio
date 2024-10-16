import React, { useRef, useEffect } from 'react';

const AudioPlayer = ({ currentSong }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current && currentSong) {
      audioRef.current.play();
    }
  }, [currentSong]);

  if (!currentSong) return null;

  return (
    <div className="audio-player">
      <img src={currentSong.coverImage} alt={`${currentSong.title} cover`} />
      <div>
        <h3>{currentSong.title}</h3>
        <p>{currentSong.artist}</p>
        <audio controls controlsList="nodownload" src={currentSong.audioSrc} ref={audioRef}>
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default AudioPlayer;
