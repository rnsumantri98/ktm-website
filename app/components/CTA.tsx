
import { PhoneCall } from 'lucide-react';

export default function CTA() {
    return (
        <section id="contact" className="py-24 bg-gray-900 relative overflow-hidden">
            {/* Decorative accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Butuh Alat untuk <span className="text-primary">Proyek Anda?</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
                    Jangan biarkan proyek terhenti karena alat rusak atau kurang. Hubungi kami sekarang untuk penawaran harga terbaik dan ketersediaan unit.
                </p>

                <a
                    href="https://wa.me/+6287771081241"
                    className="inline-flex items-center gap-3 bg-primary text-black font-bold text-lg px-10 py-5 rounded-lg hover:bg-yellow-400 hover:scale-105 transition-all shadow-lg shadow-primary/20"
                >
                    <PhoneCall className="w-6 h-6" />
                    WhatsApp Sekarang
                </a>
            </div>
        </section>
    );
}
