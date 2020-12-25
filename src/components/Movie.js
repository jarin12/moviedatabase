import {unstable_renderSubtreeIntoContainer} from "react-dom";
import {Link} from "react-router-dom";
const Movie=(props)=>
{
    const ImageURL = "https://image.tmdb.org/t/p/w500/" + props.data.poster_path;
    return(
        <div>
      
    <div className="col s12 m2">
      <div className="card">
        <div className="card-image">
        {props.data.poster_path == null ? (
            <img
              src="https://picsum.photos/200/300"
              alt=""
              style={{ width: "100", height: "200" }}
            />
          ) : (
            <img
              src={ImageURL}
              alt=""
              style={{ width: "100", height: "200" }}
            />
          )}
         
         <span class="card-title">{props.data.title}</span>
        </div>
        <div class="card-content">{props.data.release_date}</div>
         
        
        <div class="card-action">
        <Link
            to={{
              pathname: "/movie/" + props.data.id,
              movie_id: props.data.id,
            }}
          > see details 
            </Link>
        </div>
      </div>
    </div>
  </div>

              
    )
}
export default Movie ;