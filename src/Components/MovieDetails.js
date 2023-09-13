import React from 'react'
import { useParams } from 'react-router-dom'
import fetchData from './fetchData';
import pic from '../images/tv.svg'
import pic1 from  '../images/Home.svg'
import pic2 from '../images/Movie Projector.svg'
import pic3 from '../images/TV Show.svg'
import pic4 from '../images/Calendar.svg'
import pic5 from '../images/List.svg'
import pic6 from '../images/Logout.svg'
import poster from '../images/Rectangle 37.png'

const MovieDetails = () => {

  const {id} = useParams();
  const {data:movie, loading, error} = fetchData('https://api.themoviedb.org/3/movie/' + id + '?api_key=850136383d9112b1fa4ef05d1d27c587')
  console.log(movie)

  return (
    <div className='movie-details-page'>
        {loading && <div>Loading...</div> }
        {error && <div>{error}</div>}
        {movie && (
          <div className='movie-details'>
            <div className='left-sidebar'>
              <a href='/' className='official-logo'><img src={pic} alt='w'/><h2>MovieBox</h2></a>
              <div className='sidebar-links'>
                <a href='/'><img src={pic1} alt='w'/><span>Home</span></a>
                <a href='/'><img src={pic2} alt='w'/><span>Movies</span></a>
                <a href='/'><img src={pic3} alt='w'/><span>TV series</span></a>
                <a href='/'><img src={pic4} alt='w'/><span>Upcoming</span></a>
              </div>
              <div className='advert'>
                <p>Play movie quizes and earn free tickets</p>
                <span>For people are playing now</span>
                <a href='/' className='start-btn'>start playing</a>
              </div>
              <a className='log-out' href='https'><img src={pic6} alt='w'/> <span>Log out</span></a>
            </div>
            <div className='main-content'>
              <div className='main-row1'>
                <div>
                  <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}` } className='backpage-poster' alt='imag'></img>
                </div>
                <p data-testid='movie-title'>{movie.title} . <span data-testid='movie-release-date'>{movie.release_date}</span></p>
              </div>
              <div className='main-row2'>
                <div className='sub-row1'>
                  <p className='overview' data-testid='movie-overview'>{movie.overview}</p>
                  <p>Director: Joseph Kosinaki</p>
                  <p>Writers: Jim Cash, Jack Epps jr, Peter Craig</p>
                  <p>Stars: Tom Cruise, Jenifer Conolly, Miles Tailor</p>
                  <div>
                    <button>Top rated movie #65</button>
                    <p>Awards 9 nominations</p>
                  </div>
                </div>
                <div className='sub-row2'>
                  <div className='explore-btns'>
                    <a href='/'>See showtimes</a>
                    <a href='/'>More watch options</a>
                  </div>
                  
                  <div className='mixed-posters'>
                    <img src={poster} alt='poster'/>
                    <a href='/' className='attribute'><img src={pic5} alt='my-imag'/> <span>The best movies and shows in september</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        )}
    </div>
  )
}

export default MovieDetails;