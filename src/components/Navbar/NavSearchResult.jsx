export default function NavSearchResult({movies}) {
    return (
        <div className="hidden md:block text-sm text-gray-400">
            <span className="text-white font-semibold">
                {movies.length}
            </span>{" "}
            movies found
        </div>
    )
}
