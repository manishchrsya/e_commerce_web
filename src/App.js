import React from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import Routes from './components/config/Routes'
import Footer from './components/modules/footer/Footer';
import NavBar from './components/modules/navBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
