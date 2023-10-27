import { prismaClient } from "@/src/lib/prisma";
import { ProductImages } from "../components/productImages";

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
        <div>
            <ProductImages key={product.id} imageUrls={product.imageUrls} name={product.name} />
        </div>

    );
}

export default ProdcutDetailsPage;