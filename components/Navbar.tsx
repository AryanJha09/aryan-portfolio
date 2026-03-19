"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { name: "Home", id: "home" },
  { name: "Research", id: "research" },
  { name: "Projects", id: "projects" },
  { name: "Toolkit", id: "toolkit" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  // 🔥 Navigation (handles both routing + scrolling)
  const handleNavigation = (id: string) => {
    if (pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }

    const section = document.getElementById(id);
    if (!section) return;

    const yOffset = -80;
    const y =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  // 🔥 Scroll Spy (ONLY on homepage)
  useEffect(() => {
    if (pathname !== "/") return;

    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 120;
      let current = "home";

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (!section) continue;

        const offsetTop = section.offsetTop;
        const offsetHeight = section.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          current = item.id;
        }
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScrollSpy);
    handleScrollSpy();

    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [pathname]);

  // Navbar background on scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled
          ? "bg-white/70 backdrop-blur-md border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div
          className="text-sm font-medium tracking-tight cursor-pointer"
          onClick={() => handleNavigation("home")}
        >
          Aryan Jha
        </div>

        {/* Nav Items */}
        <div className="flex gap-8 text-sm">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="relative cursor-pointer"
              onClick={() => handleNavigation(item.id)}
            >
              <span
                className={`transition ${
                  active === item.id
                    ? "text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {item.name}
              </span>

              {/* Underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-black transition-all duration-300 ${
                  active === item.id ? "w-full" : "w-0"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}