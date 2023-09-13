import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineStar } from 'react-icons/ai'
import mypic from '../images/mypic.png';
import pic2 from '../images/pic2.svg';

const MovieCard = ({movieLists, isClicked, handleClick}) => {
  return (
    <div className='movieList-container' data-testid='movie-card'>
    {movieLists.map((movie) => (
                
        <div key={movie.id} >
            <div><Link to={`/movies/${movie.id}`}><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='movie-poster' alt='poster' data-testid='movie-poster'/></Link></div>
            <div>
                <p className='favourite'>
                    <span data-testid='movie-release-date'>{movie.release_date} </span>
                    <span className={isClicked ? 'change' : 'fa-heart'} onClick={handleClick}><AiOutlineStar /></span>
                </p>
                <p className='movie-title' data-testid='movie-title'>{movie.title}</p>
                <div className='gif-container'>
                    <div><img src={mypic} alt='thumbnail' /> <span>{movie.vote_count}</span></div>
                    <div><img src={pic2} alt='thumbnail' /> <span>{movie.popularity}</span></div>
                </div>
            </div>
        </div>
       
   
    ))}
    </div>
  )
  
}

export default MovieCard