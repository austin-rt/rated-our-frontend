const Home = (props) => {
  return (
    <div className="home_page">
      <div className="movies">
        {props.movies.map((movie) => (
          <div className="movie-card">
            <h2>{movie.title}</h2>
            <img src={movie.image} alt={movie.title} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
