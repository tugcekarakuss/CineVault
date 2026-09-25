import { FaStar, FaClock } from "react-icons/fa";
export default function MyMovie({movie}) {
    return (
        <div
            className="bg-gray-900 rounded-xl mb-3 shadow-md hover:bg-gray-800 transition"
        >
            <div className="flex">
                <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-20 h-28 object-cover"
                />

                <div className="p-3 flex flex-col justify-between w-full">
                    <h3 className="text-xl font-semibold">
                        {movie.title}
                    </h3>

                    <div className="flex justify-between  text-gray-400">
                        <span className="flex items-center gap-2"><FaStar className="text-highlight"/> {movie.rating}</span>
                        <span className="flex items-center gap-2"><FaClock className="text-highlight"/> {movie.duration} min.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
