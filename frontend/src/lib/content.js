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

export const HERO_MOTION = {
  label: "Cara kerja · 4 detik",
  business: "Kopi Senja",
  businessSub: "Beri rating & ulasan",
  submit: "Kirim ulasan",
  sent: "Terkirim",
  tapChip: "Tap NFC",
  panelTitle: "Profil Bisnis Google",
  reviewsLabel: "ulasan",
  salesLabel: "Penjualan",
  salesDelta: "+38%",
  customersLabel: "Pelanggan baru",
  customersDelta: "+24 minggu ini",
  captions: [
    "Pelanggan tap HP ke device Reviewcepat",
    "Google Review langsung terbuka, bintang terisi",
    "Jumlah ulasan & rating bisnis naik",
    "Lebih dipercaya, penjualan ikut naik",
  ],
};

export const PARTNER_MODELS = [
  {
    key: "reseller",
    name: "Reseller",
    tag: "Jual Cepat, Margin Tebal",
    fit: "Cocok untuk kamu yang ingin mulai jualan hari ini juga.",
    points: [
      "Akses langsung ke supplier device Reviewcepat",
      "Harga modal hanya Rp18.000/pcs",
      "Tanpa minimum order: beli sesuai kebutuhan, modal bisa mulai kecil",
      "Dibantu promosi: kamu tidak berjuang sendiri",
    ],
    highlight: { label: "Harga jual", value: "Rp50.000 – Rp70.000/pcs", sub: "Potensi untung Rp32.000 – Rp52.000 per pcs" },
    msg: "Halo Reviewcepat, saya tertarik menjadi Reseller.",
  },
  {
    key: "white-label",
    name: "White Label",
    tag: "Bangun Brand Sendiri",
    fit: "Cocok untuk kamu yang ingin punya produk dengan nama dan identitas sendiri.",
    points: [
      "Akses maklon NFC Review Card custom hanya Rp20.000/pcs",
      "Minimal order 10 pcs, ringan untuk memulai",
      "Desain bebas sesuai brand-mu: logo, warna, dan tampilan kartu mengikuti identitas bisnismu",
      "Sistem siap pakai: tidak perlu membangun dari nol",
    ],
    highlight: { label: "Harga jual", value: "Kamu yang tentukan", sub: "Sepenuhnya tanpa batasan" },
    msg: "Halo Reviewcepat, saya tertarik dengan program White Label.",
  },
  {
    key: "affiliate",
    name: "Affiliator",
    tag: "Cuan Tanpa Stok, Tanpa Modal",
    fit: "Cocok untuk kamu yang ingin penghasilan tambahan tanpa repot mengurus produk.",
    points: [
      "Dapatkan kode referal pribadi",
      "Komisi hingga 20% untuk setiap transaksi dari referalmu",
      "Tidak perlu stok, tidak perlu kirim barang, cukup bagikan",
    ],
    highlight: { label: "Komisi", value: "Hingga 20%", sub: "Per transaksi dari referalmu" },
    msg: "Halo Reviewcepat, saya tertarik menjadi Affiliator.",
  },
];

export const PARTNER_HELP = {
  text: "Belum yakin mana yang cocok?",
  sub: "Hubungi kami dan kami bantu pilihkan skema sesuai tujuan dan modalmu.",
  cta: "Hubungi Kami",
  msg: "Halo Reviewcepat, saya ingin dibantu memilih skema kemitraan yang cocok untuk saya.",
};

export const CATEGORIES = ["Restaurant", "Coffee Shop", "Salon", "Barbershop", "Clinic", "Hotel", "Workshop", "Retail", "UMKM"];
