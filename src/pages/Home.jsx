import Hero from '../components/Hero.jsx'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Hero />

      <section className="features">
        <h2>What you can do here</h2>
        <div className="feature-grid">
          <div className="feature">
            <div className="f-icon">1</div>
            <h3>Search Movies</h3>
            <p>Type any movie name on the movies page and press search.</p>
          </div>
          <div className="feature">
            <div className="f-icon">2</div>
            <h3>See Details</h3>
            <p>Click view details to see story, rating and release date.</p>
          </div>
          <div className="feature">
            <div className="f-icon">3</div>
            <h3>Easy to Use</h3>
            <p>Simple design, works on phone and computer both.</p>
          </div>
        </div>
        <Link to="/movies" className="btn-main center-btn">Go to Movies</Link>
      </section>
    </div>
  )
}

export default Home
