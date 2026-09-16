import MyMovie from "./MyMovie";

export default function MyMovieList({ selectedMovies }) {
    return (
        selectedMovies.map((movie) => (
            <MyMovie key={movie.id} movie={movie}/>
        ))
    );
}