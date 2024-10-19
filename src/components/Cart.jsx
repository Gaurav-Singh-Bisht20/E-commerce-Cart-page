// Cart.js
import { BiX } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";

const Cart = ({ cart, closeCart, handleDelete, isCartOpen }) => {
  return (
    isCartOpen && (
      <div className="w-[90vw] md:w-[400px] rounded-lg overflow-x-hidden min-h-64 shadow-2xl bg-white 
      absolute z-10 top-20 p-4 -right-12">
        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold">Cart</p>
          <BiX size={24} className="cursor-pointer" onClick={closeCart} />
        </div>
        <hr className="h-[2px] bg-gray-300" />
        <div>
          {cart.length === 0 ? (
            <div className="flex justify-center items-center h-full mt-8">
              <p>Your cart is empty.</p>
            </div>
          ) : (
            <div className="flex flex-col mt-4 gap-4">
              <ul className="flex flex-col gap-4">
                {cart.map((item) => (
                  <li className="flex justify-between mt-4" key={item.id}>
                    <div className="w-20">
                      <img src={item.img} alt="" className="rounded-md" />
                    </div>
                    <div className="flex flex-col">
                      <p>{item.name}</p>
                      <p>
                        {item.quantity} x ${item.price} <span>${item.quantity * item.price}</span>
                      </p>
                    </div>
                    <button className="text-2xl" onClick={() => handleDelete(item.id)}>
                      <FaTrash />
                    </button>
                  </li>
                ))}
              </ul>
              <button className="text-xl md:text-xl text-center bg-orange-600 rounded-xl w-full py-1 md:py-2 mt-6">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default Cart;
