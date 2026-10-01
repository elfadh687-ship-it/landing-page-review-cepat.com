export const EASE = [0.22, 1, 0.36, 1];

export const CONTACT = {
  waNumber: "6281234567890",
  waDisplay: "+62 812-3456-7890",
  email: "halo@reviewcepat.com",
  address: "Jakarta, Indonesia",
};

export const waLink = (msg = "Halo Reviewcepat, saya ingin pesan device Reviewcepat.") =>
  `https://wa.me/${CONTACT.waNumber}?text=${encodeURIComponent(msg)}`;

export const PARTNER_MSG = "Halo Reviewcepat, saya tertarik menjadi partner (Reseller / White Label / Affiliate).";

export const IMG = {
  logo: "/assets/logo.png",
  logoWhite: "/assets/logo_white.png",
  device: "/assets/device.png",
  hero: "/assets/rc_hero.jpg",
  tap: "/assets/rc_tap.jpg",
  restaurant: "/assets/rc_restaurant.jpg",
  coffee: "/assets/rc_coffee.jpg",
  salon: "/assets/rc_salon.jpg",
  macro: "/assets/rc_macro.jpg",
  multi: "/assets/rc_multi.jpg",
};

export const CATEGORIES = ["Restaurant", "Coffee Shop", "Salon", "Barbershop", "Clinic", "Hotel", "Workshop", "Retail", "UMKM"];
