import { Link } from "react-router-dom";
import { ExternalArrowIcon } from "./ArrowIcon";
import { useLocalTime } from "../hooks/useLocalTime";

const pageLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const elsewhereLinks = [{ label: "Instagram", href: "https://www.instagram.com/steezpuff/" }];

export function Footer() {
  const time = useLocalTime();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-line bg-bg-deep">
      <div className="relative mx-auto max-w-container px-5 pt-16 pb-10 sm:px-7">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <span className="display inline-flex items-baseline text-[26px]">
              <Link aria-label="azilefco, home" className="text-fg" to="/">
                azilefco
              </Link>
              <span className="text-accent">.</span>
            </span>
            <p className="mt-4 max-w-[26ch] text-[13.5px] leading-relaxed text-muted">
              Design, code, AI. One suspiciously caffeinated person.
            </p>
          </div>

          <div>
            <p className="eyebrow">Pages</p>
            <ul className="mt-3 space-y-1 text-[14px]">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link className="inline-block py-1.5 text-muted transition-colors hover:text-fg" to={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Elsewhere</p>
            <ul className="mt-3 space-y-1 text-[14px]">
              {elsewhereLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 py-1.5 text-muted transition-colors hover:text-fg"
                  >
                    {link.label}
                    <ExternalArrowIcon className="size-3 opacity-60" />
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:azilefco@gmail.com"
                  className="inline-flex items-center gap-1.5 py-1.5 text-muted transition-colors hover:text-fg"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Local time</p>
            <p className="mt-4 font-mono text-[14px] text-muted">
              <span className="tabular-nums">{time}</span> &middot; GMT+8
            </p>
            <p className="mt-2 font-mono text-[11px] tracking-[0.14em] text-faint uppercase">Philippines</p>
          </div>

          <div>
            <p className="eyebrow">Status</p>
            <p className="glass mt-4 inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-[13px] text-muted">
              <span className="inline-block size-2 animate-pulse-dot rounded-full bg-accent" />
              Taking on new chaos
            </p>
            <p className="mt-2.5 font-mono text-[11px] tracking-[0.14em] text-faint uppercase">
              Replies within 24h, promise
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-7 text-[12.5px] text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} azilefco. All rights reserved.</p>
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase">Philippines &middot; GMT+8</p>
        </div>
      </div>
    </footer>
  );
}
