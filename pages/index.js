import {useEffect, useState} from "react";
import Seo from "../components/Seo";

const API_KEY = "5a3e61e7679b1513f82b2f12bfb47722";

export default function Home() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
      const { results } = await response.json();

      setMovies(results);
    };

    loadMovies();
  }, []);

  return (
    <div>
      <Seo title="Home"/>

      {movies.length && (<h4>Loading...</h4>)}

      {
        movies?.map(movie => (
          <div key={movie['id']}>
            <h4>{movie['original_title']}</h4>
          </div>
        ))
      }
    </div>
  );
}
