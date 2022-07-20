import React from "react";
import { movies } from "../data";

function Movies() {
  const movieMap= movies.map(e=>{
  return(
    <div key={e.title}>
      <h2>Name: {e.title}</h2> 
      <p>Time: {e.time}</p>
      <p>Genres:</p>
       <ul>{e.genres.map(g=>{
     return <li key={g}>{g}</li>
    })}</ul></div>

  )
  });
  return <div>{/*{code here}*/
  <div>
  <h1>Movies Page</h1>
    {movieMap}
  </div>
  
  }</div>;
}

export default Movies;
