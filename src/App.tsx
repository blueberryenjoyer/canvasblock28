import './App.css'
import { Routes, Route, NavLink } from "react-router-dom";
import Red from './components/Red';
import Blue from './components/Blue';
import Home from './components/Home';

function App() {


  return (
    <>
      <div id="container">
        <div id="navbar">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/blue">Turn Blue</NavLink>
          <NavLink to="/red">Turn Red</NavLink>
        </div>
        <div id="main-section"><Routes>
          <Route path="/home" element={Home()} />
          <Route path="/blue" element={Blue()} />
          <Route path="/red" element={Red()} />
        </Routes></div>
      </div>

    </>
  )
}

export default App
