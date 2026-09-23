import { useState } from "react";

export default function ListSection({ children,title,className }) {
    const [isOpenMovies, setIsOpenMovies] = useState(true);

    return (
        <div className={className}>

            <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-semibold text-gray-300">
                    {title}
                </h2>

                <button
                    onClick={() => setIsOpenMovies(v => !v)}
                    className="text-gray-400 hover:text-white border w-8 h-8 flex items-center justify-center rounded-lg"
                >
                    {isOpenMovies ? "▲" : "▼"}
                </button>
            </div>

            {isOpenMovies && children}
        </div>
    )
}
