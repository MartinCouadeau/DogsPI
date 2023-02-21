import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage.jsx'
import Home from './Components/Home/Home.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/home' element={<Home />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
