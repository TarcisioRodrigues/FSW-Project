import { ProductWithTotalPrice } from "@/src/utils/product";
import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDownIcon } from "lucide-react";
import Link from "next/link";
import { DiscountBadge } from "./discountBadge";

interface ItemProductProps {
    product: ProductWithTotalPrice
    className?: string;
}
export const ProductItem = ({ product }: ItemProductProps) => {
    return (

        <Link href={`/product/${product.slug}`}>
            <div className="flex flex-col gap-4 w-full h-full">
                <div className=" relative bg-accent rounded-lg h-full w-full items-center justify-center">
                    <Image
                        src={product.imageUrls[0]}
                        height={0}
                        width={0}
                        sizes="100vw"
                        className="h-full max-h-[100%] w-full max-w-[100%] object-contain"
                        alt={product.name}
                    />
                    {product.discountPercentage > 0 && (
                        <DiscountBadge>
                            {product.discountPercentage}
                        </DiscountBadge>
                    )}
                </div>

                <div>
                    <p className="w-full text-sn items-center text-ellipsis whitespace-nowrap overflow-hidden">{product.name}</p>
                    <div className="flex items-center justify-center gap-2  whitespace-nowrap overflow-hidden">
                        {product.discountPercentage > 0 ? (
                            <>
                                <p className="truncate font-semibold">
                                    R$ {product.totalPrice.toFixed(2)}
                                </p>

                                <p className="truncate text-xs line-through opacity-75">
                                    R$ {Number(product.basePrice).toFixed(2)}
                                </p>
                            </>
                        ) : (
                            <p className="truncate text-sm font-semibold">
                                R$ {product.basePrice.toFixed(2)}
                            </p>
                        )}

                    </div>
                </div>
            </div>
        </Link>
    );
}

