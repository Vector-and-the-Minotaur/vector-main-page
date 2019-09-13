import React from 'react';
import Header from './components/header.js'; 
import Navigation from './components/navbar.js'
import Footer from './components/footer.js';
import Text from './components/text.js'; 
import Video from './components/video.js';
import Logo from './components/logo.js'
import About from './components/about.js'
import './App.css';

function App() {
  return (
    <div className="App">
     <Header />
     <Logo/>
     <Navigation className='nav'/>
     <Text text='Create a custom protocal using the Anki Vector SDK that will allow a Vector Robot to programatically solve a maze.' header='The Project'/>
     <Video source='assets/vector_vid_small.mp4'/>
     <div className='text2'>
     <Text  text='
     Our goals were to teach Vector to solve a maze, dive into a pre-existing codebase, and learn more about robotics. At the most basic level, he has two checks he has to make to solve the maze. If he sees a face, he will go towards it, then make a left turn. If he sees a blank wall, he will move towards it, then make a right turn.'/>
     <Text  text='
     We decided to use faces because while Vector ships with some glyphs he is supposed to be able to learn, they proved unwieldy. Vector is good at facial recognition, and he has persistence with faces. Our maze is marked marked with portraits of our teammate Merry. When he scans their face, he accesses the facial ID in his memory and performs the turn. When he sees the portrait of our teammate Raven, he does his victory dance.'/>
     </div>
     <Footer/>
    <About />

    </div>
  );
}

export default App;
