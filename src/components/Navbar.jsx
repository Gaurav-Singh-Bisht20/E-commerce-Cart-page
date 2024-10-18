import { useState } from "react"
import { NavLink } from "react-router-dom"
import { BiX } from "react-icons/bi";
import { useCart } from "../context/cartContext";
import { FaTrash } from "react-icons/fa";


const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const {cart,removeItem} = useCart()

  const toggleCart = () => {
    setIsCartOpen((prevState) => !prevState); 
    console.log('cart clicked')
  };

  const closeCart = () => {
    setIsCartOpen(false); // Close the cart
  };

  const handleDelete = (id)=>{
    removeItem(id)
    console.log('delete icon clicked')
  }

  return (
    <div className="w-[90%] mx-auto flex justify-between items-center ">
        <div className="flex gap-4">
        <img src={'../../images/icon-menu.svg'} className="md:hidden" alt="" />
        <img src={'../../images/logo.svg'} alt="" />
        </div>
        <ul className="justify-between gap-4 items-center hidden md:flex">
        <NavLink to="/" className="text-base py-4 relative flex flex-col items-center">
  {({ isActive }) => (
    <>
      <p>Collections</p>
      <div 
        className={`w-full h-1 absolute bottom-0 ${isActive ? 'bg-orange-500 transition-all duration-500 ease-in-out' : 'bg-transparent'}`}
      ></div>
    </>
  )}
</NavLink>

<NavLink to="/men" className="text-base py-6 relative flex flex-col items-center">
  {({ isActive }) => (
    <>
      <p>Men</p>
      <div 
        className={`w-full h-1 absolute bottom-0 ${isActive ? 'bg-orange-500 transition-all duration-500 ease-in-out' : 'bg-transparent'}`}
      ></div>
    </>
  )}
</NavLink>

<NavLink to="/women" className="text-base py-4 relative flex flex-col items-center">
  {({ isActive }) => (
    <>
      <p>Women</p>
      <div 
        className={`w-full h-1 absolute bottom-0 ${isActive ? 'bg-orange-500 transition-all duration-500 ease-in-out' : 'bg-transparent'}`}
      ></div>
    </>
  )}
</NavLink>

<NavLink to="/about" className="text-base py-4 relative flex flex-col items-center">
  {({ isActive }) => (
    <>
      <p>About</p>
      <div 
        className={`w-full h-1 absolute bottom-0 ${isActive ? 'bg-orange-500 transition-all duration-500 ease-in-out' : 'bg-transparent'}`}
      ></div>
    </>
  )}
</NavLink>

<NavLink to="/contact" className="text-base py-4 relative flex flex-col items-center">
  {({ isActive }) => (
    <>
      <p>Contact</p>
      <div 
        className={`w-full h-1 absolute bottom-0 ${isActive ? 'bg-orange-500 transition-all duration-500 ease-in-out' : 'bg-transparent'}`}
      ></div>
    </>
  )}
</NavLink>

        </ul>
        <div className="flex items-center justify-between gap-4 md:gap-8">
        <div className="cursor-pointer relative group ">
          <div className="relative">
          <p className="rounded-full bg-orange-500 text-xl text-white absolute -top-6 z-50 w-6 text-center">{cart[0].quantity}</p>
          <img src={'../../images/icon-cart.svg'} onClick={toggleCart}  alt="" />
          </div>
          {isCartOpen && (
            <div className="w-[90vw] md:w-[400px] rounded-lg overflow-x-hidden min-h-64 shadow-2xl bg-white 
             absolute z-10 top-12 md:top-14 p-4 -right-12">
              <div className="flex justify-between items-center">
                <p className="text-2xl font-bold">Cart</p>
                <BiX
                  size={24}
                  className="cursor-pointer"
                  onClick={closeCart} 
                />
              </div>
              <hr className="h-[2px] bg-gray-300" />
              <div>
                <div>
                {cart.length === 0 ? (
                 <div className="flex justify-center items-center h-full mt-8">
                   <p >Your cart is empty.</p>
                 </div>
                ) : (
                  <div className="flex flex-col mt -4 gap-4">
                  <ul className="flex flex-col gap-4 ">
                    {cart.map((item) => (
                      <li className="flex justify-between mt-4" key={item.id}>
                        <div className="w-20">
                          <img src={item.img} alt="" className="rounded-md"/>
                        </div>
                        <div className="flex flex-col">
                         <p>{item.name}</p> 
                         <p>{item.quantity} x ${item.price} <span>${item.quantity*item.price}</span></p>
                        </div>
                        <button  className=" text-2xl" onClick={() => handleDelete(item.id)}>
                          <FaTrash />
                        </button>
                      </li>
                    ))}
                  </ul> 
                  <button className=" text-xl md:text-xl text-center bg-orange-600 rounded-xl  w-full py-1 md:py-2 mt-6">Checkout</button>
                  </div>
                )}
                </div>
                
                </div>
            </div>
          )}
        </div>
        <img src={'../../images/image-avatar.png'} className="w-8" alt="" />
        </div>
    </div>
  )
}

export default Navbar