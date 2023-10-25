import { ProductItem } from "@/src/components/ui/product-item";
import { Product } from "@prisma/client";

interface ProductListProps {
    products: Product[]
}
export const ProductList = ({ products }: ProductListProps) => {
    return (
        <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
            {products.map(product => <ProductItem key={product.id} product={product} />)}

        </div>
    );
}

