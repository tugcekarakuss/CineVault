import { FaCalendarAlt } from "react-icons/fa";

export default function Movie({ movie }) {
  return (
    <div className="h-full overflow-hidden rounded-xl bg-gray-900 shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer flex flex-col">
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "/noImage.jpg"
        }
        alt={movie.title}
        className="h-72 w-full shrink-0 object-cover"
      />

      <div className="flex flex-1 flex-col p-2">
        <h3 className="line-clamp-2 min-h-14 text-xl font-semibold">
          {movie.title}
        </h3>

        <div className="mt-auto  text-sm text-gray-400">
          <span className="flex items-center gap-2">
            <FaCalendarAlt className="shrink-0 text-highlight" />
            {movie.release_date || "Release date unknown"}
          </span>
        </div>
      </div>
    </div>
  );
}
