
import Navbar from "./components/Navbar/Navbar";
import MovieContent from "./components/Content/MovieContent";

import "/src/App.css"

export default function App() {
 

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <MovieContent/>
    </div>
  );
}