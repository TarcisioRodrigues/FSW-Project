import { Product } from "@prisma/client";
import Image from "next/image";

interface ItemProductProps {
    product: Product
    className?: string;
}
export const ProductItem = ({ product }: ItemProductProps) => {
    return (

        <div className="flex flex-col gap-4 max-w-[156px]">
            <div className="bg-accent rounded-lg h-[170px] w-[150px]  items-center justify-center">
                <Image
                    src={product.imageUrls[0]}
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="h-full max-h-[100%] w-full max-w-[100%] object-contain"
                    alt={product.name}
                />
            </div>
            <div>
                <p className="w-full text-sn items-center text-ellipsis whitespace-nowrap overflow-hidden">{product.name}</p>
            </div>
        </div>
    );
}

