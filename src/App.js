import Sidebar from "./pages/Sidebar";
import SearchDisplayMovie from "./features/movies/SearchDisplayMovie";
import MovieList from "./features/movies/MovieList";
import SidebarSlide from "./components/SidebarSlide";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Loader from "./components/Loader";
import ResetButton from "./components/ResetButton";

function App() {
  const { movieId, isLoading } = useSelector((store) => store.movies);

  return (
    <BrowserRouter>
      <div className={`${movieId ? "App-dark" : "App"}`}>
        <div className="grid custom">
          <Sidebar />
          <div className="grid grid--4-cols">
            <SearchDisplayMovie />
            <ResetButton />
            {isLoading ? <Loader /> : <MovieList />}
            {movieId && <SidebarSlide /> }
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
