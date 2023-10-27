import { prismaClient } from "@/src/lib/prisma";
import { ProductImages } from "../components/productImages";
import { ProductInfo } from "../components/productInfo";
import { computedProductsTotalPrice } from "@/src/utils/product";

interface ProdcutDetailsPageProps { params: { slug: string } }
const ProdcutDetailsPage = async ({ params: { slug } }: ProdcutDetailsPageProps) => {
    const product = await prismaClient.product.findFirst({
        where: {
            slug: slug
        }
    })

    if (!product) {
        return null
    }
    return (
        <div className="flex flex-col gap-8 pb-8">
            <ProductImages key={product.id} imageUrls={product.imageUrls} name={product.name} />
            <ProductInfo product={computedProductsTotalPrice(product)} key={product.id} />
        </div>


    );
}

export default ProdcutDetailsPage;