import MovieList from "./MovieList";
import MyMovieList from "./MyMovieList";
export default function Main() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-12 gap-6">

            {/* ALL MOVIES */}
            <MovieList />
            
            {/* MY LIST */}
            <MyMovieList />
        </main>
    );
}