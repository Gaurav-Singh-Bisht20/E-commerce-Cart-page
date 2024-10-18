import { createContext, useContext, useEffect, useState } from "react";


const cartContext =  createContext()

export function CartContextProvider({children}){
    const [cart, setCart] = useState(() => {
        const cartItem = JSON.parse(localStorage.getItem('cartArr')) || [];
        return cartItem;
        });

        useEffect(() => {
            localStorage.setItem('cartArr', JSON.stringify(cart));
          }, [cart]);

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

    const removeItem = (id)=>{
        console.log('removeItem called')
        setCart(prev => {
            const filterItem = prev.filter(item => item.id !== id)
            return filterItem;
        })
    }
    const value = { cart, addToCart, removeItem };

    return <cartContext.Provider value={value}>{children}</cartContext.Provider>

}

export const useCart = () => useContext(cartContext)