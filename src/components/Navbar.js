import React, { useState } from "react";

export default function Navbar() {
  const [query, setQuery] = useState("");

  return (
      <div className="label-and-input grid-align-self">
        <h3 htmlFor="search" className="h3 heading-tertiary">Explore</h3>
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
