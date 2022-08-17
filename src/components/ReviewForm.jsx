import { useNavigate } from 'react-router-dom';


const ReviewForm = ({ user, authenticated }) => {

  let navigate = useNavigate();

  return (user && authenticated) ? (
    <div className="Review-From">
      <h1>review form</h1>
    </div>
  ) : (
    <div className="Protected">
      <h3>Please login in order to leave a review.</h3>
      <button onClick={() => navigate('/login')}>Login</button>
    </div>
  );
};

export default ReviewForm;