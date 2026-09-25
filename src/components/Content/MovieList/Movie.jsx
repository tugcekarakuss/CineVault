import { FaCalendarAlt } from "react-icons/fa";
export default function Movie({ movie }) {
    return (
        <div
            className="bg-gray-900 rounded-xl overflow-hidden hover:scale-105 transition cursor-pointer shadow-lg"
        >
            <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-72 object-cover"
            />

            <div className="p-3">
                <h3 className="text-xl font-semibold">
                    {movie.title}
                </h3>

                <div className="text-sm text-gray-400 mt-1 flex items-center gap-1">
                    <span className="flex items-center gap-2">
                        <FaCalendarAlt className="text-highlight"/>
                        {movie.year}
                    </span>
                </div>
            </div>
        </div>
    )
}
