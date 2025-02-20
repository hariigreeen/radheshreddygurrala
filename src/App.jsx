import { useState } from 'react'
//import RadheshLogo from './assets/react.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import './App.css'
import Navbar from './componets/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <div className="container mt-5">
          <h1>
            <img src="./assets/cardinal_final_logo-01-(1)-qw4mztPe.png" alt="" />
          </h1>
          <p>This is a responsive navbar using React and Bootstrap.</p>
        </div>
      </div>
    </>
  )
}

export default App
