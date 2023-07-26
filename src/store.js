import { createStore, combineReducers, applyMiddleware } from "redux"
import moviesReducer from "./features/movies/moviesSlice"
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  movies: moviesReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store