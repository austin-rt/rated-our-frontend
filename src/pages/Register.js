import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterUser } from '../services/Authorize';

const Register = () => {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  };
  const [formValues, setFormValues] = useState(initialState);

  let navigate = useNavigate();

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await RegisterUser({
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      username: formValues.username,
      password: formValues.password
    });
    setFormValues(initialState);

    navigate('/login');
  };
  return (
    <div className="register-form-container">
      <form className="register-form form" onSubmit={handleSubmit}>
        <div className='grid'>
          <div className='first-name'>
            <div className='firstName-label-container'><label htmlFor="firstName">First Name</label></div>
            <input
              onChange={handleChange}
              name="firstName"
              type="text"
              placeholder="First Name"
              value={formValues.firstName}
              required
            />
          </div>
          <div className='last-name'>
            <div className="lastName-label-container"><label htmlFor="lastName">Last Name</label></div>
            <input
              onChange={handleChange}
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={formValues.lastName}
              required
            />
          </div>
          <div className="email">
            <div className="email-label-container"><label htmlFor="email">Email Address</label></div>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Email"
              value={formValues.email}
              required
            />
          </div>
          <div className="username">
            <div className='username-label-container'><label htmlFor="username">Username</label></div>
            <input
              onChange={handleChange}
              name="username"
              type="text"
              placeholder="username"
              value={formValues.username}
              required
            />
          </div>
          <div className='password'>
            <div className="password-label-container"><label htmlFor="password">Password</label></div>
            <input
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="Password"
              value={formValues.password}
              required
            />
          </div>
          <div className='confirm-password'>
            <div className='confirmPassword-label-container'><label htmlFor="confirmPassword">Password Confirmation</label></div>
            <input
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formValues.confirmPassword}
              required
            />
          </div>

        </div>
        <div className="submit-button-container">
          <button className="submit-button button"
            disabled={
              !formValues.email ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
