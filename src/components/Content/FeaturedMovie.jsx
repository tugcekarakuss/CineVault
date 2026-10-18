const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const genreNames = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    18: "Drama",
    27: "Horror",
    35: "Comedy",
    53: "Thriller",
    878: "Sci-Fi",
    10749: "Romance",
    14: "Fantasy",
    80: "Crime",
    9648: "Mystery",
    99: "Documentary",
    10751: "Family",
    36: "History",
    10752: "War",
    37: "Western",
    10402: "Music",
    10770: "TV Movie",
};

export default function FeaturedMovie({ movie }) {
    if (!movie) return null;

    const backdrop = movie.backdrop_path
        ? `${IMAGE_BASE_URL}${movie.backdrop_path}`
        : movie.poster_path
            ? `https://image.tmdb.org/t/p/w780${movie.poster_path}`
            : null;

    const year = movie.release_date?.slice(0, 4);

    const genres = movie.genre_ids
        ?.slice(0, 2)
        .map((id) => genreNames[id])
        .filter(Boolean);

    return (
        <section className="relative isolate mx-auto min-h-95 w-full overflow-hidden rounded-xl border border-white/10 bg-gray-900 md:min-h-88.75">
            {/* Background image */}
            {backdrop && (
                <img
                    src={backdrop}
                    alt=""
                    className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
                />
            )}

            {/* Cinematic overlays */}
            <div className="absolute inset-0 -z-10 bg-linear-to-r from-gray-950 via-gray-950/80 to-gray-950/10" />
            <div className="absolute inset-0 -z-10 bg-linear-to-t from-gray-950/70 via-transparent to-gray-950/10" />

            {/* Movie information */}
            <div className="flex min-h-95 max-w-xl flex-col justify-center px-6 py-10 sm:px-9 md:min-h-88.75 md:px-11 md:py-12">
                <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-secondary">
                    <span aria-hidden="true">✦</span>
                    The Spotlight
                </p>

                <h2 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-5xl">
                    {movie.title}
                </h2>

                <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-300">
                    {movie.vote_average != null && (
                        <span className="font-semibold text-primary">
                            ★ {movie.vote_average.toFixed(1)}
                        </span>
                    )}

                    {year && <span>{year}</span>}

                    {genres?.length > 0 && (
                        <span>{genres.join(" · ")}</span>
                    )}
                </div>

                <p className="mb-7 line-clamp-3 max-w-md text-sm leading-7 text-slate-300 sm:text-base">
                    {movie.overview?.replaceAll("—","") || "Discover more about this movie."}
                </p>

                <div>
                    <a
                        href="#all-movies"
                        className="inline-flex items-center gap-3 rounded-lg  px-5 py-3 font-medium text-gray-950 transition-colors bg-secondary hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
                    >
                        Explore Movies
                    </a>
                </div>
            </div>
        </section>
    );
}
