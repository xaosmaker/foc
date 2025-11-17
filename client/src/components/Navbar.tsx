"use client";
import { House } from "lucide-react";
import Navigationbar, { LinkItemType } from "./ui/navigation-bar";
import { ModeToggle } from "./mode-toggle";

const centerLinks: LinkItemType[] = [
  { name: "Home", link: "/", icon: House },
  { name: "About", link: "/about", icon: undefined },
  { name: "Υπηρεσίες", link: "/services", icon: undefined },
  { name: "Contact", link: "#", icon: undefined },
  { name: "κάλυψη δικτύου", link: "/network-coverage", icon: undefined },
];
const rightLinks = [ModeToggle];
export default function Navbar() {
  return <Navigationbar centerLinks={centerLinks} rightLinks={rightLinks} />;
}
