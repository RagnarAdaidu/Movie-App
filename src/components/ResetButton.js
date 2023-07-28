import { useDispatch } from "react-redux"
import { fetchMovie, fetchMovies, removeId } from "../features/movies/moviesSlice"

export default function ResetButton() {

  const dispatch = useDispatch()
  function clearMovie(){
    dispatch(removeId())
    dispatch(fetchMovie({}))
    dispatch(fetchMovies([]))
  }
  return (
    <div className="reset-div">
      <button className="btn reset-button" onClick={clearMovie}>Reset</button>
    </div>  
  )
}
