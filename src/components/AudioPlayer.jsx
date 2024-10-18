import React, { useRef, useEffect } from 'react';
import { IoChevronUpOutline } from "react-icons/io5";
import { CgArrowsExpandRight } from "react-icons/cg";
import { BiMinus } from "react-icons/bi";

const AudioPlayer = ({ isFixed, onCollapse, currentSong }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current && currentSong) {
      audioRef.current.play();
    }
  }, [currentSong]);

  if (!currentSong) return null;

  return (
    <div className={isFixed ? 'audio-player fixed' : 'audio-player'}>
      <img src={currentSong.coverImage} alt={`${currentSong.title} cover`} />
      <div>
        <div>
          <h3>{currentSong.title}</h3>
          <p>{currentSong.artist}</p>
          <audio controls controlsList="nodownload" src={currentSong.audioSrc} ref={audioRef}>
            Your browser does not support the audio element.
          </audio>
        </div>
        <button onClick={onCollapse}>
          {isFixed ? <BiMinus /> : <IoChevronUpOutline />}
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
