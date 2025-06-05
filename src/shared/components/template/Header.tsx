import LogoPic from "../atoms/LogoPic";
import NavBar from "../organism/NavBar";

const Header = ({ currentPage }: { currentPage: string }) => {
  return (
    <header className="contain max-w-360 mx-auto px-4 xl:px-13 h-31.5 flex justify-between items-center">
      <LogoPic />
      <NavBar currentPage={currentPage} />
    </header>
  );
};

export default Header;
