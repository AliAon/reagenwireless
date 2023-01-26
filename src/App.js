import { Route, Router, Routes } from 'react-router';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
function App() {
  return (
    <Routes>
      <Route path='/'      element={ <Home/>}/>
      <Route path='/about'      element={<About/>}/>
      </Routes>
   
  );
}

export default App;
