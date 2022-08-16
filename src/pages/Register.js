import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
    password: formValues.password,
    })
    setFormValues(initialState)

    navigate('/login')
   }
return (
  <div className='register'>
    <form className='register-form' onSubmit={handleSubmit}>
      <label htmlFor='firstName'>

      </label>
      <input
      onChange={handleChange}
      name ='firstName' 
      type = 'text'
      placeholder='First Name'
      value={formValues.firstName}
      required>
      </input>
      <label htmlFor='lastName'>
        
      </label>
      <input
      onChange={handleChange}
      name ='lastName' 
      type = 'text'
      placeholder='Last Name'
      value={formValues.lastName}
      required>
      </input>
      <label htmlFor='email'>
        
      </label>
      <input
      onChange={handleChange}
      name ='email' 
      type = 'email'
      placeholder='Email'
      value={formValues.email}
      required>
      </input>
      <label htmlFor='firstName'>
        First Name
      </label>
      <input
      onChange={handleChange}
      name ='firstName' 
      type = 'text'
      placeholder='Bob'
      value={formValues.firstName}
      required>
      </input>
      <label htmlFor='firstName'>
        First Name
      </label>
      <input
      onChange={handleChange}
      name ='firstName' 
      type = 'text'
      placeholder='Bob'
      value={formValues.firstName}
      required>
      </input>
     
      <button></button>

    </form>

  </div>
)
}

export default Register
