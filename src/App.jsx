import { useState } from "react";

import { movieList, selected_movie_list } from "../data";

import "/src/App.css";

/* navbar components */
import Navbar from "./components/Navbar/Navbar";
import Logo from "./components/Navbar/Logo";
import Search from "./components/Navbar/Search";
import NavSearchResult from "./components/Navbar/NavSearchResult";

/* main components */
import MovieContent from "./components/Content/MovieContent";
import MovieList from "./components/Content/MovieList/MovieList";
import ListSection from "./components/Content/ListSection";
import MyListSummary from "./components/Content/MyMovieList/MyListSummary";
import MyMovieList from "./components/Content/MyMovieList/MyMovieList";

export default function App() {
  const [movies, setMovies] = useState(movieList);
  const [selectedMovies, setSelectedMovies] = useState(selected_movie_list);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* navbar */}
      <Navbar>
        <Logo />
        <Search />
        <NavSearchResult movies={movies} />
      </Navbar>

      {/* content */}
      <MovieContent>

        <ListSection
          title="All Movies"
          className="col-span-12 md:col-span-9 order-2 md:order-1"
        >
          <MovieList movies={movies} />
        </ListSection>

        <ListSection
          title="My List"
          className="col-span-12 md:col-span-3 order-1 md:order-2"
        >
          <MyListSummary selectedMovies={selectedMovies} />
          <MyMovieList selectedMovies={selectedMovies} />

        </ListSection>

      </MovieContent>
    </div>
  );
}