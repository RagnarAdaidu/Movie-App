import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeId } from '../features/movies/moviesSlice';

const KEY = "1fbb7d99";

export default function SidebarSlide() {
  const [movie, setMovie] = useState({})

  const { movieId } = useSelector((store) => store.movies);
  const dispatch = useDispatch()

    function handleCloseMovie() {
    dispatch(removeId())
  }

  const {
    Title: title,
    Poster: poster,
    Plot: plot,
  } = movie;
  useEffect(() =>{
    async function getMovieDetails(){
      const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${movieId}`)
      const data = await res.json()

      setMovie(data)
    }
    getMovieDetails()
  }, [movieId])
  return (
    <div className='sidebarSlide' id='sidebarSlide'>
      <button className='btn-back' onClick={handleCloseMovie}>
        &larr;
      </button>
      <div className="movie">
        <img src={poster} alt={title} className='movie-img' />
        <h2 className='heading-tertiary'>{title}</h2>
        <p className='subheading2'>{plot}</p>
        <button className='btn'>Watch</button>
      </div>
      <div className="modal-backdrop" onClick={handleCloseMovie}></div>
    </div>
  )
}



































// import React, { useEffect, useState } from 'react'
// import { fetchMovie, removeId } from '../features/movies/moviesSlice';
// import { useDispatch, useSelector } from 'react-redux';

// const KEY = "1fbb7d99";

// export default function SidebarSlide({ onSelectedId2, onCloseMovie }) {
//   const [movie, setMovie] = useState({})

//   const { movieId } = useSelector((store) => store.movies);
//   const dispatch = useDispatch()

//   function handleCloseMovie() {
//     dispatch(removeId())
//   }

//   useEffect(() =>{
//     if (!movieId) return
//     dispatch(fetchMovie(movieId))
//   }, [dispatch, movieId])

//   const {
//     Title: title,
//     Year: year,
//     Poster: poster,
//     Runtime: runtime,
//     imdbRating,
//     Plot: plot,
//     Released: released,
//     Actors: actors,
//     Director: director,
//     Genre: genre,
//   } = movie;
//   useEffect(() =>{
//     async function getMovieDetails(){
//       const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${onSelectedId2}`)
//       const data = await res.json()

//       setMovie(data)
//     }
//     getMovieDetails()
//   }, [onSelectedId2])
//   return (
//     <div className='sidebarSlide' id='letSee'>
//       <button className='btn-back' onClick={handleCloseMovie}>
//         &larr;
//       </button>
//       <div className="movie">
//         <img src={poster} alt={title} className='movie-img' />
//         <h2 className='heading-tertiary'>{title}</h2>
//         <p className='subheading2'>{plot}</p>
//         <button className='btn'>Watch</button>
//       </div>
//       <div className="modal-backdrop" onClick={onCloseMovie}></div>
//     </div>
//   )
// }
