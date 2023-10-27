import { ArrowDownIcon } from "lucide-react";
import { Badge, BadgeProps } from "./badge";

export const DiscountBadge = ({ children, ...props }: BadgeProps) => {
    return (
        <Badge className="absolute left-3 top-3 px-2 py-[2px]" {...props}>
            <ArrowDownIcon size={14} /> {children}%
        </Badge >
    );
}

