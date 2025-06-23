import LogoPic from "../atoms/LogoPic";
import NavBar from "../organism/NavBar";

const Header = ({ currentPage }: { currentPage: string }) => {
  return (
    <header className="contain relative max-w-360 mx-auto px-4 lg:px-15 h-28 lg:h-29.5 flex justify-between gap-5 xl:gap-32 items-center">
      <LogoPic />
      <NavBar currentPage={currentPage} />
    </header>
  );
};

export default Header;
