import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Categories from './components/Categories';
import SongList from './components/SongList';
import FeaturedSongs from './components/FeaturedSongs';
import AudioPlayer from './components/AudioPlayer';
import songsData from './data/songsData';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentSong, setCurrentSong] = useState(null);

  // Extract unique categories
  const categories = [...new Set(songsData.map((song) => song.category))];

  // Filter songs based on selected category
  const filteredSongs =
    selectedCategory === 'All'
      ? songsData
      : songsData.filter((song) => song.category === selectedCategory);

  const handlePlay = (song) => {
    setCurrentSong(song);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeaturedSongs songs={songsData} onPlay={handlePlay} />
                <Categories
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onSelectCategory={setSelectedCategory}
                />
                <div className="main-content">
                  <SongList 
                    songs={filteredSongs} 
                    onPlay={handlePlay}
                    selectedCategory={selectedCategory} />
                </div>
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
        </Routes>
        <AudioPlayer currentSong={currentSong} />
      </div>
    </Router>
  );
}

export default App;
