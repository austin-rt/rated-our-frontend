const MovieDetails = (props) => {
  console.log(props)
  return (
    <div className="movie-details">
      <h1 className="movie-title">{props.selectedMovie.title}</h1>
      <div className="movie-details-image-container">
        <img
          className="movie-details-image"
          src={props.selectedMovie.image}
          alt={props.selectedMovie.title}
        />
      </div>
      <div className="movie-description">
        <p>{props.selectedMovie.body}</p>
      </div>
    </div>
  )
}

export default MovieDetails
