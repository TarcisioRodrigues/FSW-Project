"use client"

import { CartContext } from "@/src/Providers/cart";
import { Button } from "@/src/components/ui/button";
import { DiscountBadge } from "@/src/components/ui/discountBadge";
import { ProductWithTotalPrice } from "@/src/utils/product";
import { ArrowLeftIcon, ArrowRightIcon, TruckIcon } from "lucide-react";
import { useContext, useState } from "react";

interface ProductInfoProps {
    product: ProductWithTotalPrice
}
export const ProductInfo = ({ product }: ProductInfoProps) => {
    const { addProductToCart } = useContext(CartContext)
    const [quantity, setQuanity] = useState(1)
    const handlerIncrement = () => {
        setQuanity((prevState) => prevState + 1)
    }
    const handlerDecrement = () => {
        setQuanity((prevState) => (prevState === 1 ? prevState : prevState - 1))
    }
    const handleAddToCard = () => {
        addProductToCart({ ...product, quantity })
    }
    return (
        <div className="flex flex-col px-5">
            <h2 className="font-medium">
                {product.name}
            </h2>
            <div className=" flex items-center gap-2">
                <h1 className="text-xl font-bold">R${product.totalPrice.toFixed(2)}</h1>
                {product.discountPercentage > 0 && (

                    <DiscountBadge className=" left-3 top-3 px-2 py-[2px]">
                        {product.discountPercentage}
                    </DiscountBadge>

                )}
            </div>
            {product.discountPercentage > 0 && (
                <p className=" opacity-75 line-through text-xs">De R${Number(product.basePrice).toFixed(2)}</p>
            )}
            <div className="flex items-center gap-3 mt-4">
                <Button size="icon" variant="outline" onClick={handlerDecrement}>
                    <ArrowLeftIcon size={16} />
                </Button>
                <span className="text-lg">{quantity}</span>
                <Button onClick={handlerIncrement}><ArrowRightIcon size={16} /></Button>
            </div>
            <div className="flex flex-col gap-3 mt-8">
                <h3 className="font-bold">Descrição</h3>
                <p className="text-sm opacity-60 text-justify">{product.description}</p>
            </div>
            <Button className="mt-8 uppercase font-bold" onClick={handleAddToCard}>Adicionar ao carrinho</Button>
            <div className="mt-5 flex items-center justify-between rounded-lg bg-accent px-5 py-2">
                <div className="flex items-center gap-2">
                    <TruckIcon />

                    <div className="flex flex-col">
                        <p className="text-xs">
                            Entrega via <span className="font-bold">FSPacket®</span>
                        </p>
                        <p className="text-xs text-[#8162FF]">
                            Envio para <span className="font-bold">todo Brasil</span>
                        </p>
                    </div>
                </div>

                <p className="text-xs font-bold">Frete grátis</p>
            </div>
        </div>
    );
}

