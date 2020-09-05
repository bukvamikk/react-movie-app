import React from "react";
import SearchMovies from "./SearchMovies";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <h1 className="title">React Movie Search App</h1>
      <SearchMovies />
    </div>
  );
}
