import React from "react";
import { actors } from "../data";

function Actors() {
  const aMap =actors.map(e=>{
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
  return <div>{/*{code here}*/
  <div>
  <h1>Actors Page</h1>
  {aMap}
  </div>
  }</div>;
}

export default Actors;
