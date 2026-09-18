import MyMovieList from "./MyMovieListSection";
export default function MovieContent({children}) {
    return (
        <main className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-12 gap-6">

            {/* ALL MOVIES */}
            {children}
            
            {/* MY LIST */}
            <MyMovieList />
        </main>
    );
}