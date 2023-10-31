import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/src/Providers/cart";
import CartItem from "./cart-item";
import { Separator } from "./separator";
import { computedProductsTotalPrice } from "@/src/utils/product";
import { ScrollArea } from "./scroll-area";
import { Button } from "./button";

export const Carts = () => {
    const { products, total, totalDiscount, subtotal } = useContext(CartContext)

    return (
        <div className="flex h-full flex-col gap-8">
            <Badge variant="heading">
                <ShoppingCartIcon size={16} />
                Carrinho
            </Badge>


            <div className="flex h-[100%] max-h-full flex-col gap-5 overflow-hidden">
                <ScrollArea className="h-full">
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
                </ScrollArea>
            </div>

            {products.length > 0 && (
                <div className="flex flex-col gap-3">
                    <Separator />

                    <div className="flex items-center justify-between text-xs lg:text-sm">
                        <p>Subtotal</p>
                        <p>R$ {subtotal.toFixed(2)}</p>
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between text-xs lg:text-sm">
                        <p>Entrega</p>
                        <p>GRÁTIS</p>
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between text-xs lg:text-sm">
                        <p>Descontos</p>
                        <p>- R$ {totalDiscount.toFixed(2)}</p>
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between text-sm font-bold lg:text-base">
                        <p>Total</p>
                        <p>R$ {total.toFixed(2)}</p>
                    </div>

                    <Button
                        className="mt-7 font-bold uppercase"

                    >
                        Finalizar compra
                    </Button>
                </div>
            )}
        </div>
    );
};


