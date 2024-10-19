// Navbar.js
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/cartContext";
import MenuSidebar from "./MenuSlider";
import Cart from "./Cart";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart, removeItem } = useCart();

  const toggleCart = () => setIsCartOpen((prev) => !prev);
  const closeCart = () => setIsCartOpen(false);
  const handleDelete = (id) => removeItem(id);
  const handleMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div>
      {/* Sidebar/Menu */}
      <MenuSidebar isMenuOpen={isMenuOpen} closeMenu={closeMenu} />

      {/* Navbar */}
      <div className="w-[90%] mx-auto flex justify-between items-center py-2 md:py-0">
        <div className="flex gap-4">
          <img src={"../../images/icon-menu.svg"} className="md:hidden" alt="" onClick={handleMenu} />
          <img src={"../../images/logo.svg"} alt="" />
        </div>

        <ul className="justify-between gap-4 items-center hidden md:flex">
          {["Collections", "Men", "Women", "About", "Contact"].map((text) => (
            <NavLink
              to={`/${text.toLowerCase()}`}
              key={text}
              className="text-base py-4 relative flex flex-col items-center"
            >
              {({ isActive }) => (
                <>
                  <p>{text}</p>
                  <div
                    className={`w-full h-1 absolute bottom-0 ${
                      isActive ? "bg-orange-500 transition-all duration-500 ease-in-out" : "bg-transparent"
                    }`}
                  ></div>
                </>
              )}
            </NavLink>
          ))}
        </ul>

        <div className="flex items-center justify-between gap-4 md:gap-8">
          <div className="cursor-pointer relative group">
            <div className="relative py-4">
              <p className="rounded-full bg-orange-500 text-xl text-white absolute -top-2 z-50 w-6 text-center">
                {cart[0]?.quantity || 0}
              </p>
              <img src={"../../images/icon-cart.svg"} onClick={toggleCart} alt="" />
            </div>

            <Cart
              cart={cart}
              closeCart={closeCart}
              handleDelete={handleDelete}
              isCartOpen={isCartOpen}
            />
          </div>
          <img src={"../../images/image-avatar.png"} className="w-8" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
