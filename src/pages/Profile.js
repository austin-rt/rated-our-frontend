import { useNavigate } from 'react-router'

const Profile = ({ user, authenticated }) => {
  // console.log()

  let navigate = useNavigate()

  return user && authenticated ? (
    <div>Welcome {user.username} !</div>
  ) : (
    <div className="protected">
      <h3>Hang on! You gotta login to do that!</h3>
      <button onClick={() => navigate('/login')}>Login</button>
    </div>
  )
}

export default Profile
