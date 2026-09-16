import { useState } from "react";
import MovieList from "./MovieList/MovieList";
export default function MovieListSection() {
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

            {isOpenMovies && <MovieList/>}
        </div>
    )
}
