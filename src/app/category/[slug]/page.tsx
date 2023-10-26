import { Badge } from "@/src/components/ui/badge";
import { ProductItem } from "@/src/components/ui/product-item";
import { prismaClient } from "@/src/lib/prisma";
import { ShapesIcon } from "lucide-react";
import { CatalogItem } from "../../catalog/components/catalogItem";
import { computedProductsTotalPrice } from "@/src/utils/product";
import { categoryIcon } from "@/src/constants/categoryIcons";

const CategorySlug = async ({ params }: any) => {
    const category = await prismaClient.category.findFirst({
        where: {
            slug: params.slug
        },
        include: {
            products: true
        }
    })

    if (!category) {
        return null
    }
    return (

        <div className="flex flex-col gap-8 p-5">
            <Badge className="text-base uppercase w-[20%]
                    border-2 border-primary px-3 py-[0.365rem]" variant="outline">
                {categoryIcon[params.slug as keyof typeof categoryIcon]}
                {category.name}
            </Badge>

            <div className="grid grid-cols-2 gap-8">
                {category.products.map((product) => (
                    <ProductItem product={computedProductsTotalPrice(product)} key={product.id} />
                ))}
            </div>
        </div>

    );

}

export default CategorySlug;