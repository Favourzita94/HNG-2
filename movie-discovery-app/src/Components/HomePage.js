import Hero from './Hero'
import Navbar from './Navbar'
import Footer from './Footer';
import fetchData from './fetchData';
import { useState } from 'react';
import MovieCard from './MovieCard';



const HomePage = () => {    
    const {data:movieLists, error, loading} = fetchData('https://api.themoviedb.org/3/discover/movie?api_key=f795ec3c5ed2510991e6639ae7e2fc8a')
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(!isClicked);
    }
  return (
    <div className='container'>
        <div className='hero-section'>
            <Navbar />
            <Hero />
        </div>
        <div className='movie-list'>
            <div className='movie-list-heading'>
                <h2>Featured Movie</h2>
                <a href='/'>See more > </a>
            </div>
                {loading && <h2>Loading...</h2>}
                <h2>{error}</h2>
            <div className='movieList-containers'>

                <MovieCard movieLists={movieLists} isClicked={isClicked} handleClick={handleClick}/>
            </div>
        </div>
        <Footer />
        
    </div>
  )
}

export default HomePage;