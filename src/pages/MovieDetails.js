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
      <ReviewForm user={props.user}
        authenticated={props.authenticated}
        handleReviewChange={props.handleReviewChange}
        handleReviewSubmit={props.handleReviewSubmit}
        reviewFromState={props.reviewFromState} />
      <div className="movie-reviews-grid">
        {props.selectedMovie.movie_reviews.map((review, index) => (
          <div className="review" key={review.id}>
            <h3>{review.body}</h3>
            <h3>Rating: {review.rating}</h3>
            <h3>{review.user_reviews.username}</h3>
            <button className='edit-button button' onClick={() => {
              props.editReview({
                id: review.id,
                rating: review.rating,
                body: review.body,
              }, index);
            }}>Edit</button>
            <button className="delete-button button" onClick={() => { props.deleteReview(review.id); }}>Delete</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovieDetails;