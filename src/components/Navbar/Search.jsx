export default function Search({query,setQuery}) {
    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
                placeholder="Search movies..."
                className="bg-gray-800 px-3 py-2 rounded-lg lg:w-90"
            />
        </div>
    )
}
