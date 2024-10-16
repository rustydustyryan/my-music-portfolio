import React from 'react';
import SongItem from './SongItem';

const FeaturedSongs = ({ songs, onPlay }) => {
  const featured = songs.filter((song) => song.isFeatured);
  return (
    <section className="featured-songs">
      <h2>Featured Songs</h2>
      <div className="song-list">
        {featured.map((song) => (
          <SongItem key={song.id} song={song} onPlay={onPlay} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedSongs;
