
import { Hammer, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black text-gray-400 pt-16 pb-8 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-primary p-2 rounded-md">
                                <Hammer className="w-5 h-5 text-black" />
                            </div>
                            <span className="text-xl font-bold text-white tracking-tight">
                                KARYA TEKNIK MANDIRI
                            </span>
                        </div>
                        <p className="mb-6 leading-relaxed text-sm">
                            Mitra terpercaya untuk penyediaan, penyewaan, dan servis alat konstruksi. Memberikan solusi terbaik untuk kelancaran proyek Anda.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Layanan</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-primary transition-colors">Jual Alat Baru & Bekas</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Sewa Harian & Bulanan</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Service & Sparepart</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Konsultasi Alat</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Kontak Kami</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0" />
                                <span>Jl. Raya Konstruksi No. 88, Zona Industri, Jakarta Timur 13930</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span>+62 877-7108-1241</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span>sales@teknikbangunan.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Business Hours */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Jam Operasional</h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex justify-between">
                                <span>Senin - Jumat</span>
                                <span className="text-white">08:00 - 17:00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sabtu</span>
                                <span className="text-white">08:00 - 14:00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Minggu</span>
                                <span className="text-red-500">Tutup</span>
                            </li>
                        </ul>

                        <div className="mt-8 flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-black transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-black transition-colors">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} KARYA TEKNIK MANDIRI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
