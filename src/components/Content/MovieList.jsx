import { useState } from "react";
import { movieList } from "../../../data";
export default function MovieList() {
    const [movies, setMovies] = useState(movieList);
    const [isOpenMovies, setIsOpenMovies] = useState(true);

    return (
        <div className="col-span-12 md:col-span-9 order-2 md:order-1">

            <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-semibold text-gray-300">
                    All Movies
                </h2>

                <button
                    onClick={() => setIsOpenMovies(v => !v)}
                    className="text-gray-400 hover:text-white border w-8 h-8 flex items-center justify-center rounded-lg"
                >
                    {isOpenMovies ? "▲" : "▼"}
                </button>
            </div>

            {isOpenMovies && (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                    {movies.map(movie => (
                        <div
                            key={movie.id}
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

                                <div className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                                    📅 <span>{movie.year}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
