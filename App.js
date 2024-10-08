import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './about';
import Kidsmenu from './kidsmenu';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/kidsmenu' element={<Kidsmenu/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;
