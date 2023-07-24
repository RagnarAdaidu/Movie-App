import Movie from './Movie'

export default function MovieList({ movies, onSelectedId }) {
  // console.log('movielist here', movies)
  return (
    <ul className='take-all-row grid grid--4-cols'>
      {movies?.map((movie) => (
        <Movie onSelectedId={onSelectedId} movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}