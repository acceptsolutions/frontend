import React from 'react';
import Navbar from './components/Navbar/Navbar'
import { HashRouter } from 'react-router-dom'
import axios from 'axios'


function App() {
  return (
    <HashRouter>
     <Navbar />
    </HashRouter>
  );
}

export default App;