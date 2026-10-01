# Reviewcepat.com — PRD

## Original problem statement
Buat halaman pendaratan reviewcepat.com merefer pada DESIGN.md yang diupload, jadikan gambar logo sebagai logo, dan gambar device sebagai referensi mockup.

## User choices
- Bahasa Indonesia, CTA utama "Pesan Sekarang" (WhatsApp), 5 section sesuai DESIGN.md, kontak placeholder.

## Architecture
- Frontend-only React (CRA + Tailwind), framer-motion (reveals, 3D tilt, parallax), lenis (smooth scroll). No backend usage.
- Assets in /app/frontend/public/assets (logo.png transparent, device.png, AI-generated product mockups rc_*.jpg from the device reference). favicon.svg = logo mark.
- Content/config in src/lib/content.js (WA number placeholder 6281234567890, email, address).

## Implemented (2026-06)
- Product page `/`: Hero (masked line reveal + 3D tilt device with NFC pulse + glass tags + clip-expand product frame), Agitation (scroll-drawn timeline, "Lupa." blurs away), Problem+Solution (#cara-kerja: before/after, "Satu device. Dua cara akses." bento w/ QR scan line), Social Proof (category bento + slow editorial marquee), Final CTA (TAP → REVIEW → SELESAI), FAQ (#faq), Footer.
- Business page `/business`: Hero, Opportunity flow, Business models (Reseller/White Label/Affiliate), Final CTA.
- Glass floating navbar (hide on scroll down), mobile menu, all CTAs → WhatsApp placeholder.
- Tested: 48/50 checks passed; 2 minor issues fixed (mobile overflow, h1 text spacing).

## Backlog
- P1: Replace placeholder WA/email/address; real pricing/packages section
- P1: Real testimonials/logos when supplied (no fabrication per DESIGN.md)
- P2: Order form saved to DB, OG image tuning, analytics events on CTA
