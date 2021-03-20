import { useState, useEffect } from "react";

const API_ENDPOINT = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab`;

// const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [data, setData] = useState(null);
  const fetchMovies = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data) {
        setData(data.results);

        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.Error });
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(`${API_ENDPOINT}${urlParams}`);
    fetchMovies(`${API_ENDPOINT}${urlParams}`);
  }, [urlParams]);
  return { isLoading, error, data };
};

export default useFetch;
