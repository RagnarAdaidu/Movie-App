import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie, removeId } from '../features/movies/moviesSlice';

export default function SidebarSlide() {

  const { movieId, movie } = useSelector((store) => store.movies);
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
    dispatch(fetchMovie(movieId))
  }, [dispatch, movieId])

  useEffect(function(){
    if (!title) return
    document.title = `Movie | ${title}`

    return function(){
      document.title = `OMDB - Movies`
    }
  }, [title])
  
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
