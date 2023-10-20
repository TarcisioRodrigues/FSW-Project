import { MenuIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";

export const Header  = () => {
    return ( 
    <Card className="flex justify-between p-[1.0875rem] items-center">
        <Button className="icon" variant="outline">
            <MenuIcon/>
        </Button>
        <h1 className="text-lg font-semibold"><span className="text-primary">FSW </span>Store</h1>
        <Button className="icon" variant="outline">
            <ShoppingCartIcon/>
        </Button>
        
    </Card> );
}
 
