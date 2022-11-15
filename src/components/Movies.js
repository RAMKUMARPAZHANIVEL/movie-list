import React from 'react'

const Movies = ({list}) => {
  return (
   <div>
     {list.map((elem,idx)=> {
       return(
        <div key={idx}>
            <h3>{elem.Title}</h3>
            <img src={elem.Poster} alt="poster"/>
            <p>Genre : {elem.Type}</p>
            <p>released at {elem.Year}</p>
        </div>
       )
    })}
   </div>
    // <div>Movies</div>
  )
}

export default Movies