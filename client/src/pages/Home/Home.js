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
  const [movies, setMovies] = useState([]);

  const { data: reviews, error, isLoading } = useQuery({
    queryKey: ['movieReviews', searchTerm],
    queryFn: () => fetchMovieReviews(searchTerm),
  });

  async function fetchMovieReviews(search) {
    const response = await fetch(`${process.env.REACT_APP_ADDRESS}/api/reviews/${search ? `?search=${search}` : ''}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }

  function handleSearchInputChange(e) {
    setSearchTerm(e.target.value);
  }

  async function handleSearchClick() {
    try {
      const response = await fetch(`${process.env.REACT_APP_ADDRESS}/api/movies/?search=${searchTerm}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const moviesData = await response.json();
      setMovies(moviesData); 
    } catch (error) {
      console.error('Failed to fetch movies:', error);
    }
  }

  const handleSignOut = () => {
    removeCookie('AuthToken', { path: '/' });
    removeCookie('Username', { path: '/' }); 
    navigate('/');
  };

  useEffect(() => {
    fetchMovieReviews('');
  }, []);

  return (
    <div>
      <Menu />
      <h1>Elokuvasovellus home</h1>
      <p>Search for movies and see their reviews</p>
      <button onClick={handleSignOut} className="sign-out-button">Sign Out</button>
      <div>
        <input
          type="text"
          className='movie-search'
          placeholder="Search for movies"
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
        <button onClick={handleSearchClick}>Search</button>
      </div>
      <div>
        {movies.map(movie => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
          </div>
        ))}
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <ul style={{ listStyleType: 'none' }}>
          {reviews?.map((review) => (
            <Review key={review.review_id} review={review} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default HomePage;
