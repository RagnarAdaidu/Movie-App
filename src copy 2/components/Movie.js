export default function Movie({ movie, onSelectedId }) {
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
        <button onClick={() => onSelectedId(movie.imdbID)} className="btn">View</button>
      </div>
    </li>
  );
}