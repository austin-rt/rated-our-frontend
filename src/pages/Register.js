import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Authorize'

const Register = () => {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  }
  const [formValues, setFormValues] = useState(initialState)

  let navigate = useNavigate()

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      username: formValues.username,
      password: formValues.password
    })
    setFormValues(initialState)

    navigate('/login')
  }
  return (
    <div className="register">
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="firstName"></label>
        <input
          onChange={handleChange}
          name="firstName"
          type="text"
          placeholder="First Name"
          value={formValues.firstName}
          required
        ></input>
        <label htmlFor="lastName"></label>
        <input
          onChange={handleChange}
          name="lastName"
          type="text"
          placeholder="Last Name"
          value={formValues.lastName}
          required
        ></input>
        <label htmlFor="email"></label>
        <input
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="Email"
          value={formValues.email}
          required
        ></input>
        <label htmlFor="username"></label>
        <input
          onChange={handleChange}
          name="username"
          type="text"
          placeholder="username"
          value={formValues.username}
          required
        ></input>

        <label htmlFor="password"></label>
        <input
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="Password"
          value={formValues.password}
          required
        ></input>

        <label htmlFor="confirmPassword" />
        <input
          onChange={handleChange}
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formValues.confirmPassword}
          required
        />

        <button
          disabled={
            !formValues.email ||
            (!formValues.password &&
              formValues.confirmPassword === formValues.password)
          }
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Register
