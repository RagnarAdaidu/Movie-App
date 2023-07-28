import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "./moviesSlice";

export default function SearchDisplayMovie() {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();
  let title = query;

  function handleClick(e) {
    e.preventDefault();
    if (!query) return;
    dispatch(fetchMovies(query));
  }

  return (
    <div className="form-div">
      <form className="form grid grid--4-cols" onSubmit={handleClick}>
        <div className="labelInput">
          <label htmlFor="search" className="h3 heading-tertiary">
            Explore
          </label>
          <input
            className="search"
            type="text"
            id="search"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="search-button-container">
          <button className="search-btn btn">Search</button>
        </div>
      </form>
      <p className="subheading">
        Result for: <strong>{title}</strong>{" "}
      </p>
    </div>
  );
}
