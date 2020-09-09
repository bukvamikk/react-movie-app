import React, { useState } from "react";
import MovieCard from "./MovieCard";

export default function SearchMovies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovie = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=d4ef764353f6a495592869c7487e48f8&language=en-US&query=${query}&page=1&include_adult=false`;

    const response = await fetch(url);
    const data = await response.json();

    try {
      const res = await fetch(url);
      const data = await res.json();

      console.log(data.results);
      setMovies(data.results);
    } catch (errors) {
      console.error(errors);
    }
  };

  return (
    <>
      <form className="form" onSubmit={searchMovie}>
        <label className="label" htmlFor="query"></label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="Jurassic Park"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input className="button" type="submit" value="Submit" />
      </form>

      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} />
          ))}
      </div>
    </>
  );
}
