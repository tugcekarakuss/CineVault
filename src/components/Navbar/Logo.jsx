import LogoImg from "/logo.png";

export default function Logo() {
  return (
    <div className="flex items-center justify-center">
      <a href="index.html">
        <img
          src={LogoImg}
          alt="Logo"
          className="h-auto w-28 sm:w-12 md:w-24 lg:w-28 object-contain"
        />
      </a>
    </div>
  );
}