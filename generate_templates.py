#!/usr/bin/env python3
"""Generate editorial template replacements for all component files."""

# Tour pages
tour_pages = [
    {
        "name": "Page4Tour",
        "image": "/images/bursa-uludag.jpg",
        "alt": "Bursa – Uludağ Private Tour – Full Day",
        "label": "TOUR",
        "title": "Bursa – Uludağ Private Tour | Full Day dari Istanbul",
        "description": "Escape dari keramaian Istanbul sehari penuh ke Bursa dan Uludağ – pegunungan yang indah, udara segar, sejarah Ottoman yang kaya, dan panorama yang memukau. Perjalanan eksklusif, rute fleksibel, nyaman untuk keluarga atau grup. Naik & turun sesuai keinginan – tidak ada tour group yang ketat.",
        "details": [
            "Mercedes Vito (1–6 orang): USD 310 (transport only), USD 395 (transport + guide)",
            "Mercedes Sprinter (7–15 orang): USD 370 (transport only), USD 545 (transport + guide lokal)",
            "Durasi ±10–12 jam (Full Day)",
            "Fleksibel sesuai kondisi lalu lintas & cuaca",
        ]
    },
    {
        "name": "Page5Tour",
        "image": "/images/antalya-city.jpg",
        "alt": "Antalya Private City Tour – Full Day",
        "label": "TOUR",
        "title": "Antalya Private City Tour | Full Day | Explore Kota Lama & Marina",
        "description": "Jelajahi Antalya dengan pace sendiri – kota tua yang penuh charm, pelabuhan historic, dan landmark tersembunyi. Bukan rushing tour dengan 30 orang tourist, tapi pengalaman personal dengan private car dan driver. Perfect untuk couple, keluarga, atau teman-teman yang mau santai-santai tapi tetap explore.",
        "details": [
            "Mercedes Vito (1–6 orang): USD 210 (transport only), USD 375 (transport + guide)",
            "Durasi ±8 jam",
            "Jam mulai fleksibel sesuai keinginan",
            "Driver profesional & friendly",
        ]
    },
]

# Dokumen pages
dokumen_pages = [
    {
        "name": "Page1Dokumen",
        "image": "/images/visa-turis.jpg",
        "alt": "Visa Turis",
        "label": "DOKUMEN",
        "title": "Visa Turis 3 Bulan – Mudah & Praktis",
        "description": "Proses pengajuan visa turis ke Turki untuk 3 bulan dengan dokumen lengkap dan pendampingan penuh. Cocok untuk wisata, kunjungan keluarga, atau short-term stay.",
        "details": [
            "Pendampingan penuh dalam persiapan dokumen",
            "Dokumen sesuai persyaratan kedutaan Turki",
            "Proses cepat ± 3–4 minggu kerja",
            "Bisa diwakilkan dengan biaya tambahan",
        ]
    },
]

template = ''''use client';
import Link from 'next/link';
export default function {function_name}() {{
  return (
    <main className="w-full bg-white">
      <section className="w-full">
        <img src="{image}" alt="{alt}" className="w-full h-[60vh] object-cover rounded-[12px]" />
      </section>
      <section className="w-full">
        <div className="max-w-[680px] mx-auto px-4 py-20">
          <p className="text-sm text-neutral-500 mb-4">{label}</p>
          <h1 className="text-[20px] font-medium mb-6">{title}</h1>
          <p className="text-[15px] leading-[1.75] text-neutral-700 mb-10">{description}</p>
          <h2 className="text-[20px] font-medium mb-6 mt-10">Detail</h2>
          <ul className="list-disc pl-5 space-y-2 text-[15px] leading-[1.75] text-neutral-700 mb-10">
{details}
          </ul>
          <Link href="https://wa.me/1234567890" className="btn-primary">Pesan Sekarang</Link>
        </div>
      </section>
    </main>
  );
}}'''

# Generate tour pages
for page in tour_pages:
    details_list = "\n".join([f'            <li>{detail}</li>' for detail in page["details"]])
    content = template.format(
        function_name=page["name"],
        image=page["image"],
        alt=page["alt"],
        label=page["label"],
        title=page["title"],
        description=page["description"],
        details=details_list
    )
    print(f"// {page['name']}.tsx")
    print(content)
    print("\n" + "="*80 + "\n")
