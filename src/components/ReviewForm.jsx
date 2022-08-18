
import { useNavigate } from 'react-router-dom';

const ReviewForm = ({ user, authenticated, reviewFromState, handleReviewChange, handleReviewSubmit }) => {

  let navigate = useNavigate();

  return (user && authenticated) ? (
    <div className="review-from-container">
      <h1 className='review-form-title'>Leave a review</h1>
      <form className='review-form form' onSubmit={handleReviewSubmit}>
        <textarea
          className="review-body"
          id='body'
          cols='50'
          rows='10'
          value={reviewFromState.body}
          onChange={handleReviewChange}
          name={'body'}
          placeholder={'Leave a review!'}
        />
        <div className="review-form-row2">
          <select
            className="review-rating"
            defaultValue={reviewFromState.rating}
            id='rating'
            value={reviewFromState.rating}
            onChange={handleReviewChange}
            name='rating'
          >
            <option value="" disabled hidden>Rating</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button className="submit-button button">Submit</button>
        </div>
      </form>
    </div>
  ) : (
    <div className="Protected">
      <h3>Please login to leave a review.</h3>
      <button onClick={() => navigate('/login')}>Login</button>
    </div>
  );
};

export default ReviewForm;