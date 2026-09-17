import { Link } from 'react-router-dom'

function Hero() {
  return (
    <header className="hero">
      <div className="hero-content">
        <p className="hero-small">Welcome to my movie site</p>
        <h1>Find Your Movies</h1>
        <p className="hero-text">
          I made this site to search movies and shows. Just type a name
          and you will get the list with rating and details.
        </p>
        <div className="hero-buttons">
          <Link to="/movies" className="btn-main">
            See Movies
          </Link>
          <a href="https://www.tvmaze.com/api" target="_blank" rel="noreferrer" className="btn-second">
            About API
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <h3>200+</h3>
            <span>Movies</span>
          </div>
          <div>
            <h3>Free</h3>
            <span>To use</span>
          </div>
          <div>
            <h3>Simple</h3>
            <span>Design</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
