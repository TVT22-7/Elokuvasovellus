import './Home.css';
import Menu from '../../components/Navigation/Navigation';


function HomePage() {
  return (
    <div>
      <h1>Elokuvasovellus home</h1>
      <input type="text" className='movie-search' placeholder="Search for movies" />
      <Menu/>
    </div>
  );
}

export default HomePage;