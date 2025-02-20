import { useState } from 'react'
//import RadheshLogo from './assets/react.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import './App.css'
import Navbar from './componets/NavBar'
import Logo from './componets/Logo';
import HomeContent from './componets/HomeContent';
import HomeVideo from './componets/HomeVideo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <Logo />
        <HomeContent />
        <HomeVideo />
      </div>
    </>
  )
}

export default App
