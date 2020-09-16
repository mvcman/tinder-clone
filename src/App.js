import React from 'react';
import './App.css';
import Header from './components/header/header';
import TinderCard from './components/tindercard/tindercard';
import SwipeButtons from './components/swipebuttons/swipebutton';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* Tinder cards */}
      <TinderCard />
      {/* Swipe buttons */}
      <SwipeButtons />
    </div>
  );
}

export default App;
