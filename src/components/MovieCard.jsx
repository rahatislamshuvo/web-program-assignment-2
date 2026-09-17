// single movie box
function MovieCard({ movie, onDetails }) {
  let img = 'https://via.placeholder.com/210x295?text=No+Image'
  if (movie.image && movie.image.medium) {
    img = movie.image.medium
  }

  let year = 'N/A'
  if (movie.premiered) {
    year = movie.premiered.slice(0, 4)
  }

  let rating = 'N/A'
  if (movie.rating && movie.rating.average) {
    rating = movie.rating.average
  }

  return (
    <div className="card">
      <img src={img} alt={movie.name} className="card-img" />
      <div className="card-body">
        <h3 className="card-title">{movie.name}</h3>
        <p className="card-meta">
          <span>Rating: {rating}</span>
          <span>|</span>
          <span>{year}</span>
        </p>
        <button className="card-btn" onClick={() => onDetails(movie)}>
          View Details
        </button>
      </div>
    </div>
  )
}

export default MovieCard
