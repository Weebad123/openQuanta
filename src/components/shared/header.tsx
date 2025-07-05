import { AlignRight, ChevronRight, Menu } from "lucide-react";
import logo from "@/assets/brand/logoWordBlack.svg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ModeToggle from "./mode-toggle";

export default function Header() {
  const navLinks = [
    { href: "/discover", label: "Discover Research" },
    { href: "/bounties", label: "Funding & Bounties" },
    { href: "/docs", label: "Document" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="fixed top-0 z-10 w-full bg-background">
      <div className="flex items-center justify-between gap-5 w-full max-w-[1200px] mx-auto">
        <Link href="/" id="logo" className="w-full max-w-[200px]">
          <Image src={logo} alt="OpenQuanta" className="w-full dark:invert" />
        </Link>

        <div className="flex flex-row-reverse items-center justify-between w-full gap-5 p-5">
          <div className="hidden md:flex items-center gap-5">
            <ModeToggle />
            <Button variant="link">
              Request a Demo <ChevronRight />
            </Button>
            <Button variant="secondary">Join Waitlist</Button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-primary transition-colors text-[12px]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Dropdown Menu */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <AlignRight />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {navLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link
                      href={link.href}
                      className="w-full cursor-pointer text-lg flex justify-end"
                    >
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
