import { Badge } from "@/src/components/ui/badge";
import { categoryIcon } from "@/src/constants/categoryIcons";
import { Category } from "@prisma/client";
import Link from "next/link";


interface CategoryItemProps {
    category: Category
}

export const CategoryItem = ({ category }: CategoryItemProps) => {

    return (
        <Link href={`/category/${category.slug}`}>
            <Badge variant="outline" className="py-3 flex justify-center items-center gap-2 rounded-lg" >
                {categoryIcon[category.slug as keyof typeof categoryIcon]}
                <span className="font-bold text-xs">{category?.name}</span>
            </Badge>
        </Link>
    );
}

