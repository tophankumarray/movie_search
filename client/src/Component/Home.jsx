import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MovieList from "../Search/MovieList";

const Home = () => {
  const user = useSelector((store) => store.app.user);
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (searchQuery.length > 2) {
      fetch(`https://www.omdbapi.com/?s=${searchQuery}&apikey=d0efa997`)
        .then((response) => response.json())
        .then((data) => {
          if (data.Search) {
            setMovies(data.Search);
          } else {
            setMovies([]);
          }
        });
    }
  }, [searchQuery]);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
