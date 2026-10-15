import LogoImg from "../../../public/logo.png";

export default function Logo() {
  return (
    <div className="flex items-center justify-center">
      <img
        src={LogoImg}
        alt="Logo"
        className="h-auto w-24 sm:w-28 md:w-32 lg:w-36 object-contain"
      />
    </div>
  );
}