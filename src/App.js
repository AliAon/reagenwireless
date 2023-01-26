import { Route, Router, Routes } from 'react-router';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
function App() {
  return (
    <Routes>
      <Route path='/'      element={ <Home/>}/>
      <Route path='/about'      element={<About/>}/>
      <Route path='/contact'      element={<Contact/>}/>
      <Route path='/singin'      element={<SignIn/>}/>
      <Route path='/singup'      element={<SignUp/>}/>
      </Routes>
   
  );
}

export default App;
