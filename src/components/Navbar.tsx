import Link from "next/link";

const nav = [
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#121212]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href={"/"} className="font-semibold tracking-tight">
          Yous Sibarani
          <span className="ml-2 text sm font-normal text-white/60"></span>•
          Software Engineer
        </Link>

        <nav className="hidden gap-6 text-sm text-white/70 md:flex">
          {nav.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="hover: text-white transition-colors"
            >
              {i.label}
            </a>
          ))}
        </nav>

        <a
          href="/#contact"
          className="rounded-lg bg-[#2979FF] px-3 py-2 text-sm font-medium text-white hover:bg-[#1e88e5] transition-colors"
        >
          conntact
        </a>
      </div>
    </header>
  );
}
