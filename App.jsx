
import './App.css'
import { Link } from "react-router-dom";
function App() {
  

  return (
    <>
      <div className="landing-page">
      <div className="landing-content">
        <h1>🌿 Paradise Nursery</h1>

        <h3>Bringing Nature Closer to You</h3>

        <p>
          Welcome to <strong>Paradise Nursery</strong>, your one-stop destination
          for healthy and beautiful houseplants. Whether you're a beginner or an
          experienced plant enthusiast, we offer a carefully selected collection
          of air-purifying plants, flowering plants, succulents, and more to
          brighten your home and improve your well-being.
        </p>

        <Link to="/products" className="get-started-btn">
          Get Started
        </Link>
      </div>
    </div>
    </>
  )
}

export default App
