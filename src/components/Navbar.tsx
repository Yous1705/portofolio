"use client";

import Link from "next/link";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useActiveSection } from "@/lib/use-active-section";
import { navLinkClass } from "@/components/nav-link";

const nav = [
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navbar() {
  const active = useActiveSection(nav.map((n) => n.id));
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#121212]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          Yous Sibarani
          <span className="ml-2 text-sm font-normal text-white/60">
            • Software Engineer
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((i) => (
            <button
              key={i.id}
              onClick={() => scrollToId(i.id)}
              className={navLinkClass(active === i.id)}
              aria-current={active === i.id ? "page" : undefined}
            >
              {i.label}
            </button>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <Button
            asChild
            className="hidden bg-[#2979FF] hover:bg-[#1E88E5] md:inline-flex"
          >
            <a href="#contact">Contact</a>
          </Button>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  className="border-white/15 bg-transparent text-white/80 hover:bg-white/5"
                  aria-label="Open menu"
                >
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="border-white/10 bg-[#121212] text-white"
              >
                <SheetHeader>
                  <SheetTitle className="text-left text-white">Menu</SheetTitle>
                </SheetHeader>

                <div className="mt-6 flex flex-col gap-2">
                  {nav.map((i) => (
                    <button
                      key={i.id}
                      onClick={() => {
                        scrollToId(i.id);
                        setOpen(false);
                      }}
                      className={[
                        "rounded-lg px-3 py-2 text-left text-sm transition-colors",
                        active === i.id
                          ? "bg-white/10 text-white"
                          : "text-white/80 hover:bg-white/5 hover:text-white",
                      ].join(" ")}
                    >
                      {i.label}
                    </button>
                  ))}

                  <div className="mt-4">
                    <Button
                      onClick={() => {
                        scrollToId("contact");
                        setOpen(false);
                      }}
                      className="w-full bg-[#2979FF] hover:bg-[#1E88E5]"
                    >
                      Contact
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
