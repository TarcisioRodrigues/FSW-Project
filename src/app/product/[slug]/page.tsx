import { prismaClient } from "@/src/lib/prisma";

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
    return (<h1>Product</h1>);
}

export default ProdcutDetailsPage;