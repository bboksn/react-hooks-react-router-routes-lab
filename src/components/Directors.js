import React from "react";
import { directors } from "../data";

function Directors() {
  const dMap =directors.map(e=>{
    return(
      <div key={e.name}>
        <h3>Name: {e.name}</h3>
        <p>Movies:</p>
        <ul>{e.movies.map(m=>{
          return <li key={m}>{m}</li>
        })}</ul>
        </div>
        
    )
  })
  return (/*{code here}*/
  <div>
  <h1>Directors Page</h1>
  {dMap}
  </div>
 );
}

export default Directors;
