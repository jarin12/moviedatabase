import React, { useState } from "react";
import { getMoviesByTerm } from "./Api/Tmdb.js";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import Pagination from "./components/Pagination";
const App=()=>{
  const [SearchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
 // Constructor(props){
 //   super(props);
  //  this.state ={setMovies:''};
  //  this.handleSubmit=this.handleSubmit.bind(this);
 // };
 
  const handleSubmit=async(event)=>
  {
    event.preventDefault();
    await getMoviesByTerm(SearchTerm,setMovies,currentPage, setTotalPages);
  }
  const handleChange=(event)=>
  {
  
 setSearchTerm(event.target.value);
  }
  const nextPage = async (page_number) => {
    setCurrentPage(page_number);
    await getMoviesByTerm(SearchTerm, setMovies, currentPage, setTotalPages);
  };
  
  return <div>
      <Navbar/>
      <SearchBar handleChange={handleChange} handleSubmit={handleSubmit}/>
      <MovieList movies={movies}/>
      {totalPages > 1 ? (
        <Pagination
          nextPage={nextPage}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      ) : (
        ""
      )}
  </div>
};
export default App ;