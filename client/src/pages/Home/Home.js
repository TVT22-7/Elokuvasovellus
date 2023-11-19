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
  const { data: movies, error, isLoading } = useQuery({
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


      const moviesData = Array.isArray(responseData) ? responseData : [responseData];

      return moviesData;
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
    <div>
      <Menu />
      <h1>Elokuvasovellus home</h1>
      <p>Search for movies and see popularMovies</p>
      <button onClick={handleSignOut} className="sign-out-button">
        Sign Out
      </button>
      <div>
        <input
          type="text"
          className="movie-search"
          placeholder="Search for movies"
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
        <button onClick={() => fetchMovies(searchTerm)}>Search</button>
      </div>
      <div>
        {Array.isArray(movies) ? (
          movies.map((movie) => (
            <div key={movie.original_title}>
              <h2>{movie.title}</h2>
            </div>
          ))
        ) : (
          <p>No movies available.</p>
        )}
      </div>

      {isLoading ? <div>Loading...</div> : null}
      {error && <div>Error: {error.message}</div>}
    </div>
  );
}

export default HomePage;
