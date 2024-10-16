import React from 'react';

const SongItem = ({ song, onPlay }) => {
  return (
    <div className="song-item" onClick={() => onPlay(song)}>
      <img src={song.coverImage} alt={`${song.title} cover`} />
      <div>
        <h3>{song.title}</h3>
        <p>{song.artist}</p>
      </div>
    </div>
  );
};

export default SongItem;
