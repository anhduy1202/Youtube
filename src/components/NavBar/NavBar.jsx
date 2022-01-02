import { useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineMenu } from "react-icons/hi";
import useDarkMode from "../../useDarkMode";
const NavBar = (props) => {
  const { isMobile } = props;
  const [openMenu, setOpenMenu] = useState(false);
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav className="flex items-center ">
      <div className="flex items-center">
        <div className="text-20 font-bold mr-2"> NerdCard </div>
        {isDarkMode ? (
        <BsSunFill size={"24px"} color="#e9c46a" className="cursor-pointer" onClick={()=>toggleDarkMode(!isDarkMode)} />
        ):(
        <FaMoon size={"24px"} color="#e9c46a" className="cursor-pointer" onClick={()=>toggleDarkMode(!isDarkMode)} />
        )}
        
      </div>
      <ul className="md:flex md:gap-10 ml-auto text-16 font-semibold">
        {openMenu && isMobile ? (
          <MdOutlineClose
            size={"24px"}
            className="cursor-pointer"
            onClick={handleMenu}
          />
        ) : !openMenu && isMobile ? (
          <HiOutlineMenu
            size={"24px"}
            className="cursor-pointer"
            onClick={handleMenu}
          />
        ) : (
          <>
            <li className="btn-hover">Features</li>
            <li className="btn-hover">Menu </li>
            <li className="btn-hover">Our Story</li>
            <li className="btn-hover ml-28">Contact</li>
          </>
        )}
        {openMenu && (
          <div className="absolute right-8 bg-white p-8 text-center z-10 text-black text-13">
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Menu </li>
            <li className="cursor-pointer">Our Story</li>
            <li className="cursor-pointer">Contact</li>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
