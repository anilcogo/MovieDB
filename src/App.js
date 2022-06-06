import React, {useState, useEffect} from "react";
import './App.css';
import List from './component/list'
import SearchBox from "./component/search";

const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('Green');

	const getMovie = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=6e9f45dd`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
    document.title = "Movie Search Engine"
    console.log("Loading...", searchValue);
		getMovie(searchValue);
	}, [searchValue]);

	return (
    <>
    <div style={{display:"flex", justifyContent:"center", "textAlign":"center"}}>
      <span>    
    <h1>Movie Search Engine</h1><br></br>
    <SearchBox setSearch={setSearchValue}/>
    </span>

    </div><br></br>
    <List movies={movies} />
    </>
	);
};

export default App;
