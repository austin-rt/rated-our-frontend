const MovieDetails = (props) => {
  // console.log(props)
  return (
    <section className="movie-page">
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
      <div className="movie-reviews">
        {props.selectedMovie.movie_reviews.map((review) => (
          <div className="review">
            <h3>Rating: {review.rating}</h3>
            <h3>{review.body}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MovieDetails
