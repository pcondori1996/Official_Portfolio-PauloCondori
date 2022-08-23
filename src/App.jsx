import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Service from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonals'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Service />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
    
    
    </>
  )
};

export default App;


// const imageURL = useWindowWidth() >= 650 ? desktopImage : mobileImage;


// <div className="App" style={{ backgroundImage: `url(${imageURL})`   }}>
      
// <header className="App-header">

//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
// </header>
// </div>

// );
// };

// const useWindowWidth = () => {
// const [windowWidth, setWindowWidth] = useState(window.innerWidth);

// useEffect(() => {
// const handleWindowResize = () => {
// setWindowWidth(window.innerWidth);
// };

// window.addEventListener('resize', handleWindowResize);

// return () =>  window.removeEventListener('resize', handleWindowResize);
// }, []);

// return windowWidth;
// };
