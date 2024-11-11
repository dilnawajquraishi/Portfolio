import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import { Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skill from './pages/Skill';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Education from './pages/Education';





function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/' element={<About/>} />
      <Route path='/project' element={<Project/>} />
      <Route path='/skill' element={<Skill/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/education' element={<Education/>} />



    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
