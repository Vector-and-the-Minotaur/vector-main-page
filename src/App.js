import React from 'react';
import Header from './components/header.js'; 
import Navigation from './components/navbar.js'
import Footer from './components/footer.js';
import Text from './components/text.js'; 
import Video from './components/video.js';
import Logo from './components/logo.js'
import './App.css';

function App() {
  return (
    <div className="App">
     <Header />
     <Logo/>
     <Navigation className='nav'/>
     <Text text='Create a custom protocal using the Anki Vector SDK that will allow a Vector Robot to programatically solve a maze.' header='The Project'/>
     <Video source='assets/blackstarshort.mp4'/>
     <div className='text2'>
     <Text  text='Robot ipsum Pseudopoietic efodon anteeous stethgraphy unilepry. Laparolog palladiocene schizoate mastped tocoalgia videoaria hecatocade norpathy frontoicide. Frankengamy bilog sylathon Angloeous Ofpoieses saprware platythermy histics. Ophidgynous cytolepry nitrophagous millimorph stibiocarpic adenicide xanthism stereoid Britphobia glossochrome. Racegony toxicophagia melaphobic hieroian valerothermal polydeoxyriboscribe tessaraize Christotend. Gynaecoderma againmire Japanoopsida ototron quadriopsida bradyacea deciize otphagy. Tocoaemia azoane hydrode adrenocephalous tritoa angioblast oxiis'/>
     </div>
     <Footer/>
    </div>
  );
}

export default App;
