import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/src/Providers/cart";
import CartItem from "./cart-item";
import { computedProductsTotalPrice } from "@/src/utils/product";

export const Carts = () => {
    const { products } = useContext(CartContext)

    return (
        < div className="flex h-full max-h-full flex-col gap-5 overflow-hidden">
            <Badge variant="heading">
                <ShoppingCartIcon size={16} /> <p className="text-xs">Carrinho</p>
            </Badge>

            <div className="flex h-full flex-col gap-8">
                {products.length > 0 ? (
                    products.map((product) => (
                        <CartItem
                            key={product.id}
                            product={computedProductsTotalPrice(product as any) as any}
                        />
                    ))
                ) : (
                    <p className="text-center font-semibold">
                        Carrinho vazio. Vamos fazer compras?
                    </p>
                )}
            </div>
        </div >
    );
}

