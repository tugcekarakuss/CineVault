import { useState } from "react";
import { movieList } from "../data"
import "/src/App.css"

/* navbar components */
import Navbar from "./components/Navbar/Navbar";
import Logo from "./components/Navbar/Logo";
import Search from "./components/Navbar/Search";
import NavSearchResult from "./components/Navbar/NavSearchResult";

/* main components */
import MovieContent from "./components/Content/MovieContent";
import MovieList from "./components/Content/MovieList/MovieList";
import MovieListSection from "./components/Content/MovieListSection";

export default function App() {
  const [movies, setMovies] = useState(movieList);
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar>
        <Logo />
        <Search />
        <NavSearchResult movies={movies} />
      </Navbar>

      <MovieContent>
        <MovieListSection>
          <MovieList movies={movies} />
        </MovieListSection>
      </MovieContent>
    </div>
  );
}