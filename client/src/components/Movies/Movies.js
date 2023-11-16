import React from 'react';

const Movies = ({ movies }) => {
  return (
    <li className="movies">
      <strong></strong> {movies.rating}
      <p>{movies.review_text}</p>
    </li>
  );
};

export default Movies;
