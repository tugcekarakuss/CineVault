import "/src/App.css";
import { useState, useEffect } from "react";
import { getPopularMovies } from "./services/tmdb"

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

import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage"

export default function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    async function getMovies() {
      try {
        setLoading(true)
        setError("")
        const popularMovies = await getPopularMovies()

        if(popularMovies.length==0){
          throw new Error("No movies found.")
        }
        setMovies(popularMovies)
      }
      catch(err){
        setError(err.message || "Failed to load movies.")
      }
        setLoading(false)
      }
      getMovies()
  }, [])

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
          {loading && <Loading/>}
          {!loading && !error && <MovieList movies={movies} />}
          {error && <ErrorMessage message={error}/>}
          
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