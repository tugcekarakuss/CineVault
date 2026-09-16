import MovieList from "./MovieListSection";
import MyMovieList from "./MyMovieListSection";
export default function MovieContent() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-12 gap-6">

            {/* ALL MOVIES */}
            <MovieList />
            
            {/* MY LIST */}
            <MyMovieList />
        </main>
    );
}