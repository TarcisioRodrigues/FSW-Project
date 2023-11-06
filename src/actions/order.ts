"use server";

import { prismaClient } from "@/src/lib/prisma";
import { CartProduct } from "@/src/Providers/cart";

export const createOrder = async (
    cartProducts: CartProduct[],
    userId: string,
) => {
    const order = await prismaClient.order.create({
        data: {
            userId,
            status: "WAITING_FOR_PAYMENT",
            orderProducts: {
                createMany: {
                    data: cartProducts.map((product) => ({
                        basePrice: product.basePrice,
                        discountPercentage: product.discountPercentage,
                        productId: product.id,
                        quantity: product.quantity,
                    })),
                },
            },
        },
    });

    return order;
};