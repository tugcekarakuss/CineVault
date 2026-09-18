import Movie from "./Movie";
export default function MovieList({movies}) {

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {movies.map(movie => (
                <Movie movie={movie} key={movie.id}/>
            ))}
        </div>
    )
}
