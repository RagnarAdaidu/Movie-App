import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from './moviesSlice'

export default function SearchDisplayMovie() {
  const [query, setQuery] = useState('')
  const { isLoading, movies } = useSelector(store => store.movies)

  const dispatch = useDispatch()

  function handleClick(e){
    e.preventDefault()
    if (!query) return
    dispatch(fetchMovies(query))
    setQuery('')
  }
  console.log(isLoading, movies)


  return (
    <div className='section-search-display'>
      <form className="label-and-input grid-align-self" id='search-for-movie' onSubmit={handleClick}>
        <div>
          <label htmlFor="search" className="h3 heading-tertiary">Explore</label>
          <input
            className="search"
            type="text"
            id="search"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <button>Search</button>
        <p className="subheading">Result for: <strong>{query}</strong> </p>
      </form>

    </div>
  )
}
