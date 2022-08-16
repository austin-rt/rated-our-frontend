import {Link} from 'react-router-dom'

const Nav = () => {
return (
  <header>
    <nav>
      <h1>Rated Our</h1>
      <Link to="/" className='link'><button className='nav-button'> Home </button></Link>
      <Link to="/login" className='link'><button className='nav-button'> Login </button></Link>
      <Link to="/register" className='link'><button className='nav-button'> Sign Up </button></Link>
    </nav>
  </header>
)

}

export default Nav