import React from 'react'
import Navbar from './components/Navbar/Navbar';
import "./components/Navbar/Navbar.css"
import Intro from "./components/Intro/Intro"
import Skills from "../src/components/skills/Skills" ;
import Work from './components/work/work';
import Portfolio from '../src/components/portfolio/Portfolio.jsx';
import Contact from './components/contact/Contact';
// import { themeContext } from './Context';

function App() {

  return (
    <div className='App'>
    <Navbar/>
    <Intro/>
    <Skills />
    <Work/>
    <Portfolio/>
    <Contact/>
    </div>
  )
}

export default App;