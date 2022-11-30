const Home = ({ movies, chooseMovie }) => {
  return (
    <div className='home-page'>
      <h2>Choose a movie to see reviews!</h2>
      <div className='movies-grid'>
        {movies?.map((movie) => (
          <div
            className='movie-card'
            key={movie.id}
          >
            <div onClick={() => chooseMovie(movie)}>
              <img
                src={movie.image}
                alt={movie.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
