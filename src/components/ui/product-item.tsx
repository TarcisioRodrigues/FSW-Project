import { ProductWithTotalPrice } from "@/src/utils/product";
import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDownIcon } from "lucide-react";

interface ItemProductProps {
    product: ProductWithTotalPrice
    className?: string;
}
export const ProductItem = ({ product }: ItemProductProps) => {
    return (

        <div className="flex flex-col gap-4 max-w-[156px]">
            <div className=" relative bg-accent rounded-lg h-[170px] w-[150px]  items-center justify-center">
                <Image
                    src={product.imageUrls[0]}
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="h-full max-h-[100%] w-full max-w-[100%] object-contain"
                    alt={product.name}
                />
                {product.discountPercentage > 0 && (
                    <Badge className="absolute left-3 top-3 px-2 py-[2px]">
                        <ArrowDownIcon size={14} /> {product.discountPercentage}%
                    </Badge>
                )}
            </div>

            <div>
                <p className="w-full text-sn items-center text-ellipsis whitespace-nowrap overflow-hidden">{product.name}</p>
                <div className="flex items-center justify-center gap-2">
                    {product.discountPercentage > 0 ? (
                        <><p className="font-semibold ">R${product.totalPrice.toFixed(2)}</p>
                            <p className="opacity-75 line-through">R${Number(product.basePrice).toFixed(2)}</p></>
                    ) : (
                        <p className="font-semibold text-xs">R${product.totalPrice.toFixed(2)}</p>
                    )}

                </div>
            </div>
        </div>
    );
}

