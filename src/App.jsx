import { useState } from 'react'
//import RadheshLogo from './assets/react.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="#">My Website</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header className="bg-primary text-white text-center py-5" id="home">
          <div className="container">
            <h1>Welcome to My Website</h1>
            <p className="lead">A responsive static site using React and Bootstrap</p>
          </div>
        </header>
        <section className="container py-5" id="about">
          <h2 className="text-center">About Us</h2>

          <p className="text-center">This is a simple static website built with React.js and Bootstrap.</p>
        </section>
        <section className="bg-light py-5" id="contact">
          <div className="container text-center">
            <h2>Contact Us</h2>
            <p>Email: contact@example.com</p>
          </div>
        </section>
        <footer className="bg-dark text-white text-center py-3">
          <p>&copy; 2025 My Website. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}

export default App
