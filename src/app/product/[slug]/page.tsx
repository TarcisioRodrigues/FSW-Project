import { prismaClient } from "@/src/lib/prisma";
import { ProductImages } from "../components/productImages";
import { ProductInfo } from "../components/productInfo";
import { computedProductsTotalPrice } from "@/src/utils/product";
import { SectionTitle } from "@/src/components/ui/section";
import { ProductList } from "@/src/components/ui/product-list";

interface ProdcutDetailsPageProps { params: { slug: string } }
const ProdcutDetailsPage = async ({ params: { slug } }: ProdcutDetailsPageProps) => {
    const product = await prismaClient.product.findFirst({
        where: {
            slug: slug
        },
        include: {
            category: {
                include: {
                    products: {
                        where: {
                            slug: {
                                not: slug
                            }
                        }
                    }
                }
            }
        }
    })
    if (!product) {
        return null
    }
    return (
        <div className="flex flex-col gap-8 pb-8">
            <ProductImages key={product.id} imageUrls={product.imageUrls} name={product.name} />
            <ProductInfo product={computedProductsTotalPrice(product)} key={product.id} />
            <SectionTitle>Produtos Recomendados</SectionTitle>
            <ProductList products={product.category.products} />

        </div>


    );
}

export default ProdcutDetailsPage;