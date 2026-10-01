import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MaskLines, FadeUp } from "./Reveal";

const QA = [
  { q: "Apakah pelanggan perlu menginstal aplikasi?", a: "Tidak. Cukup tempelkan smartphone yang mendukung NFC ke device, atau scan QR dengan kamera. Halaman Google Review bisnis Anda langsung terbuka di browser." },
  { q: "Bagaimana jika smartphone pelanggan tidak mendukung NFC?", a: "Setiap device Reviewcepat juga dilengkapi QR code. Pelanggan cukup membuka kamera dan scan." },
  { q: "Apakah tap otomatis mengirim review?", a: "Tidak. Tap hanya membuka halaman review. Pelanggan tetap menulis dan mengirim review mereka sendiri secara sukarela." },
  { q: "Apakah link bisa diarahkan ke profil Google bisnis saya?", a: "Ya. Kami mengatur device agar terhubung langsung ke halaman Google Review bisnis Anda sebelum dikirim." },
  { q: "Bagaimana cara memesan?", a: "Klik tombol Pesan Sekarang untuk terhubung dengan tim kami via WhatsApp. Info harga, pengiriman, dan pembayaran akan dijelaskan di sana." },
];

export const FAQ = () => (
  <section id="faq" data-testid="faq-section" className="border-t border-[var(--hairline)]/60 bg-white py-[110px]">
    <div className="container-rc grid gap-12 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <p className="kicker mb-5">FAQ</p>
        <MaskLines className="feature-heading" lines={["Pertanyaan yang", "sering ditanyakan."]} />
      </div>
      <FadeUp className="lg:col-span-7">
        <Accordion type="single" collapsible className="w-full">
          {QA.map((x, i) => (
            <AccordionItem key={x.q} value={`q${i}`} className="border-[var(--hairline)]/70">
              <AccordionTrigger data-testid={`faq-trigger-${i}`} className="py-6 text-left text-[17px] font-medium hover:no-underline md:text-[19px]">
                {x.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-[15px] leading-[1.55] text-[var(--slate)] md:text-[17px]">{x.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </FadeUp>
    </div>
  </section>
);
