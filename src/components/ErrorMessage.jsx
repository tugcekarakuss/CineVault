import { FaFilm, FaExclamationCircle } from "react-icons/fa";

export default function MovieError({ message }) {
  return (
    <div className="col-span-full flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-gray-900/70 px-6 py-12 text-center shadow-xl">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-violet-400/20 bg-violet-500/10">
        <FaFilm className="text-3xl text-violet-400" />
      </div>

      <h2 className="text-2xl font-bold text-white sm:text-3xl">
        Unable to load movies
      </h2>

      <p className="mt-3 max-w-md text-sm leading-6 text-gray-400 sm:text-base">
        Something went wrong while loading the movie collection.
        Please try again in a moment.
      </p>

      {message && (
        <div className="mt-5 flex items-center gap-2 text-sm text-red-400">
          <FaExclamationCircle />
          <span>{message}</span>
        </div>
      )}
    </div>
  );
}
