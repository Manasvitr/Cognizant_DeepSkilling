import React from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <h1>StudentApp</h1>
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;

