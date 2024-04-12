
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './assets/css/style.css';
import './components/Card/Data';

import {HashRouter } from 'react-router-dom';
import AppRoute from './components/router/AppRoute';
import HomePage from './components/pages/HomePage';
import ContactPage from './components/pages/ContactPage';
import Contact from './components/contact/Contact';
import FeaturesPage from './components/pages/FeaturesPage';
import TopNav from './components/navBar/TopNav';
import Home from './components/home/Home';


function App() {


  return (
    <div>
      <Router>
       <HomePage/>

        
        
      </Router>
    </div>
  );
}

export default App;
