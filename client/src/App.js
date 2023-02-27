import './App.css';
import { useEffect } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { getBreeds } from './Redux/Actions/getBreeds.js';
import { getTemperaments } from './Redux/Actions/getTemperaments.js';
import LandingPage from './Components/LandingPage/LandingPage.jsx'
import Home from './Components/Home/Home.jsx'
import Detail from './Components/Detail/Detail.jsx';
import Form from './Components/Form/Form.jsx';

function App() {



  
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/detail/:id' element={<Detail />}/>
          <Route path='/postDog' element={<Form />}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
