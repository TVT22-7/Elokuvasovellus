import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import './Home.css';
import { useQuery } from '@tanstack/react-query';
import Menu from '../../components/Navigation/Navigation';


function HomePage() {
  const [, , removeCookie] = useCookies(['AuthToken']);
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');
  const { data: responseData, error, isLoading: loadingMovies } = useQuery({
    queryKey: ['popularMovies', searchTerm],
    queryFn: () => fetchMovies(searchTerm),
  });

  const [scheduleList, setScheduleList] = useState([]);
  const [loadingSchedules, setLoadingSchedules] = useState(false);
  const [errorSchedules, setErrorSchedules] = useState(null);
  async function fetchMovies(search) {
    try {
      const apiKey = "APIKEY";
      const endpoint = search
        ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`
        : `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${apiKey}`;
  
      const response = await fetch(endpoint); 
  
      if (!response.ok) {
        console.error('Network response was not ok:', response);
        throw new Error('Network response was not ok');
      }
  
      const responseData = await response.json();
      console.log('Movie Data:', responseData.results);
      return responseData.results;
    } catch (error) {
      console.error('Error fetching movies:', error);
      throw new Error(`Error fetching movies: ${error.message}`);
    }
  }
  

  function handleSearchInputChange(e) {
    setSearchTerm(e.target.value);
  }

  async function showSchedules() {
    try {
      setLoadingSchedules(true);
      const response = await fetch('/api/xml/movies/schedules');
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const schedules = await response.json();
        const scheduleList = schedules.map(schedule => (
          <li key={schedule.id}>{schedule.title} - {schedule.start}</li>
        ));
        setScheduleList(scheduleList);
      } else {
        console.error('Error: Response is not in JSON format');
      }
    } catch (error) {
      setErrorSchedules(error);
    } finally {
      setLoadingSchedules(false);
    }
  }
  // Authentication remove cookie
  const handleSignOut = () => {
    removeCookie('AuthToken', { path: '/' });
    removeCookie('Username', { path: '/' });
    navigate('/');
  }

  useEffect(() => {
    fetchMovies('');
  }, []);

  return (
    <div className="home-container">
      <Menu />
      <h1 className="home-title">Elokuvasovellus home</h1>
      <p className="home-description">Search for movies and see popularMovies</p>
      <button onClick={handleSignOut} className="sign-out-button">
        Sign Out
      </button>

      
      <button onClick={showSchedules} className="show-schedules-button">
        Show Movie Schedules
      </button>

      

      <div className="search-container">
        <input
          type="text"
          className="movie-search"
          placeholder="Search for movies"
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
        <button onClick={() => fetchMovies(searchTerm)} className="search-button">Search</button>
      </div>
      <div className="movies-container">
        {Array.isArray(responseData) ? (
          responseData.map((movie) => (
            <div className='movie-container' key={movie.id}>
              <h2 className="movie-title">{movie.title}</h2>
              <p className="movie-overview">{movie.overview}</p>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={`${movie.title} Poster`}
              />
              <p className="movie-release-date">Release Date: {movie.release_date}</p>
            </div>
          ))
        ) : (
          <p className="no-movies">No movies available.</p>
        )}
      </div>

      {loadingMovies && <div className="loading">Loading movies...</div>}
      {loadingSchedules && <div className="loading">Loading schedules...</div>}
      {error && <div className="error">Error: {error.message}</div>}
      {errorSchedules && <div className="error">Error: {errorSchedules.message}</div>}

      <ul>{scheduleList}</ul>
    </div>
  );
}

export default HomePage;