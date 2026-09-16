import { selected_movie_list } from "../../../data";
import { useState } from "react";
import MyListSummary from "./MyListSummary";
import MyMovieList from "./MyMovieList";

export default function MyMovieListContainer() {

    const [selectedMovies, setSelectedMovies] = useState(selected_movie_list);
    const [isOpenList, setIsOpenList] = useState(true);

    return (
        <div className="col-span-12 md:col-span-3 order-1 md:order-2">

            <div className="flex flex-col justify-between">
                <div className="flex justify-between items-center mb-3">
                    <h2 className="text-xl font-semibold text-gray-300">
                        My List
                    </h2>

                    <button
                        onClick={() => setIsOpenList(v => !v)}
                        className="text-gray-400 hover:text-white border w-8 h-8 flex items-center justify-center rounded-lg"
                    >
                        {isOpenList ? "▲" : "▼"}
                    </button>
                </div>

                {isOpenList &&
                    <>
                        <div>
                            <MyListSummary selectedMovies={selectedMovies} />
                            <MyMovieList selectedMovies={selectedMovies}/>
                        </div>
                    </>}
            </div>
        </div>
    )
}
