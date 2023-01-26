import { Route, Router, Routes } from 'react-router';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
function App() {
  return (
    <Routes>
      <Route path='/'      element={ <Home/>}/>
      <Route path='/about'      element={<About/>}/>
      <Route path='/contact'      element={<Contact/>}/>
      </Routes>
   
  );
}

export default App;
