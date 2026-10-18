import MyMovie from "./MyMovie";

export default function MyMovieList({ selectedMovies,onDeleteFromList }) {
    return (
        <div>
            {selectedMovies.length === 0 ? (
                <MyMovie movie={null} />
            ) : (
                selectedMovies.map((movie) => (
                    <MyMovie key={movie.id} movie={movie} onDeleteFromList={onDeleteFromList} />
                ))
            )}
        </div>
    );
}