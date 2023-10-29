import { ComponentProps } from "react";
import { cn } from "@/src/lib/utils";
export const SectionTitle = ({
    children,
    className,
    ...props
}: ComponentProps<"p">) => {
    return (
        <p className={cn("font-bold uppercase lg:text-xl", className)} {...props}>
            {children}
        </p>
    );
};
