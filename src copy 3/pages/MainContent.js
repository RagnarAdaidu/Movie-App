// import { useEffect } from "react";
import MovieList from "../components/MovieList";
import Navbar from "../components/Navbar";
import SidebarSlide from "../components/SidebarSlide";

export default function MainContent({ movies, onFetchMovie, onSelectedId, onSelectedId2, onCloseMovie, query, setQuery }) {
  // useEffect(() => {
  //   onFetchMovie()
  // }, [])
  // const movieTitle = movies.find((movie) => movie.omdbID = onSelectedId2)?.Title
  
  return (
    <div className="grid-special grid--3-cols container">
      {onSelectedId2 && <SidebarSlide onSelectedId={onSelectedId} onCloseMovie={onCloseMovie} onSelectedId2={onSelectedId2}/>}
      <Navbar query={query} setQuery={setQuery}/>
      <div className="inline-element">
        <button className="btn grid-align-self search-btn" onClick={() => onFetchMovie()}>Search</button>
      </div>
      <p className="subheading">Result for: <strong>{query}</strong> </p>
      <MovieList onSelectedId={onSelectedId} movies={movies} className='take-all-row'/>
    </div>
  )
}
