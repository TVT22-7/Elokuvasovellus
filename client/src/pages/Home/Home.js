import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import './Home.css';
import { useQuery } from '@tanstack/react-query';
import Menu from '../../components/Navigation/Navigation';
import xmlFormatter from 'xml-formatter';

function HomePage() {
  const [, , removeCookie] = useCookies(['AuthToken']);
  const navigate = useNavigate();

  const [loadingNews, setLoadingNews] = useState(false);
  const [errorNews, setErrorNews] = useState(null);
  const [newsList, setNewsList] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');
  const { data: responseData, error, isLoading: loadingMovies } = useQuery({
    queryKey: ['popularMovies', searchTerm],
    queryFn: () => fetchMovies(searchTerm),
  });

  function formatXml(xml) {
    return xmlFormatter(xml, { collapseContent: true });
  }

  async function fetchMovies(search) {
    try {
      const apiKey = "76ab94bfa95ebbf5192e4f452207a827";
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

  async function showNews() {
    try {
      setLoadingNews(true);
      const response = await fetch('https://www.finnkino.fi/xml/News/');

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      // Convert XML to text
      const xmlText = await response.text();
      console.log(xmlText); // Log XML to console

      // Display formatted XML in an alert
      alert(formatXml(xmlText));

      // Parse XML using DOMParser
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

      const articles = xmlDoc.getElementsByTagName('article');
      const newsList = [];

      for (let i = 0; i < articles.length; i++) {
        const article = articles[i];
        const title = article.getElementsByTagName('title')[0].textContent;
        const content = article.getElementsByTagName('content')[0].textContent;

        newsList.push({ id: i, title, content });
      }

      setNewsList(newsList);
      console.log(newsList); // Log newsList to console
      setErrorNews(null);
    } catch (error) {
      setErrorNews(error);
    } finally {
      setLoadingNews(false);
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

      <button onClick={showNews} className="show-News-button">
        Show Movie News
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

      {loadingMovies && <div className="loading">Loading movies...</div>}
      {error && <div className="error">Error: {error.message}</div>}
      {errorNews && <div className="error">Error: {errorNews.message}</div>}

      {Array.isArray(newsList) && (
        <ul>
          {newsList.map((article) => (
            <li key={article.id}>
              <h3>{article.title}</h3>
              <p>{article.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HomePage;