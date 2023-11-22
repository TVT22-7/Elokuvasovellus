import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import './Home.css';
import { useQuery } from '@tanstack/react-query';
import Menu from '../../components/Navigation/Navigation';
import Review from '../../components/Review/Review';

function HomePage() {
  const [, , removeCookie] = useCookies(['AuthToken']);
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');
  const { data: responseData, error, isLoading } = useQuery({
    queryKey: ['popularMovies', searchTerm],
    queryFn: () => fetchMovies(searchTerm),
  });

  async function fetchMovies(search) {
    try {
      const endpoint = search ? `/api/movies/popular/?search=${search}` : '/api/movies/popular/';
      const response = await fetch(`${process.env.REACT_APP_ADDRESS}${endpoint}`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      return responseData.results; 
    } catch (error) {
      throw new Error(`Error fetching movies: ${error.message}`);
    }
  }

  function handleSearchInputChange(e) {
    setSearchTerm(e.target.value);
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
              <p className="movie-id">ID: {movie.id}</p>
            </div>
          ))
        ) : (
          <p className="no-movies">No movies available.</p>
        )}
      </div>

      {isLoading ? <div className="loading">Loading...</div> : null}
      {error && <div className="error">Error: {error.message}</div>}
    </div>
  );
}

export default HomePage;