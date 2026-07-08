import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, Mail, Linkedin, Youtube, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Solutions", hasDropdown: true },
  { to: "/process", label: "Process" },
  { to: "/our-work", label: "Our Work" },
  { to: "/about", label: "About" },
  { to: "/resources", label: "Resources" },
  { to: "/redesign-concepts", label: "Redesign Concepts" },
  { to: "/contact", label: "Contact" },
];


export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="surface-navy hidden md:block">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6 text-xs text-white/90">
          <div className="flex items-center gap-6">
            <a href="tel:7327788816" className="flex items-center gap-2 hover:text-white">
              <Phone className="h-3.5 w-3.5" /> 732-778-8816
            </a>
            <a href="mailto:info@enaibleworks.com" className="flex items-center gap-2 hover:text-white">
              <Mail className="h-3.5 w-3.5" /> info@enaibleworks.com
            </a>
          </div>
          <p className="font-medium">Focus on Your Business. We'll Help Make Technology Work for It.</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="LinkedIn" className="hover:text-white">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-white">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-border/60 bg-background/90 backdrop-blur-xl">
        <div className="enaible-nav-main mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-1 md:py-2">
          <Link to="/" className="flex shrink-0 items-center transition-opacity hover:opacity-80">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((l, i) => (
              <Link
                key={`${l.label}-${i}`}
                to={l.to}
                className="flex items-center gap-1 whitespace-nowrap text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
                activeProps={{ className: "text-accent border-b-2 border-accent pb-1" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
                {l.hasDropdown && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground transition-all hover:shadow-glow"
            >
              Get Started
            </Link>

            {/* Mobile hamburger */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md lg:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-sm">
                <div className="mt-8 flex flex-col gap-6">
                  {links.map((l, i) => (
                    <SheetClose asChild key={`m-${l.label}-${i}`}>
                      <Link
                        to={l.to}
                        className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
                        activeProps={{ className: "text-accent font-semibold" }}
                      >
                        {l.label}
                      </Link>
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <Link
                      to="/contact"
                      className="mt-4 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground"
                    >
                      Get Started
                    </Link>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
