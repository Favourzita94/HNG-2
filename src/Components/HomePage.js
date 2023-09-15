import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import Navbar from './Navbar';
import Footer from './Footer';
import MovieCard from './MovieCard';

const HomePage = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/top_rated?api_key=f795ec3c5ed2510991e6639ae7e2fc8a'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch top-rated movies');
        }

        const data = await response.json();
        setTopRatedMovies(data.results);
        setLoading(false);
      } catch (error) {
        setError('Error fetching top-rated movies');
        setLoading(false);
      }
    };

    fetchTopRatedMovies();
  }, []);

    const displayedMovies = topRatedMovies.slice(0, 10);

  return (
    <div className='container'>
      <div className='hero-section'>
        <Navbar />
        <Hero />
      </div>
      <div className='movie-list'>
        <div className='movie-list-heading'>
          <h2>Featured Movies</h2>
          <a href='/'>See more ></a>
        </div>
        {loading && <h2>Loading...</h2>}
        {error && <h2>{error}</h2>}
        <div className='movieList-containers'>
          {displayedMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movieLists={[movie]}
              isClicked={isClicked}
              handleClick={() => setIsClicked(!isClicked)}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
