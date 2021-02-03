import React from 'react';
import './App.css';
import BackgroundImage from './BackgroundImage/BackgroundImage';
import Clock from './Clock/Clock';

const IMAGE_URL = 'https://images.unsplash.com/photo-1610559145677-d4a640a1a6c9?&w=1920&q=80';

const styles = {
  container: {
    display: 'flex',
    height: '100%',
  },
  containerItem: {
    width: '33.33%',
  },
};

function App() {
  const { container, containerItem } = styles;


  return (
    <>
      <BackgroundImage imageUrl={IMAGE_URL} />
      <div style={container}>
        <div style={containerItem}></div>
        <div style={containerItem}>
          <Clock />
        </div>
        <div style={containerItem}></div>
      </div>
    </>
  );
}

export default App;
