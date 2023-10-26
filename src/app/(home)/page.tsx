

import Image from "next/image"
import { Categories } from "./components/categories"
import { prismaClient } from "@/src/lib/prisma"
import { ProductList } from "./components/product-list"
import { SectionTitle } from "@/src/components/ui/section"
import { PromoBanner } from "./components/promobanner"

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: { gt: 0 }
    }
  })
  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards"
      }
    }
  })
  return <div className="">
    <PromoBanner src="/banneroff.png" alt="Ate 55% de desconto em mouses" />
    <div className="mt-8 px-5">
      <Categories />
    </div>
    <div className="mt-8">
      <SectionTitle>Ofertas</SectionTitle>
      <ProductList products={deals} />
    </div>
    <PromoBanner src="/bannermouses.png" alt="até 50% de desconto em mouses" />
    <div className="mt-8">
      <SectionTitle>Teclados</SectionTitle>
      <ProductList products={keyboards} />
    </div>
  </div>
}