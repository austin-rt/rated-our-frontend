
import { useNavigate } from 'react-router-dom';

const ReviewForm = ({ user, authenticated, reviewFromState, handleReviewChange, handleReviewSubmit }) => {

  let navigate = useNavigate();

  return (user && authenticated) ? (
    <div className="Review-From">
      <h1 className='review-form-title'>Review form</h1>
      <form className='review-form' onSubmit={handleReviewSubmit}>
        <input
          id='rating'
          type='number'
          value={reviewFromState.rating}
          onChange={handleReviewChange}
          name={'rating'}
          placeholder={'Rate the movie 1-5'}
        />
        <input
          id='body'
          type='textarea'
          value={reviewFromState.body}
          onChange={handleReviewChange}
          name={'body'}
          placeholder={'Leave a review!'}
        />
        <button className="submit-button">Submit</button>
      </form>
    </div>
  ) : (
    <div className="Protected">
      <h3>Please login in order to leave a review.</h3>
      <button onClick={() => navigate('/login')}>Login</button>
    </div>
  );
};

export default ReviewForm;