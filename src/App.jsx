import "/src/App.css";
import { useState, useEffect } from "react";
import { getPopularMovies, searchMovies } from "./services/tmdb"

/* navbar components */
import Navbar from "./components/Navbar/Navbar";
import Logo from "./components/Navbar/Logo";
import Search from "./components/Navbar/Search";
import NavSearchResult from "./components/Navbar/NavSearchResult";

/* main components */
import Hero from "./components/Content/Hero";
import FeaturedMovie from "./components/Content/FeaturedMovie";
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
  const [query, setQuery] = useState("")
  const [featuredMovie, setFeaturedMovie] = useState(null);

  useEffect(() => {
    async function getMovies() {
      try {
        setLoading(true);
        setError("");
        let results;

        if (query.trim().length < 4) {
          results = await getPopularMovies();
        }
        else {
          results = await searchMovies(query.trim());
        }
        setMovies(results);
        setFeaturedMovie((current) => current ?? results[0] ?? null);

        if (results.length === 0) {
          setError("No movies found.");
        }
      }
      catch (err) {
        setError(err.message || "Failed to load movies.");
      }
      finally {
        setLoading(false);
      }
    }
    getMovies();
  }, [query]);

  return (
      <div className="min-h-screen bg-gray-950 text-white">
        <Navbar>
          <Logo />
          <Search query={query} setQuery={setQuery} />
          <NavSearchResult movies={movies} />
        </Navbar>

        <main className="px-4 pb-10 pt-24 sm:px-6 lg:px-10">
          <Hero/>
          <FeaturedMovie movie={featuredMovie} />

          <div className="mt-10" id="all-movies">
            <MovieContent>
              <ListSection
                title="All Movies"
                className="col-span-12 md:col-span-9 order-2 md:order-1"
              >
                {loading && <Loading />}
                {!loading && !error && <MovieList movies={movies} />}
                {error && <ErrorMessage message={error} />}

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
        </main>
      </div>
  )
}