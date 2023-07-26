import React, { useState } from "react";

export default function Navbar({query, setQuery}) {
  // const [query, setQuery] = useState("");

  return (
      <div className="label-and-input grid-align-self" id='search-for-movie'>
        <h3 htmlFor="search" className="h3 heading-tertiary">Explore</h3>
        <label htmlFor=""></label>
        <input
          className="search"
          type="text"
          id="search"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

  );
}
