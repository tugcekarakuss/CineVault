import "/src/App.css";
import { useState, useEffect } from "react";
import { getPopularMovies, searchMovies, getMovieDetails } from "./services/tmdb"

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
import MovieDetails from "./components/Content/MovieList/MovieDetails";
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
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [movieDetails, setMovieDetails] = useState(null);
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [detailsError, setDetailsError] = useState("");
  const [featuredMovie, setFeaturedMovie] = useState(null);

  function handleSelectedMovie(id) {
    setSelectedMovie(id)
  }

  function handleAddToList(movie) {
    setSelectedMovies((prev) => {
      if (prev.some((item) => item.id === movie.id)) {
        return prev
      }
      return [...prev, movie]
    })
  }

  function handleDeleteFromList(id) {
    setSelectedMovies((selectedMovies) => 
      selectedMovies.filter((m) => m.id !== id))
  }

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


  useEffect(() => {
    if (selectedMovie === null) {
      return;
    }

    let ignore = false;

    async function fetchMovieDetails() {
      try {
        setDetailsLoading(true);
        setDetailsError("");

        const data = await getMovieDetails(selectedMovie);

        if (!ignore) {
          setMovieDetails(data);
        }
      } catch (err) {
        if (!ignore) {
          setMovieDetails(null);
          setDetailsError(
            err.message || "Failed to load movie details."
          );
        }
      } finally {
        if (!ignore) {
          setDetailsLoading(false);
        }
      }
    }

    fetchMovieDetails();

    return () => {
      ignore = true;
    };
  }, [selectedMovie]);


  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NavSearchResult movies={movies} />
      </Navbar>

      <main className="px-4 pb-10 pt-24 sm:px-6 lg:px-10">
        <Hero />
        <FeaturedMovie movie={featuredMovie} />

        <div className="mt-10" id="all-movies">
          <MovieContent>
            <ListSection
              title="All Movies"
              className="col-span-12 lg:col-span-9 order-2 lg:order-1"
            >
              {loading && <Loading />}
              {!loading && !error && <MovieList onDeleteFromList={handleDeleteFromList} selectedMovies={selectedMovies} onSelectedMovie={handleSelectedMovie} selectedMovie={selectedMovie} movies={movies} />}
              {error && <ErrorMessage message={error} />}

            </ListSection>

            <ListSection
              title="My List"
              className="col-span-12 lg:col-span-3 order-1 lg:order-2 "
            >
              <div className="rounded-lg bg-gray-900 border border-gray-600">
                <MovieDetails
                  movie={movieDetails}
                  loading={detailsLoading}
                  error={detailsError}
                  OnAddToList={handleAddToList}
                  selectedMovies={selectedMovies}
                />
                <MyListSummary selectedMovies={selectedMovies} />
                <MyMovieList selectedMovies={selectedMovies} onDeleteFromList={handleDeleteFromList} />
              </div>
            </ListSection>

          </MovieContent>
        </div>
      </main>
    </div>
  )
}