"use client"
import { HomeIcon, ListOrderedIcon, LogInIcon, MenuIcon, PercentIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { signIn } from "next-auth/react";
import Link from "next/link";

export const Header = () => {
    const handleLogin = async () => {
        await signIn()
    }
    return (
        <Card className="flex justify-between p-[1.0875rem] items-center">
            <Sheet>
                <SheetTrigger asChild>
                    <Button className="icon" variant="outline">
                        <MenuIcon />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader className="text-left text-lg">Menu</SheetHeader>
                    <div className="mt-2 flex flex-col gap-4">
                        <Button variant="outline" className="w-full justify-start gap-2" onClick={handleLogin}><LogInIcon size={16} />Fazer Login</Button>
                        <Link href="/"> <Button variant="outline" className="w-full justify-start gap-2"><HomeIcon size={16} /> Home</Button></Link>

                        <Link href="/"> <Button variant="outline" className="w-full justify-start gap-2"><PercentIcon size={16} /> Ofertas</Button></Link>
                        <Link href="/catalog"> <Button variant="outline" className="w-full justify-start gap-2"><ListOrderedIcon size={16} /> Catálogo</Button></Link>
                    </div>
                </SheetContent>
            </Sheet>
            <h1 className="text-lg font-semibold"><span className="text-primary">FSW </span>Store</h1>
            <Button className="icon" variant="outline">
                <ShoppingCartIcon />
            </Button>
        </Card>);
}

