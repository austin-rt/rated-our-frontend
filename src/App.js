import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from './globals'

import Home from './pages/Home'
import Nav from './components/Nav'
import MovieDetails from './pages/MovieDetails'
import Register from './pages/Register'
import Login from './pages/Login'
import About from './pages/About'
import { CheckSession } from './services/Authorize'

function App() {
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  let navigate = useNavigate()

  //Get All Movies
  useEffect(() => {
    const getMovies = async () => {
      const res = await axios.get(`${BASE_URL}/movies`)
      setMovies(res.data)
      // console.log(res.data)
    }
    getMovies()
  }, [])

  //Click Movie
  const chooseMovie = (selected) => {
    setSelectedMovie(selected)
    navigate(`/movies/${selected.id}`)
  }

  //Logout
  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  //Check if there is a token
  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <header>
        <Nav
          authenticated={authenticated}
          user={user}
          handleLogOut={handleLogOut}
        />
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home movies={movies} chooseMovie={chooseMovie} />}
          />
          <Route
            path="/movies/:id"
            element={<MovieDetails selectedMovie={selectedMovie} />}
          />
          <Route
            path="/login"
            element={
              <Login
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
