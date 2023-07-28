import { useEffect, useState } from "react";
import MainContent from "./pages/MainContent";
import Sidebar from "./pages/Sidebar";
import SearchDisplayMovie from "./features/movies/SearchDisplayMovie";

const KEY = "1fbb7d99";
// let query = 'mortal'

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedId, setSelectedId] = useState("");

  // console.log(query)

  function handleSelectedId(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId("");
  }

  // console.log(selectedId)

  // useEffect(function(){
  async function fetchMovies() {
    const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`);
    const data = await res.json();

    if (!res.ok) {
      console.log("hello world");
    }

    setMovies(data.Search);
  }
  // fetchMovies()
  // }, [query])
  // const movieTitle = movies?.find((movie) => movie.imdbID === selectedId)

  return (
    <div className={`${selectedId ? "App-dark" : "App"}`}>
      <div className="grid custom">
        <Sidebar />
        <SearchDisplayMovie />
        {/* <MainContent
          onFetchMovie={fetchMovies}
          onCloseMovie={handleCloseMovie}
          onSelectedId2={selectedId}
          onSelectedId={handleSelectedId}
          movies={movies}
          query={query}
          setQuery={setQuery}
        /> */}
      </div>
    </div>
  );
}

export default App;
