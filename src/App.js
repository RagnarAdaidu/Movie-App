import { useEffect, useState } from "react";
import MainContent from "./pages/MainContent";
import Sidebar from "./pages/Sidebar";

const KEY = "1fbb7d99";
let query = 'mortal'

function App() {
  const [movies, setMovies] = useState([])
  const [selectedId, setSelectedId] = useState('')

  function handleSelectedId(id){
    setSelectedId(id)
  }

  console.log(selectedId)
  
  useEffect(function(){
    async function fetchMovies(){
      const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`)
      const data = await res.json()

      if(!res.ok){
        console.log('hello world')
      }
      
      setMovies(data.Search);
    }
    fetchMovies()
  }, [])

  // console.log(movies)
  return (
    <div className="App">
      {/* <h1>Silver tongue devil</h1> */}
      <div className="grid custom">
      <Sidebar />
      <MainContent onSelectedId2={selectedId} onSelectedId={handleSelectedId} movies={movies}/>
      </div>
    </div>
  );
}

export default App;
