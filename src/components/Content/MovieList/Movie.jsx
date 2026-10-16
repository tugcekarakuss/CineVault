import { FaStar, FaBookmark } from "react-icons/fa";

export default function Movie({ movie, onSelectedMovie, selectedMovie }) {
  const releaseYear = movie.release_date?.slice(0, 4);

  return (
    <div
      onClick={() => onSelectedMovie(movie.id)}
      className={`h-full overflow-hidden rounded-xl bg-gray-900 shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer flex flex-col ${
        selectedMovie === movie.id
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
          className="aspect-2/3 w-full object-cover"
        />

        <button
          type="button"
          aria-label="Add to watchlist"
          onClick={(event) => event.stopPropagation()}
          className="absolute right-2 top-2 flex h-6 w-6 rounded-md items-center justify-center text-sm bg-gray-900/70 text-secondary"
        >
          <FaBookmark  />
        </button>

        <div className="absolute bottom-0 left-0 flex items-center gap-1 rounded-tr-md  bg-gray-900 px-2 py-1 text-sm font-semibold text-white">
          <FaStar className="text-highlight" />
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
