import React from "react";
import { directors } from "../data";



function Directors() {
  const directorItems = directors.map((director)=>(
    <div key={director.name}>
      <h2>Name: {director.name}</h2>
      <p>Movies: </p>
      <ul>
        {director.movies.map((movie)=>(
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ))

  return <div>
    <h1>Directors Page</h1>
      <div>{directorItems}</div>
  </div>;
}

export default Directors;
