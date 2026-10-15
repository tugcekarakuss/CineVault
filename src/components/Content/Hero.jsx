export default function Hero() {
  return (
    <header className="mb-8 flex flex-wrap items-end justify-between gap-4 pt-6 lg:pt-12">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Your next great movie awaits.
                  </h1>
                  <p className="mt-3 text-sm text-slate-400 sm:text-base">
                    Discover something unforgettable. Make it part of your collection.
                  </p>
                </div>
    
                <p className="hidden pb-1 text-sm text-slate-400 lg:block">
                  ▤ A little more cinema, a little less scrolling.
                </p>
              </header>
  )
}
