const initialState = {
  movies: [],
  movieId: '',
  isLoading: false,
}

const KEY = "1fbb7d99";

export default function moviesReducer(state=initialState, action){
  switch(action.type){
    case 'omdb/fetchMovies':
      return {
        ...state,
        movies: action.payload,
        isLoading: false

      }
    case 'omdb/fetchingMovies':
      return {
        ...state,
        isLoading: true

      }
    case 'omdb/fetchId':
      return {
        ...state,
        movieId: action.payload
      }
      default:
        return state
  }
}

export function fetchMovies(query){
  // return {
  //   type: 'fetch/Movies', payload: initialState
  // }
  
  return async function(dispatch, getState){
    dispatch({type: 'omdb/fetchingMovies'})
    const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`)
      const data = await res.json()
      
      dispatch({type:'omdb/fetchMovies', payload: data})
  }
}

export function fetchId(id){
  return {
    type: 'omdb/fetchId', payload: id
  }
}

export function removeId(id){
  return {
    type: 'omdb/fetchId', payload: null
  }
}