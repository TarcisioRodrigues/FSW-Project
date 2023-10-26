

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
  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses"
      }
    }
  })

  return <div className="flex flex-col gap-8 py-8">
    <PromoBanner src="/banneroff.png" alt="Ate 55% de desconto em mouses" />
    <div className="px-5">
      <Categories />
    </div>
    <div >
      <SectionTitle>Ofertas</SectionTitle>
      <ProductList products={deals} />
    </div>
    <PromoBanner src="/bannermouses.png" alt="até 50% de desconto em mouses" />
    <div >
      <SectionTitle>Teclados</SectionTitle>
      <ProductList products={keyboards} />
    </div>
    <PromoBanner src="/bannerfones.png" alt="até 50% de desconto em mouses" />
    <div >
      <SectionTitle>Mouses</SectionTitle>
      <ProductList products={mouses} />
    </div>
  </div>
}