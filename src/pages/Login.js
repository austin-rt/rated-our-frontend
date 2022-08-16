import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginUser } from '../services/Authorize'

const Login = (props) => {
  const [formValues, setFormValues] = useState({ username: '', password: '' })
  let navigate = useNavigate()

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = asyc (e) => {
    e.preventDefault()
  }
}
