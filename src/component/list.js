import React from 'react';
import App2 from '../App2';



const List = (props) => {
    return (
        <>
        {
            props.movies.map((movie,index) => (

            <div className='myDiv'>
            <img src={movie.Poster} alt='movie' height = '400cm' width="300cm"></img>
            <p>Title: {movie.Title}</p>
            <p>Released On: {movie.Year}</p>
            <button onClick={()=> App2(movie.imdbID)}>More Details</button>
            </div>

            )
            )
            }
        </>
    );
};

export default List