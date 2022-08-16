import {Link} from 'react-router-dom'

const Nav = ({authenticated, user, handleLogOut }) => {
  let userOptions
  if(user){
    userOptions = (
      <nav>
        <h1>Rated Our</h1>
        <h1>{user.username}</h1>
        <Link to="/" className='link'><button className='nav-button'> Home </button></Link>
        <Link onClick={handleLogOut} to="/" className='link'><button className='nav-button'> Log Out </button></Link>
        <Link to="/about" className='link'><button className='nav-button'> About </button></Link>
      </nav>
      )
  }

const publicOptions = (
  <nav>
      <h1>Rated Our</h1>
      <Link to="/" className='link'><button className='nav-button'> Home </button></Link>
      <Link to="/login" className='link'><button className='nav-button'> Login </button></Link>
      <Link to="/about" className='link'><button className='nav-button'> About </button></Link>
  </nav>
)



return (
  <header>
      <Link to="/">
        <div className="logo-wrapper" alt="logo">
          <img
            className="logo"
            src="https://i.imgur.com/0ceEQPz.png"
            alt="welcome banner"
          />
        </div>
      </Link>
      {authenticated && user ? userOptions : publicOptions}
  </header>
)

}

export default Nav