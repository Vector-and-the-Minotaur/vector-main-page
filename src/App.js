import React from 'react';
import Header from './components/header.js'; 
import Navigation from './components/navbar.js'
import Footer from './components/footer.js';
import './App.css';

function App() {
  return (
    <div className="App">
     <Header/>
     <Navigation/>
     <Footer/>
    </div>
  );
}

export default App;
