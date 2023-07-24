import MovieList from "../components/MovieList";
import Navbar from "../components/Navbar";
import SidebarSlide from "../components/SidebarSlide";

export default function MainContent({ movies, onSelectedId, onSelectedId2 }) {
  
  return (
    <div className="grid-special grid--4-cols container">
      <SidebarSlide onSelectedId2={onSelectedId2}/>
      <Navbar />
      <div className="inline-element">
        <button className="btn grid-align-self search-btn">Search</button>
      </div>
      <p className="subheading">Result for: X</p>
      <MovieList onSelectedId={onSelectedId} movies={movies} className='take-all-row'/>
    </div>
  )
}
