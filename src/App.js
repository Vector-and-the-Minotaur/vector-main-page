import React from 'react';
import Header from './components/header.js'; 
import Navigation from './components/navbar.js'
import Footer from './components/footer.js';
import Text from './components/text.js'; 
import Video from './components/video.js';
import './App.css';

function App() {
  return (
    <div className="App">
     <Header />
     <Navigation className='nav'/>
     <Text text='Create a custom protocal using the Anki Vector SDK that will allow a Vector Robot to programatically solve a maze.' header='The Project'/>
     <Video source='assets/blackstarshort.mp4'/>
     <Footer/>
    </div>
  );
}

export default App;
