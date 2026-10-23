import { useState } from "react";
// images
import Logo from "../assets/domen-logo.png";
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
//import domenLOGO from '../assets/domenLOGO.svg';

const Header = () => {
  const [shoeMenu, setShowMenu] = useState(false);

  return (
    <header className="py-8">
      <div className="w-11/12 max-w-[1300px]  mx-auto">
        <div className="flex  justify-between w-full items-center">
          {/* logo */}
          <Link to={`/`} className="">
            <img src={Logo} alt="Logotip" className="md:size-32 size-20" />
          </Link>
          {/* header Links */}
          <div
            className={`flex duration-300 gap-4 sm:gap-3 items-center justify-center header-links md:translate-x-0 ${
              shoeMenu ? "-translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              className="absolute top-5 right-5 text-white text-3xl block sm:hidden"
              onClick={() => setShowMenu(false)}
            >
              <IoCloseOutline />
            </button>
            <Link to="/gallery" onClick={() => setShowMenu(false)}>
              <button className="btn btn-sm hover:text-white duration-300">
                <span>Foto </span>
              </button>
            </Link>
            <Link
              to="/videos"
              onClick={() => setShowMenu(false)}
              className="sm:text-[8px] text-[16px] cursor-pointer w-max h-[60px] flex items-center justify-center"
            >
              <button className="btn btn-sm hover:text-white duration-300">
                <span>Video</span>
              </button>
            </Link>
            <Link
              to="/cenik"  // pricing
              onClick={() => setShowMenu(false)}
              className="sm:text-[8px] text-[16px] cursor-pointer w-max h-[60px] flex items-center justify-center"
            >
              <button className="btn btn-sm hover:text-white duration-300">
                <span>Cenik</span>
              </button>
            </Link>


            <Link
              to="/kontakt"
              onClick={() => setShowMenu(false)}
              className="sm:text-[18px] text-[16px] cursor-pointer w-max h-[60px] flex items-center justify-center"
            >
              <button className="btn btn-sm hover:text-white duration-300">
                <span>Kontakt</span>
              </button>
            </Link>
          </div>
          <button
            className="md:hidden block text-white text-3xl"
            onClick={() => setShowMenu(true)}
          >
            <RiMenu3Line />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
