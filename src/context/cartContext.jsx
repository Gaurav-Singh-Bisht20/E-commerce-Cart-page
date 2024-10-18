import { createContext, useContext, useState } from "react";


const cartContext =  createContext()

export function CartContextProvider({children}){
    const [cart, setCart] = useState([]);

    const addToCart = (product, quantity)=>{
        setCart(prev => {
            const cartItem = prev.find((item)=> item.id === product.id);

            if(cartItem){
                return prev.map(item => 
                    item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
                );
            }else{
                return [...prev, { ...product, quantity }];
            }
        })
    }
    const value = { cart, addToCart };

    return <cartContext.Provider value={value}>{children}</cartContext.Provider>

}

export const useCart = () => useContext(cartContext)