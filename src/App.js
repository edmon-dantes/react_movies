import "./App.css";
import Movie from "./movie";
import PageWrapper from "./pageWrapper";
import moviesJson from "./movies.json";
import Pagination from "./Pagination";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  // const [movies, setMovies] = useState([]);
  const SIZE = 7;

  let movies = moviesJson;

  const filterMovies = async () => {
    let url = "";

    var response = await fetch(url, {
      method: "GET",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        //"Origin": "http://raw.githubusercontent.com/"
      },
    });

    var json = await response.json();

    //setMovies(json);
  };

  const loadMovies = () => {
    movies = movies.slice((currentPage - 1) * SIZE, currentPage * SIZE);
  };

  const getTotalPages = () => {
    let total = moviesJson.length;
    return Math.ceil(total / SIZE);
  };

  loadMovies();

  return (
    <PageWrapper>
      <button onClick={filterMovies}>Demo</button>

      {movies.map((movie) => (
        <Movie
          picture={movie.picture}
          title={movie.title}
          qualification={movie.qualification}
          description={movie.description}
          director={movie.director}
          starts={movie.starts}
          release={movie.release}
          time={movie.time}
        ></Movie>
      ))}

      <Pagination
        page={currentPage}
        total={4}
        onChange={(page) => {
          setCurrentPage(page);
        }}
      />
    </PageWrapper>
  );
}

export default App;
