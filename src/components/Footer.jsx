export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-between gap-3 border-t border-gray-800 px-4 pb-10 pt-5 text-[10px] text-gray-500 sm:flex-row sm:px-6 lg:px-10">
            <div className="flex items-center gap-2">
                <p>CineVault</p>
                <span aria-hidden="true">·</span>
                <p>Made for the love of movies.</p>
            </div>

            <p>Great stories. All in one place.</p>
        </footer>
    );
}
