import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import MovieCard from '../components/MovieCard.jsx'
import MovieModal from '../components/MovieModal.jsx'

function Movies() {
  const [params] = useSearchParams()
  const q = params.get('q') || ''

  const [list, setList] = useState([])
  const [search, setSearch] = useState(q)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selected, setSelected] = useState(null)

  // when coming from navbar search
  useEffect(() => {
    setSearch(q)
  }, [q])

  // first time load all movies
  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then((res) => res.json())
      .then((data) => {
        setList(data.slice(0, 32))
        setLoading(false)
      })
      .catch(() => {
        setError('Could not load movies. Try again later.')
        setLoading(false)
      })
  }, [])

  // search while typing
  useEffect(() => {
    if (search === '') return

    const t = setTimeout(() => {
      setLoading(true)
      fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
        .then((res) => res.json())
        .then((data) => {
          let onlyShows = []
          for (let i = 0; i < data.length; i++) {
            onlyShows.push(data[i].show)
          }
          setList(onlyShows)
          setLoading(false)
        })
        .catch(() => {
          setError('Search is not working. Check internet.')
          setLoading(false)
        })
    }, 600)

    return () => clearTimeout(t)
  }, [search])

  function doSearch(e) {
    e.preventDefault()
    setError('')

    if (search.trim() === '') {
      setLoading(true)
      fetch('https://api.tvmaze.com/shows')
        .then((res) => res.json())
        .then((data) => {
          setList(data.slice(0, 32))
          setLoading(false)
        })
      return
    }

    setLoading(true)
    fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
      .then((res) => res.json())
      .then((data) => {
        let arr = []
        data.forEach((item) => arr.push(item.show))
        setList(arr)
        setLoading(false)
      })
      .catch(() => {
        setError('Search is not working. Check internet.')
        setLoading(false)
      })
  }

  return (
    <div className="movies-page">
      <h2 className="page-title">All Movies</h2>
      <p className="page-sub">Write a name below and search.</p>

      <form className="search-box" onSubmit={doSearch}>
        <input
          type="text"
          placeholder="Write movie name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p className="status">Please wait, loading...</p>}
      {error && <p className="status error">{error}</p>}
      {!loading && !error && list.length === 0 && (
        <p className="status">Nothing found. Try other name.</p>
      )}

      <div className="movie-grid">
        {list.map((m) => (
          <MovieCard key={m.id} movie={m} onDetails={setSelected} />
        ))}
      </div>

      {selected && <MovieModal movie={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}

export default Movies
