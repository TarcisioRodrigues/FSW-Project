import { Badge } from "@/src/components/ui/badge";
import { prismaClient } from "@/src/lib/prisma";
import { ShapesIcon } from "lucide-react";
import { CatalogItem } from "./components/catalogItem";

const Catalog = async () => {
    const categories = await prismaClient.category.findMany({})
    return (

        <div className="flex flex-col gap-8 p-5">
            <Badge className="text-base uppercase w-[30%]
                border-2 border-primary px-3 py-[0.365rem]" variant="outline">
                <ShapesIcon size={22} /> Catálogo
            </Badge>

            <div className="grid grid-cols-2 gap-8">
                {categories.map((category) => (
                    <CatalogItem key={category.id} category={category} />
                ))}
            </div>
        </div>

    );
}

export default Catalog;

