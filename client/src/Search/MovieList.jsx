import React from "react";

const MovieList = (props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 pt-20">
      {props.movies.map((movie) => (
        <div
          key={movie.imdbID}
          className="bg-gray-800 text-white p-4 rounded-md"
        >
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-full h-64 object-cover rounded-md"
          />
          <h3 className="mt-2 text-lg font-bold">{movie.Title}</h3>
          <p>{movie.Year}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
