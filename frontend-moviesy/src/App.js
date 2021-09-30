import "./App.css";
import React, { useState, useEffect } from "react";
import ListMovies from "./components/ListMovies";
import api from "./services/api";
import mock_get_movies from "./_mocked/mock_get_movies";

function App() {
  const SHOULD_MOCK = true;

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      console.log("useEffect!");
      if (SHOULD_MOCK) {
        setMovies(mock_get_movies);
      }
      if (!SHOULD_MOCK) {
        const { data } = await api.get("");
        console.log(data);

        if (data.results) {
          setMovies(data.results);
        }
      }
    }
    loadMovies();
  }, [SHOULD_MOCK]);
  return (
    <div className="App">
      <ListMovies movies={movies} />
    </div>
  );
}

export default App;
