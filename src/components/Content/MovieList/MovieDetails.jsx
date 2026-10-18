import { FaFilm, FaStar, FaClock, FaPlus, FaCheck } from "react-icons/fa";

export default function MovieDetails({ movie, loading, error, OnAddToList, selectedMovies }) {

  const isAdded = selectedMovies.some(
    (item) => item.id === movie.id
  )

  if (loading) {
    return (
      <p className="p-5 text-sm text-gray-400">
        Loading movie details...
      </p>
    );
  }

  if (error) {
    return (
      <p className="p-5 text-sm text-red-400">
        {error}
      </p>
    );
  }

  if (!movie) {
    return (
      <div className="flex flex-col items-center justify-center border-y border-white/10 bg-gray-900/70 px-4 py-12 text-center">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-violet-400/20 bg-violet-500/10">
          <FaFilm className="text-lg text-violet-400" />
        </div>

        <h6 className="text-sm font-bold text-white">
          A closer look at your next favorite
        </h6>

        <p className="mt-3 max-w-md text-xs leading-6 text-gray-400">
          Select a movie to see its story, details, and a little movie-night
          inspiration.
        </p>
      </div>
    );
  }

  return (
    <div className="border-y border-white/10 bg-gray-900/70 py-5 px-2">
      <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-sky-200/70">
        Movie Details
      </p>

      <div className="flex items-center gap-3">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
              : "/noImage.jpg"
          }
          alt={movie.title}
          className="w-20 h-28 shrink-0 rounded-md object-cover"
        />

        <div className="min-w-0 flex-1">
          <h2 className="text-base font-bold leading-snug text-white">
            {movie.title}
          </h2>

          <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px] text-slate-400">
            <span>{movie.release_date?.slice(0, 4)}</span>

            <span className="flex items-center gap-1 text-primary">
              <FaStar />
              {movie.vote_average?.toFixed(1)}
            </span>

            {movie.runtime && (
              <span className="flex items-center gap-1">
                <FaClock />
                {Math.floor(movie.runtime / 60)}h{" "}
                {movie.runtime % 60}m
              </span>
            )}
          </div>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {movie.genres?.map((genre) => (
              <span
                key={genre.id}
                className="rounded bg-slate-800 px-2 py-1 text-[10px] text-slate-300"
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-5 text-xs leading-5 text-slate-300">
        {movie.overview?.replaceAll("—", " ") || "No description available for this movie."}
      </p>

      <button
        type="button"
        onClick={() => {
          if (!isAdded) {
            OnAddToList(movie);
          }
        }}
        disabled={isAdded}
        className={`mt-5 flex w-full items-center justify-center gap-2 rounded-md px-4 py-3 text-xs font-medium transition-colors duration-300 ${isAdded
          ? "bg-primary text-white cursor-default"
          : "bg-secondary text-gray-950 hover:bg-primary"
          }`}
      >
        {isAdded ? <FaCheck /> : <FaPlus />}
        {isAdded ? "Added to My List" : "Add to My List"}
      </button>
    </div>
  );
}
