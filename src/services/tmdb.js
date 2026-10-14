const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export async function getPopularMovies(page = 1) {
  const url = new URL(`${BASE_URL}/movie/popular`);

  url.searchParams.set("api_key", API_KEY);
  url.searchParams.set("language", "en-US");
  url.searchParams.set("page", page);

  console.log("API URL:", url.toString().replace(API_KEY, "[HIDDEN]"));

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Unable to load movies.: ${response.status}`);
  }

  const data = await response.json();

  return data.results;
}
