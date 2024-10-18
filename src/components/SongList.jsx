import React from 'react';
import SongItem from './SongItem';

const SongList = ({ songs, onPlay, selectedCategory }) => {
  return (
    <>
      <div className='fancy-div'>
        <h4>Genre:</h4><h4 className='fancy-title'>{selectedCategory} 
        {/* Songs: {songs.length} */}</h4>
      </div>
      <div className="song-list">
        {songs.map((song) => (
          <SongItem key={song.id} song={song} onPlay={onPlay} />
        ))}
      </div>
    </>
  );
};

export default SongList;
