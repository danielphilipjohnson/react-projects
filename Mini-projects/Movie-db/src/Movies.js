import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = () => {
  const { movies, isLoading } = useGlobalContext();
  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="movies">
      {movies?.map((movie) => {
        const { id, poster_path, Title: title, Year: year } = movie;
        console.log(poster_path);
        return (
          <Link to={`/movies/${id}`} key={id} className="movie">
            <article>
              <img
                src={
                  poster_path === "N/A"
                    ? url
                    : `https://image.tmdb.org/t/p/original/${poster_path}`
                }
                alt={title}
              />
              <div className="movie-info">
                <h4 className="title">{title}</h4>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
