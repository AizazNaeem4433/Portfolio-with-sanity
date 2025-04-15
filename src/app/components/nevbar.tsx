"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileMenu } from "../components/Mobile-menu";

export const navigationItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="max-w-7xl mx-auto px-5 md:px-8 py-6 grid grid-cols-12">
      <div className="col-span-6 flex md:col-span-3">
        <Link href="/">
        <h1 className="text-3xl font-semibold">
  Aizaz <span className="bg-gradient-to-r from-black to-royalblue bg-clip-text text-transparent">Naeem</span>
</h1>

        </Link>
      </div>

      <div className="hidden sm:flex justify-center items-center col-span-6 font-semibold">
        <NavigationMenu>
          <NavigationMenuList>
            {navigationItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    active={pathname === item.href}
                    className={navigationMenuTriggerStyle()}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex items-center justify-end md:col-span-3 col-span-6">
      <Button className="hidden sm:flex bg-gradient-to-r from-black to-royalblue text-white hover:from-royalblue hover:to-black px-4 py-2 rounded-lg" asChild>
  <a href="mailto:m.aizaz1st@gmail.com">Contact Me</a>
</Button>


        <div className="sm:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
