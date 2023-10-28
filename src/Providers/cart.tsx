"use client"
import { Product } from "@prisma/client";
import { ReactNode, createContext, useState } from "react";

interface CartProduct extends Product {
    quanity: number
}

interface ICartContext {
    products: CartProduct[]
    cartTotalPrice: number
    cartBasePrice: number
    carTotalDiscount: number
    addProductToCart: (product: CartProduct) => void
}


export const CartContext = createContext<ICartContext>({
    products: [],
    cartTotalPrice: 0,
    cartBasePrice: 0,
    carTotalDiscount: 0,
    addProductToCart: () => { },

})


const CartProvider = ({ children }: { children: ReactNode }) => {
    const [products, setProducts] = useState<CartProduct[]>([])
    const addProductToCart = (product: CartProduct) => {
        setProducts((prev) => [...prev, product])
    }
    return (<CartContext.Provider value={{
        products,
        addProductToCart,
        cartTotalPrice: 0,
        cartBasePrice: 0,
        carTotalDiscount: 0,
    }}>
        {children}
    </CartContext.Provider>);
}

export default CartProvider;