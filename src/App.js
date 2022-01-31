
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import './components/Card/Data';

import {HashRouter } from 'react-router-dom';
import AppRoute from './components/router/AppRoute';


function App() {


  return (
    <div >
     <HashRouter>
     <AppRoute/>
     </HashRouter>
    
    </div>
  );
}

export default App;
