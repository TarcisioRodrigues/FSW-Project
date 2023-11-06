import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/src/Providers/cart";
import CartItem from "./cart-item";
import { Separator } from "./separator";
import { computedProductsTotalPrice } from "@/src/utils/product";
import { ScrollArea } from "./scroll-area";
import { Button } from "./button";
import { loadStripe } from "@stripe/stripe-js";
import { createCheckout } from "@/src/actions/checkout";
import { createOrder } from "@/src/actions/order";
import { useSession } from "next-auth/react";

export const Carts = () => {
    const { products, total, totalDiscount, subtotal } = useContext(CartContext)
    const { data } = useSession();
    const handleFinishPurchaseClick = async () => {
        if (!data?.user) {

            return;
        }

        const order = await createOrder(products, (data?.user as any).id);

        const checkout = await createCheckout(products, order.id);
        console.log(checkout)

        const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

        // Criar pedido no banco

        stripe?.redirectToCheckout({
            sessionId: checkout.id,
        });
    };
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
                        onClick={handleFinishPurchaseClick}
                    >
                        Finalizar compra
                    </Button>
                </div>
            )}
        </div>
    );
};


