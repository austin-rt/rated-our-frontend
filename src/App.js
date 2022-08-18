import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BASE_URL } from './globals';
import { CheckSession, CreateReview, DestroyReview, UpdateReview } from './services/Authorize';
import axios from 'axios';

import Home from './pages/Home';
import ReviewForm from './components/ReviewForm';
import Nav from './components/Nav';
import MovieDetails from './pages/MovieDetails';
import Register from './pages/Register';
import Login from './pages/Login';
import About from './pages/About';
import Profile from './pages/Profile';
import EditReview from './pages/EditReview';


function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [authenticated, toggleAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [review, setReview] = useState(null);
  const [editing, setEditing] = useState(false);

  let navigate = useNavigate();

  //Get All Movies
  const getMovies = async () => {
    const res = await axios.get(`${BASE_URL}/movies`);
    setMovies(res.data);
  };
  useEffect(() => {
    getMovies();
  }, []);

  //Click Movie
  const chooseMovie = (selected) => {
    setSelectedMovie(selected);
    navigate(`/movies/${selected.id}`);
  };

  //Logout
  const handleLogOut = () => {
    setUser(null);
    toggleAuthenticated(false);
    localStorage.clear();
  };

  //Check if there is a token
  const checkToken = async () => {
    const user = await CheckSession();
    setUser(user);
    toggleAuthenticated(true);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      checkToken();
    }
  }, []);

  const initialReviewState = {
    rating: '',
    body: '',
    movieId: '',
    userId: ''
  };

  const [reviewFromState, setReviewFormState] = useState(initialReviewState);

  const handleReviewChange = (event) => {
    setReviewFormState({
      ...reviewFromState,
      [event.target.id]: event.target.value, movie_id: selectedMovie.id, user_id: user.id
    });
  };

  const handleReviewSubmit = async (event) => {
    event.preventDefault();
    if (editing) {
      await UpdateReview(reviewFromState);
      setReviewFormState(initialReviewState);
      let modifiedMovie = selectedMovie;
      navigate('/');
      window.location.reload();
      // modifiedMovie.movie_reviews.splice(index, 1);
      // navigate(`/movies/${selectedMovie.id}`);
    } else {
      await CreateReview({
        rating: reviewFromState.rating,
        body: reviewFromState.body,
        movieId: selectedMovie.id,
        userId: user.id
      });
      let modifiedMovie = selectedMovie;
      modifiedMovie.movie_reviews.push(reviewFromState);
      navigate('/');
      window.location.reload();
      // setSelectedMovie(modifiedMovie);
      // setReviewFormState(initialReviewState);
      // navigate(`/movies/${selectedMovie.id}`);
    }
  };

  const editReview = (review, index) => {
    setEditing(true);
    setReview(review);
    setReviewFormState(review);
    navigate('/reviews/edit', { state: { index: index } });
  };

  const deleteReview = async (reviewId) => {
    await DestroyReview(reviewId);
    navigate('/');
    window.location.reload();
  };

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
            element={
              <MovieDetails
                selectedMovie={selectedMovie}
                authenticated={authenticated}
                user={user}
                handleReviewChange={handleReviewChange}
                handleReviewSubmit={handleReviewSubmit}
                reviewFromState={reviewFromState}
                deleteReview={deleteReview}
                editReview={editReview}
              />
            }
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
          <Route path="/review" element={<ReviewForm />} />
          <Route
            path="/reviews/edit"
            element={
              <EditReview
                review={review}
                reviewFromState={reviewFromState}
                onChange={handleReviewChange}
                onSubmit={handleReviewSubmit}
              />
            }
          />
          <Route
            path="/profile"
            element={<Profile user={user} authenticated={authenticated} />}
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
