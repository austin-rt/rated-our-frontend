import {Link} from 'react-router-dom'

const Nav = ({authenticated, user, handleLogOut }) => {
  let userOptions
  if(user){
    userOptions = (
      <nav>
        <h1>Rated Our</h1>
        <h1>{user.username}</h1>
        <Link onClick={handleLogOut} to="/"></Link>
        <Link to="/about" className='link'><button className='nav-button'> About </button></Link>
      </nav>
      )
  }

return (
  <header>
    <nav>
      <h1>Rated Our</h1>
      <Link to="/" className='link'><button className='nav-button'> Home </button></Link>
      <Link to="/login" className='link'><button className='nav-button'> Login </button></Link>
      <Link to="/about" className='link'><button className='nav-button'> About </button></Link>
    </nav>
  </header>
)

}

export default Nav