
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
            {/* Background Image Overlay - Replace url with actual image */}
            <div
                className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop')", // Constructive placeholder
                    backgroundBlendMode: "overlay"
                }}
            />

            {/* Dark Overlay Gradient */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/50 to-gray-900" />

            <div className="container relative z-20 px-4 text-center md:text-left">
                <div className="max-w-3xl mx-auto md:mx-0">
                    <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 text-sm font-medium">
                        <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
                        Partner Konstruksi Terpercaya
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
                        Jual, Sewa & <br />
                        <span className="text-primary">Perbaikan Alat</span> <br />
                        Bangunan Profesional
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
                        Menyediakan molen, jack hammer, stamper, dan berbagai alat proyek lainnya
                        dengan harga kompetitif dan layanan cepat untuk kelancaran proyek Anda.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Link
                            href="#products"
                            className="px-8 py-4 bg-primary text-black font-bold rounded-md hover:bg-yellow-400 transition-all flex items-center justify-center gap-2 group"
                        >
                            Lihat Produk
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="https://wa.me/6287771081241"
                            className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-md hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2"
                        >
                            Hubungi Kami
                            <ChevronRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
