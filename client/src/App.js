import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage.jsx'
import Home from './Components/Home/Home.jsx'
import Detail from './Components/Detail/Detail.jsx';
import Form from './Components/Form/Form.jsx';
import UpdateBreed from "./Components/UpdateBreed/UpdateBreed.jsx"

function App() {



  
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/detail/:id' element={<Detail />}/>
          <Route path='/postDog' element={<Form />}/>
          <Route path='/update/:id' element={<UpdateBreed />} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
