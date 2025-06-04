import LogoPic from "../atoms/LogoPic";
import NavBar from "../organism/NavBar";

const Header = ({ currentPage }: { currentPage: string }) => {
  return (
    <header className="px-4  xl:px-[3.25rem] h-[7.875rem] flex justify-between items-center">
      <LogoPic />
      <NavBar currentPage={currentPage} />
    </header>
  );
};

export default Header;
