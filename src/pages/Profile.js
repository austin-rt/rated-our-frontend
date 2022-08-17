import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

const Profile = ({ user, authenticated }) => {
  let navigate = useNavigate()

  return user && authenticated ? (
    <div>
      <h2>Welcome {user.username} !</h2>
      <Link to="/profile/settings">Update Profile</Link>
    </div>
  ) : (
    <div className="protected">
      <h3>Hang on! You gotta login to do that!</h3>
      <button onClick={() => navigate('/login')}>Login</button>
    </div>
  )
}

export default Profile
