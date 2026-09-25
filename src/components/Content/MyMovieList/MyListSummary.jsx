import { FaStar, FaClock } from "react-icons/fa";
export default function MyListSummary({ selectedMovies }) {

    const getAverage = (arr) =>
        arr.length === 0
            ? 0
            : arr.reduce((sum, val) => sum + val, 0) / arr.length;

    const avgRating = getAverage(selectedMovies.map(m => m.rating));
    const avgDuration = getAverage(selectedMovies.map(m => m.duration));
    return (
        <div className="bg-gray-900 rounded-xl p-4 mb-4 shadow-lg">
            <h2 className="text-xl font-semibold mb-3">
                Added [{selectedMovies.length}] movies to the list
            </h2>

            <div className="flex justify-between text-xl text-gray-400">
                <span className="flex items-center gap-2">
                    <FaStar className="text-highlight" /> 
                    {avgRating.toFixed(2)}
                </span>

                <span className="flex items-center gap-2">
                    <FaClock className="text-highlight"/> 
                    {avgDuration.toFixed(2)} min.
                </span>
            </div>
        </div>
    )
}
