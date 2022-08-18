import { NavLink } from 'react-router-dom';

const Nav = ({ authenticated, user, handleLogOut }) => {
  let userOptions;
  if (user) {
    userOptions = (
      <div>
        <h1 className="username-display">Welcome, {user.username}!</h1>
        <NavLink to="/profile" className='nav-link profile'>Profile</NavLink>
        <NavLink onClick={handleLogOut} to="/" className='nav-link logout'>Log Out</NavLink>
      </div>
    );
  }

  const publicOptions = (
    <div>
      <NavLink to="/login" className='nav-link login'>Login</NavLink>
    </div>
  );



  return (
    <nav>
      <NavLink to="/" className="nav-logo-link" >
        <div className="logo-wrapper" alt="logo">
          <img
            className="logo"
            src="https://i.imgur.com/0ceEQPz.png"
            alt="welcome banner"
          />
          <h1 className='nav-title'>Rated Our</h1>
        </div>
      </NavLink>
      <div className="nav-right-links">
        <NavLink to="/" className='nav-link home'>Home</NavLink>
        {authenticated && user ? userOptions : publicOptions}
        <NavLink to="/about" className='nav-link about'>About</NavLink>
      </div>
    </nav>
  );

};

export default Nav;