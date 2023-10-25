import { Product } from "@prisma/client";
interface ProcuWithTotalPrice extends Product {
    totalPrice: number
}
export const computedProductsTotalPrice = (product: Product): ProcuWithTotalPrice => {
    if (product.discountPercentage == 0) {
        return {
            ...product,
            totalPrice: Number(product.basePrice),

        }
    }

    const totalPrice = Number(product.basePrice) * (product.discountPercentage / 100)


    return {
        ...product,
        totalPrice
    }
}
