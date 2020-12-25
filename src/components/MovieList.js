import React from "react";
import Movie from "./Movie";
const MovieList=(props)=>{
     console.log(props.movies);
    return(
        <div className="container">
        <div className="row">
          <div className="col s12">
          {props.movies.map((movies,i)=>
          {
                    return <Movie data={movies} key={i} />;
          })
}
                </div>
            </div>
        </div>
    );
};
export default MovieList;