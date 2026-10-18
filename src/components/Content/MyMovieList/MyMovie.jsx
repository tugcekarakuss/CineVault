import { FaStar, FaTimes, FaRegBookmark } from "react-icons/fa";

export default function MyMovie({ movie }) {
    if (!movie) {
        return (
            <div className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-gray-900/70 px-4 py-12 text-center">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-violet-400/20 bg-violet-500/10">
                    <FaRegBookmark className="text-lg text-violet-400" />
                </div>

                <h3 className="text-sm font-bold text-white">
                    A good story is worth saving.
                </h3>

                <p className="mt-3 max-w-xs text-xs leading-6 text-gray-400">
                    No movies saved yet. Find a movie you love and add it to
                    your list for your next movie night.
                </p>
            </div>
        );
    }

    return (
        <div className="mb-3 rounded-xl bg-gray-900 p-3 shadow-md transition hover:bg-gray-800">
            <div className="flex items-center gap-3">
                <img
                    src={
                        movie.poster_path
                            ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
                            : "/noImage.jpg"
                    }
                    alt={movie.title}
                    className="h-28 w-20 shrink-0 rounded-md object-cover"
                />

                <div className="min-w-0 flex-1">
                    <h3 className="truncate text-xs font-semibold md:text-base">
                        {movie.title}
                    </h3>

                    <div className="mt-2 flex items-center gap-4 text-[9px] text-gray-400 md:text-xs">
                        <span className="flex items-center gap-1">
                            <FaStar className="shrink-0 text-primary" />
                            {typeof movie.vote_average === "number"
                                ? movie.vote_average.toFixed(1)
                                : "N/A"}
                        </span>

                        <span>
                            {movie.release_date
                                ? movie.release_date.slice(0, 4)
                                : "N/A"}
                        </span>
                    </div>
                </div>

                <button
                    type="button"
                    aria-label={`Remove ${movie.title}`}
                    className="shrink-0 text-primary transition-colors duration-200 hover:text-secondary"
                >
                    <FaTimes />
                </button>
            </div>
        </div>
    );
}