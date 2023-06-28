
import './App.css';
import React, { useEffect,useState } from 'react';
import {getFilmList,searchFilm} from "./film";
 
const App =()  =>{

  const [popularFilm, setPopularFilms] =useState ([])

  useEffect(() => {
    getFilmList().then((result)=> {
      setPopularFilms(result)
    })
  },[])

 const popMovieList = () => {
    return popularFilm.map((movie,i) => {
      return (
        <div className="Film-wrapper" key={i}>
        <div className="Film-title" >{movie.title}</div>
        <img className="Film-image" src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} />
        <div className="Film-date">{movie.release_date}</div>
        <div className="Film-rate">{movie.vote_average} </div>
        </div>

    )
    })
  }
  
  const cariFilm = async (e) => {
    if (e.length > 3) {
      const query = await  searchFilm(e)
      setPopularFilms(query.results)
    }
  }
  console.log({popularFilm:popularFilm})
  return (
    <div className="App">
      <header className="App-header">
          <h1>Box Office</h1>
          <input placeholder='Cari FIlm Kalian' 
          className="Film-search" 
          onChange={({target}) =>cariFilm(target.value)} 
          />
        <div className="Film-container">
        {popMovieList()}
        </div>
        
      </header>
    </div>
  );
}

export default App;
