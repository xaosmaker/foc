"use client";
import { House } from "lucide-react";
import Navigationbar, { LinkItemType } from "./ui/navigation-bar";
import { ModeToggle } from "./mode-toggle";

const centerLinks: LinkItemType[] = [
  { name: "Home", link: "/", icon: House },
  { name: "Εταιρεία", link: "/about", icon: undefined },
  { name: "Υπηρεσίες", link: "/services", icon: undefined },
  { name: "Επικοινωνήστε", link: "/contact", icon: undefined },
  { name: "κάλυψη δικτύου", link: "/network-coverage", icon: undefined },
];
const rightLinks = [ModeToggle];
export default function Navbar() {
  return <Navigationbar centerLinks={centerLinks} rightLinks={rightLinks} />;
}
