import MovieList from "./MovieListContainer";
import MyMovieList from "./MyMovieListContainer";
export default function MovieSection() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-12 gap-6">

            {/* ALL MOVIES */}
            <MovieList />
            
            {/* MY LIST */}
            <MyMovieList />
        </main>
    );
}