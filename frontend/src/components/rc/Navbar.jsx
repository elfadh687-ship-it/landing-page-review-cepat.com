import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { IMG, EASE, waLink } from "@/lib/content";
import { scrollToId } from "./SmoothScroll";

const LINKS = [
  { label: "Produk", to: "/", id: "nav-produk" },
  { label: "Business", to: "/business", id: "nav-business" },
  { label: "Cara Kerja", to: "/", hash: "cara-kerja", id: "nav-cara-kerja" },
  { label: "FAQ", to: "/", hash: "faq", id: "nav-faq" },
];

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useMotionValueEvent(scrollY, "change", (v) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(v > 24);
    setHidden(v > 500 && v > prev && !open);
  });

  const go = (e, l) => {
    setOpen(false);
    if (!l.hash) return;
    e.preventDefault();
    if (pathname === "/") scrollToId(l.hash);
    else navigate(`/#${l.hash}`);
  };

  return (
    <motion.header
      animate={{ y: hidden ? -110 : 0 }}
      transition={{ duration: 0.45, ease: EASE }}
      className="fixed inset-x-0 top-3 z-50 px-3"
      data-testid="site-navbar"
    >
      <nav className={`mx-auto flex h-14 max-w-[1184px] items-center justify-between rounded-[20px] px-4 transition-[background-color,box-shadow] duration-300 md:px-5 ${scrolled || open ? "glass hairline" : "bg-transparent"}`}>
        <Link to="/" data-testid="nav-logo" aria-label="Reviewcepat beranda" className="shrink-0">
          <img src={IMG.logo} alt="Reviewcepat.com" className="h-7 w-auto md:h-8" />
        </Link>
        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.id}>
              <Link to={l.hash ? `/#${l.hash}` : l.to} onClick={(e) => go(e, l)} data-testid={l.id} className="text-[13px] text-[var(--ink)]/80 transition-colors duration-200 hover:text-[var(--ink)]">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a href={waLink()} target="_blank" rel="noopener noreferrer" data-testid="nav-cta-pesan" className="rounded-full bg-[var(--action-blue)] px-4 py-2 text-[13px] font-medium text-white transition-[background-color,transform] duration-200 hover:bg-[#0062c4] active:scale-95">
            Pesan Sekarang
          </a>
          <button type="button" aria-label="Menu" data-testid="nav-mobile-toggle" onClick={() => setOpen((o) => !o)} className="grid h-9 w-9 place-items-center rounded-full md:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="glass hairline mx-auto mt-2 max-w-[1184px] rounded-[20px] p-3 md:hidden"
            data-testid="nav-mobile-menu"
          >
            {LINKS.map((l) => (
              <li key={l.id}>
                <Link to={l.hash ? `/#${l.hash}` : l.to} onClick={(e) => go(e, l)} data-testid={`${l.id}-mobile`} className="block rounded-xl px-3 py-3 text-[17px] font-medium">
                  {l.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
