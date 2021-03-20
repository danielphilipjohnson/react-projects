import React, { useState, useContext } from "react";
// make sure to use https
import useFetch from "./useFetch";

export const API_ENDPOINT = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab`;

// export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false
  const [query, setQuery] = useState("batman");
  const { isLoading, error, data: movies } = useFetch(
    `&language=en-US&query=${query}&page=1&include_adult=false`
  );
  console.log(movies);
  return (
    <AppContext.Provider value={{ isLoading, error, movies, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
