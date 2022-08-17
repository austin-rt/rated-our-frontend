const Home = (props) => {
  return (
    <div className="home-page">
      <div className="movies-grid">
        {props.movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <h2 className="main-title">{movie.title}</h2>
            <div onClick={() => props.chooseMovie(movie)}>
              <img src={movie.image} alt={movie.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
