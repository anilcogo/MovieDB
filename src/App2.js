import React, {useState, useEffect} from "react";
import './App.css';
import List from './component/list';
import moreDetail from './component/moreDetail';
import SearchBox from "./component/search";

const App2 = (imdbID) => {
	const [movies, setMovies] = useState([]);

	const getMovie = async () => {
		const url = `http://www.omdbapi.com/?s=${imdbID}&apikey=6e9f45dd`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
    document.title = "Movie Search Engine"
		getMovie();
	}, []);

	return (
    <>
    <div style={{display:"flex", justifyContent:"center", "textAlign":"center"}}>
    <h1>Movie Search Engine</h1><br></br>
    </div>
    <moreDetail movies={movies} />
    </>
	);
};

export default App2;
