// MenuSidebar.js
import { NavLink } from "react-router-dom";
import { BiX } from "react-icons/bi";

const MenuSidebar = ({ isMenuOpen, closeMenu }) => {
  return (
    <div
      className={`overflow-y-auto h-screen flex-col absolute w-[75vw] z-50 bg-white left-0 gap-10 p-8 text-2xl font-bold 
      ${isMenuOpen ? "flex" : "hidden"}`}
    >
      <BiX size={40} className="cursor-pointer" onClick={closeMenu} />
      <ul className="flex flex-col gap-6">
        <NavLink to="/">Collections</NavLink>
        <NavLink to="/men">Men</NavLink>
        <NavLink to="/women">Women</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>
    </div>
  );
};

export default MenuSidebar;
