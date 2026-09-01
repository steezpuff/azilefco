import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { accentPalettes, applyAccentPalette } from "../lib/accentPalettes";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const mobileLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [paletteIndex, setPaletteIndex] = useState(0);

  const cycleAccent = () => {
    const next = (paletteIndex + 1) % accentPalettes.length;
    setPaletteIndex(next);
    applyAccentPalette(accentPalettes[next]);
  };

  const Logo = (
    <span className="display inline-flex items-baseline text-[26px]">
      <Link aria-label="azilefco, home" className="text-fg" to="/" onClick={() => setMenuOpen(false)}>
        azilefco
      </Link>
      <button
        type="button"
        aria-label="Change the accent color"
        title="psst, click me"
        className="-mx-2 -my-2 cursor-pointer px-2 py-2 text-accent transition-transform duration-200 hover:scale-150"
        onClick={cycleAccent}
      >
        .
      </button>
    </span>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-[60]">
      <div className="mx-auto flex h-[76px] max-w-container items-center justify-between px-5 sm:px-7">
        {Logo}

        <nav className="hidden items-center gap-2.5 md:flex" aria-label="Primary">
          <div className="flex items-center gap-1 rounded-full border border-line-strong bg-bg/72 p-1.5 shadow-xl shadow-black/30 backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="rounded-full px-4 py-2 text-[13.5px] text-muted transition-colors duration-200 hover:bg-fg/5 hover:text-fg"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2.5 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="glass-dark relative z-[70] flex size-11 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-full"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span
              className="h-px w-5 bg-on-dark transition-transform duration-300"
              style={menuOpen ? { transform: "translateY(3.5px) rotate(45deg)" } : undefined}
            />
            <span
              className="h-px w-5 bg-on-dark transition-transform duration-300"
              style={menuOpen ? { transform: "translateY(-3.5px) rotate(-45deg)" } : undefined}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            aria-label="Mobile"
            className="fixed inset-0 z-[60] flex h-dvh flex-col justify-between bg-bg-deep/97 px-6 pt-28 pb-10 backdrop-blur-md md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-2">
              {mobileLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  <Link
                    className="display block py-2 text-5xl text-fg"
                    to={link.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <a href="mailto:azilefco@gmail.com" className="link text-[15px]">
                azilefco@gmail.com
              </a>
              <p className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
                <span className="mr-2 inline-block size-1.5 animate-pulse-dot rounded-full bg-accent align-middle" />
                Taking on new chaos &middot; Philippines &middot; GMT+8
              </p>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
