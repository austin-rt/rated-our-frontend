import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from './globals'

import Home from './pages/Home'

function App() {
  const [movies, setMovies] = useState([])

  //Get All Movies
  useEffect(() => {
    const getMovies = async () => {
      const res = await axios.get(`${BASE_URL}/api/movies`)
      setMovies(res.data)
      console.log(res.data)
    }
    getMovies()
  }, [])

  return (
    <div className="App">
      <header></header>
      <main>
        <Routes>
          <Route path="/" element={<Home movies={movies} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
