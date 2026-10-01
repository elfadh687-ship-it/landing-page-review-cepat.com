import { Link } from "react-router-dom";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import { IMG, CONTACT, waLink } from "@/lib/content";

export const Footer = () => (
  <footer className="bg-[var(--mist)] pb-10 pt-20" data-testid="site-footer">
    <div className="container-rc">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <img src={IMG.logo} alt="Reviewcepat.com" className="h-9 w-auto" />
          <p className="mt-5 max-w-xs text-[14px] leading-[1.5] text-[var(--slate)]">Cara tercepat mengubah kepuasan pelanggan menjadi Google Review.</p>
        </div>
        <div className="md:col-span-3">
          <p className="text-[12px] font-semibold text-[var(--ink)]">Jelajahi</p>
          <ul className="mt-4 space-y-3 text-[14px] text-[var(--slate)]">
            <li><Link to="/" data-testid="footer-link-produk" className="hover:text-[var(--rc-blue)]">Produk</Link></li>
            <li><Link to="/business" data-testid="footer-link-business" className="hover:text-[var(--rc-blue)]">Business & Partner</Link></li>
            <li><Link to="/#faq" data-testid="footer-link-faq" className="hover:text-[var(--rc-blue)]">FAQ</Link></li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="text-[12px] font-semibold text-[var(--ink)]">Kontak</p>
          <ul className="mt-4 space-y-3 text-[14px] text-[var(--slate)]">
            <li><a href={waLink()} target="_blank" rel="noopener noreferrer" data-testid="footer-wa" className="inline-flex items-center gap-2 hover:text-[var(--rc-blue)]"><MessageCircle className="h-4 w-4" />{CONTACT.waDisplay}</a></li>
            <li><a href={`mailto:${CONTACT.email}`} data-testid="footer-email" className="inline-flex items-center gap-2 hover:text-[var(--rc-blue)]"><Mail className="h-4 w-4" />{CONTACT.email}</a></li>
            <li className="inline-flex items-center gap-2" data-testid="footer-address"><MapPin className="h-4 w-4" />{CONTACT.address}</li>
          </ul>
        </div>
      </div>
      <div className="mt-16 flex flex-col justify-between gap-3 border-t border-[var(--hairline)] pt-6 text-[12px] text-[var(--steel)] md:flex-row">
        <p>© {new Date().getFullYear()} Reviewcepat.com. Hak cipta dilindungi.</p>
        <p>Google dan Google Review adalah merek dagang Google LLC.</p>
      </div>
    </div>
  </footer>
);
