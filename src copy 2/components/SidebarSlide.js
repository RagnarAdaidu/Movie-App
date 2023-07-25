import React, { useEffect, useState } from 'react'

const KEY = "1fbb7d99";

export default function SidebarSlide({ onSelectedId2, onCloseMovie }) {
  const [movie, setMovie] = useState({})

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;
  useEffect(() =>{
    async function getMovieDetails(){
      const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${onSelectedId2}`)
      const data = await res.json()

      setMovie(data)
    }
    getMovieDetails()
  }, [onSelectedId2])
  return (
    <div className='sidebarSlide'>
      <button className='btn-back' onClick={() => onCloseMovie()}>
        &larr;
      </button>
      <div className="movie">
        <img src={poster} alt={title} className='movie-img' />
        <h2 className='heading-tertiary'>{title}</h2>
        <p className='subheading2'>{plot}</p>
        <button className='btn'>Watch</button>
      </div>
    </div>
  )
}
