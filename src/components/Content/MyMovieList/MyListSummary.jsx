import { FaStar, FaBookmark } from "react-icons/fa";

export default function MyListSummary({ selectedMovies }) {
    const getAverage = (arr) =>
        arr.length === 0
            ? 0
            : arr.reduce((sum, val) => sum + val, 0) / arr.length;

    const avgRating = getAverage(
        selectedMovies.map((movie) => movie.vote_average)
    );

    const totalMinutes = selectedMovies.reduce(
        (sum, movie) => sum + (movie.runtime || 0),
        0
    );

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return (
        <section className="border-b border-gray-800 bg-gray-900 px-4 py-5">
            <div className="mb-5 flex items-center justify-between">
                <h2 className="text-base font-semibold text-white">
                    Your watchlist
                </h2>

                <FaBookmark className="text-sm text-secondary" />
            </div>

            <div className="grid grid-cols-3">
                <div className="flex flex-col items-center gap-1">
                    <span className="text-lg font-semibold text-white">
                        {selectedMovies.length}
                    </span>
                    <span className="text-center text-[9px] text-gray-400">
                        Movies saved
                    </span>
                </div>

                <div className="flex flex-col items-center gap-1 border-x border-gray-800">
                    <span className="flex items-center gap-1 text-xl font-semibold text-white">
                        <FaStar className="text-lg text-primary" />
                        {selectedMovies.length ? avgRating.toFixed(1) : "—"}
                    </span>
                    <span className="text-center text-[9px] text-gray-400 ">
                        Avg. rating
                    </span>
                </div>

                <div className="flex flex-col items-center gap-1">
                    <span className="text-lg font-semibold text-white">
                        {hours}h {minutes}m
                    </span>
                    <span className="text-center text-[9px] text-gray-400">
                        Watch time
                    </span>
                </div>
            </div>
        </section>
    );
}
