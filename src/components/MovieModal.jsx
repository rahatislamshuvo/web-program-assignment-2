function MovieModal({ movie, onClose }) {
  if (!movie) return null

  let img = ''
  if (movie.image) {
    img = movie.image.original || movie.image.medium || ''
  }

  let rating = 'N/A'
  if (movie.rating && movie.rating.average) rating = movie.rating.average

  let year = movie.premiered || 'Unknown'

  let genres = 'N/A'
  if (movie.genres && movie.genres.length > 0) {
    genres = movie.genres.join(', ')
  }

  // summary has html tags so remove them
  let summary = 'No details found.'
  if (movie.summary) {
    summary = movie.summary.replace(/<[^>]+>/g, '')
  }

  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-x" onClick={onClose}>X</button>

        {img ? (
          <img src={img} alt={movie.name} className="modal-img" />
        ) : (
          <div className="modal-backup">No Image</div>
        )}

        <div className="modal-body">
          <h2>{movie.name}</h2>
          <p className="modal-info">
            Rating: {rating} | Released: {year}
          </p>
          <p className="modal-info small">
            Type: {genres} | Language: {movie.language || 'N/A'}
          </p>

          <h4>Story:</h4>
          <p className="modal-summary">{summary}</p>

          {movie.officialSite && (
            <a href={movie.officialSite} target="_blank" rel="noreferrer" className="site-link">
              Official site link
            </a>
          )}

          <div className="modal-actions">
            <button className="btn-close" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieModal
