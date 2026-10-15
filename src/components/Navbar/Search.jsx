export default function Search({query,setQuery}) {
    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
                placeholder="Search movies..."
                className="bg-gray-800 p-2 rounded-lg text-sm md:text-md lg:w-90"
            />
        </div>
    )
}
