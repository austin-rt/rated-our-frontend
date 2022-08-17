import ReviewForm from '../components/ReviewForm';

const MovieDetails = (props) => {
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
        <div className="movie-details-description-container">
          <p className="movie-details-description">{props.selectedMovie.body}</p>
        </div>
      </div>
      <ReviewForm user={props.user} authenticated={props.authenticated} />
      <div className="movie-reviews-grid">
        {props.selectedMovie.movie_reviews.map((review) => (
          <div className="review" key={review.id}>
            <h3>{review.body}</h3>
            <h3>Rating: {review.rating}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovieDetails;
