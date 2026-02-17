
import Image from 'next/image';
import { MessageCircle } from 'lucide-react';

const products = [
    {
        id: 1,
        name: 'Molen Beton 350L',
        category: 'Heavy Equipment',
        price: 'Rp 150.000 / hari',
        image: 'https://images.unsplash.com/photo-1590082729352-24d62ba16a36?q=80&w=2670&auto=format&fit=crop', // Concrete mixer placeholder
        desc: 'Kapasitas drum 350 liter, mesin diesel Yanmar/Dongfeng. Kondisi prima.'
    },
    {
        id: 2,
        name: 'Jack Hammer 17kg',
        category: 'Demolition',
        price: 'Rp 100.000 / hari',
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2670&auto=format&fit=crop', // Jackhammer placeholder
        desc: 'Daya hancur tinggi, cocok untuk bobok beton dan aspal. Include mata pahat.'
    },
    {
        id: 3,
        name: 'Stamper Kodok',
        category: 'Compaction',
        price: 'Rp 120.000 / hari',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2670&auto=format&fit=crop', // Compactor placeholder
        desc: 'Stamper plate untuk pemadatan tanah, paving, dan aspal. Mesin Honda GX160.'
    },
    {
        id: 4,
        name: 'Genset 5000 Watt',
        category: 'Power',
        price: 'Rp 200.000 / hari',
        image: 'https://images.unsplash.com/photo-1495574581423-7fa50aa22934?q=80&w=2670&auto=format&fit=crop', // Generator placeholder
        desc: 'Output stabil, starter elektrik. Cocok untuk backup listrik proyek.'
    },
    {
        id: 5,
        name: 'Scaffolding Set',
        category: 'Support',
        price: 'Rp 25.000 / set / bulan',
        image: 'https://images.unsplash.com/photo-1501469145952-4752b04f114c?q=80&w=2670&auto=format&fit=crop', // Scaffolding placeholder
        desc: 'Main frame 170cm/190cm, cross brace, joint pin. Sewa minimal 10 set.'
    },
    {
        id: 6,
        name: 'Vibrator Beton',
        category: 'Finishing',
        price: 'Rp 75.000 / hari',
        image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2669&auto=format&fit=crop', // Tools placeholder
        desc: 'Selang 4m/6m, mesin Honda. Wajib untuk pengecoran kolom dan balok.'
    }
];

export default function Products() {
    return (
        <section id="products" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-primary font-bold tracking-wider uppercase mb-2">Katalog Alat</h2>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Produk Unggulan</h3>
                    <p className="text-gray-600">
                        Pilihan alat terbaik yang paling sering digunakan oleh kontraktor partner kami.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((item) => (
                        <div key={item.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
                            <div className="relative h-56 w-full bg-gray-200 overflow-hidden">
                                {/* <Image 
                   src={item.image} 
                   alt={item.name}
                   fill
                   className="object-cover group-hover:scale-105 transition-transform duration-500"
                /> */}
                                {/* Fallback using simple img tag for simplicity in this generated code without configuring next.config domains strictly yet, or standard img */}
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-black/80 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    {item.category}
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h4 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h4>
                                <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow">
                                    {item.desc}
                                </p>
                                <div className="border-t border-gray-100 pt-4 mt-auto">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs text-gray-500">Mulai dari</span>
                                        <span className="font-bold text-primary-600 text-lg">{item.price}</span>
                                    </div>
                                    <a
                                        href={`https://wa.me/6287771081241?text=Halo%2C%20saya%20tertarik%20dengan%20${item.name}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="w-full block text-center bg-gray-900 text-white font-medium py-3 rounded-lg hover:bg-primary hover:text-black transition-colors flex items-center justify-center gap-2"
                                    >
                                        <MessageCircle size={18} />
                                        Tanya via WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
