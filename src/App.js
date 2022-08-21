import React, { useState, useEffect } from 'react';
import './App.css';
import desktopImage from './desktopBG.jpg';
import mobileImage from './mobileBG.jpg';

function App() {
  const imageURL = useWindowWidth() >= 650 ? desktopImage : mobileImage;

  return (
    <div className="App" style={{ backgroundImage: url(imageURL); }}>
      <header className="App-header">

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

  );
};

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () =>  window.removeEventListener('resize', handleWindowResize);
    }, []);

  return windowWidth;
};








export default App;
