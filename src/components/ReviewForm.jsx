
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { CreateReview} from '../services/Authorize'

const ReviewForm = ({ user, authenticated }) => {

  
  const initialReviewState = {
    rating: '',
    body: '',
    movieId : '',
    userId : ''
  }

  const [reviewFromState, setReviewFormState] = useState(initialReviewState)

  let navigate = useNavigate();
  let {id} = useParams()
  console.log(id)
  console.log(user.id)

  const handleReviewChange = (event) => {
    setReviewFormState({
      ...reviewFromState,
      [event.target.id]: event.target.value, movie_id: id, user_id: user.id
    })
  }

  const handleReviewSubmit = async (event) => {
    event.preventDefault()
   await CreateReview ({
    rating: reviewFromState.rating,
    body: reviewFromState.body,
    movieId: id,
    userId: user.id
   })
   setReviewFormState(initialReviewState)
   navigate('/')
  }


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