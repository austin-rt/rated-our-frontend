const Home = (props) => {
  return (
    <div className="home-page">
      <div className="movies-grid">
        {props.movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
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
