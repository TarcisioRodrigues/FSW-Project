import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/src/Providers/cart";

export const Carts = () => {
    const { products } = useContext(CartContext)

    return (
        < div >
            <Badge className="text-base uppercase w-[30%]
                border-2 border-primary px-3 py-[0.365rem]" variant="outline">
                <ShoppingCartIcon size={16} /> <p className="text-xs">Carrinho</p>
            </Badge>

            {products.map(product => <h1 key={product.id}>{product.name}</h1>)}
        </div >
    );
}

