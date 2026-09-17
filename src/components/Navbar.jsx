import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [text, setText] = useState('')
  const location = useLocation()
  const navigate = useNavigate()

  // when search from navbar just go to movies page
  const goSearch = (e) => {
    e.preventDefault()
    navigate(`/movies?q=${text}`)
    setOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <Link to="/" className="logo">
          🎬 MovieExplorer
        </Link>

        <button className="menu-btn" onClick={() => setOpen(!open)}>
          {open ? 'X' : 'Menu'}
        </button>

        <div className={`nav-links ${open ? 'show' : ''}`}>
          <form className="nav-search" onSubmit={goSearch}>
            <input
              type="text"
              placeholder="Search movies..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>

          <Link
            to="/"
            className={location.pathname === '/' ? 'active' : ''}
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/movies"
            className={location.pathname === '/movies' ? 'active' : ''}
            onClick={() => setOpen(false)}
          >
            Movies
          </Link>
          <Link to="/movies" className="nav-btn" onClick={() => setOpen(false)}>
            Browse Movies
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
