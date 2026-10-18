import { FaStar, FaBookmark } from "react-icons/fa";

export default function Movie({ movie, onSelectedMovie, selectedMovie, selectedMovies }) {
  const releaseYear = movie.release_date?.slice(0, 4);

  const isAdded = selectedMovies.some((item) => item.id === movie.id)

  return (
    <div
      onClick={() => onSelectedMovie(movie.id)}
      className={`group  h-full overflow-hidden rounded-xl bg-gray-900 shadow-lg  cursor-pointer flex flex-col ${selectedMovie === movie.id
        ? "border-2 border-violet-500"
        : "border-2 border-transparent"
        }`}
    >
      <div className="relative">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
              : "/noImage.jpg"
          }
          alt={movie.title}
          className="aspect-2/3 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
        />

        {isAdded && (
          <button
            type="button"
            aria-label={`${movie.title} is in your watchlist`}
            className="absolute right-2 top-2 flex h-6 w-6 rounded-md items-center justify-center text-sm bg-gray-900/70 text-secondary "
          >
            <FaBookmark />
          </button>
        )}

        <div className="absolute bottom-0 left-0 flex items-center gap-1 rounded-tr-md  bg-gray-900 px-2 py-1 text-sm font-semibold text-white">
          <FaStar className="text-primary" />
          <span className="text-xs">
            {typeof movie.vote_average === "number"
              ? movie.vote_average.toFixed(1)
              : "N/A"}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-1 p-3">
        <h3 className="line-clamp-2 text-base font-semibold text-white">
          {movie.title}
        </h3>

        <p className="text-sm text-gray-400">
          {releaseYear || "Year unknown"}
        </p>
      </div>
    </div>
  );
}
