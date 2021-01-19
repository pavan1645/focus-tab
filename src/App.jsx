import React from 'react';
import './App.css';
import BackgroundImage from './BackgroundImage/BackgroundImage';

const IMAGE_URL = 'https://images.unsplash.com/photo-1610559145677-d4a640a1a6c9?&w=1920&q=80';

function App() {
  return (
    <>
      <BackgroundImage imageUrl={IMAGE_URL} />
      <h1>Hello World</h1>
    </>
  );
}

export default App;
