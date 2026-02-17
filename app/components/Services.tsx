
import { ShoppingCart, Clock, Wrench } from 'lucide-react';

const services = [
    {
        title: 'Penjualan Alat',
        description: 'Menjual alat bangunan baru dan bekas berkualitas dengan garansi resmi dan harga bersaing.',
        icon: ShoppingCart,
    },
    {
        title: 'Sewa Alat',
        description: 'Layanan sewa harian, mingguan, dan bulanan dengan unit terawat dan siap pakai untuk proyek Anda.',
        icon: Clock,
    },
    {
        title: 'Perbaikan & Service',
        description: 'Teknisi berpengalaman siap menangani perbaikan dan penggantian sparepart segala jenis alat proyek.',
        icon: Wrench,
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-white text-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-primary font-bold tracking-wider uppercase mb-2">Layanan Kami</h2>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">Solusi Lengkap Kebutuhan Proyek</h3>
                    <p className="text-gray-600">
                        Kami hadir untuk memastikan pekerjaan konstruksi Anda tidak terhambat dengan dukungan alat terbaik.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group p-8 border border-gray-100 rounded-xl bg-gray-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="w-14 h-14 bg-gray-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                <service.icon className="w-7 h-7 text-white group-hover:text-black transition-colors" />
                            </div>
                            <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
