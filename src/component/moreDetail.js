import React from 'react';

const moreDetail = (props) => {

    return (
        <>
        {
            props.movies.map((movie,index) => (

            <div className='myDiv'>
            <p>Title: {movie.Title}</p>
            <p>Awards: {movie.Awards}</p>
            <p>Genre: {movie.Genre}</p>
            <p>Actors: {movie.Actors}</p>
            <p>Plot: {movie.plot}</p>
            <img src={movie.Poster} alt='movie' height = '400cm' width="300cm"></img>
            <p>Released On: {movie.Year}</p>
            <button onClick={()=> moreDetail(movie.imdbID)}>More Details</button>
            </div>

            )
            )
            }
        </>
    );
};

export default moreDetail