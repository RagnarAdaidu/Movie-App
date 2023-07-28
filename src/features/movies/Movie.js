import { useDispatch, useSelector } from "react-redux";
import { fetchId, removeId } from "./moviesSlice";
import { Link, animateScroll as scroll } from 'react-scroll';

export default function Movie({ movie }) {

  const { movieId } = useSelector((store) => store.movies);
  const dispatch = useDispatch()

  function handleSelectId(id) {
    if (id === movieId){
      return dispatch(removeId())
    }
    dispatch(fetchId(id))
  }

  return (
    <li>
      <div className="movie-div">
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
        {/* <h3>{movie.Title}</h3> */}
        {/* <div>
          <p>
            <span>🗓</span>
            <span>{movie.Year}</span>
          </p>
        </div> */}
        <a href="#sidebarSlide" smooth={true} duration={500} className="btn" onClick={() => handleSelectId(movie.imdbID)}>
          View 
</a>
      </div>
    </li>
  );
}