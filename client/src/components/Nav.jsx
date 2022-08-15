import {Link} from 'react-router-dom'

const Nav = () => {
return (
  <header>
    <nav>
      <h1>Rated Our</h1>
      <Link to="/" className='link'><button className='nav-button'> Home </button></Link>
    </nav>
  </header>
)

}

export default Nav