import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/app/data/services';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-charcoal text-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 -skew-x-12 translate-x-1/4"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-gold"></div>
              <span className="text-gold font-bold uppercase tracking-[0.4em] text-xs">Hizmetlerimiz</span>
            </div>
            <h1 className="text-6xl md:text-8xl mb-8 leading-tight">
              Özel Bakım <span className="italic text-gold font-light">Katalogumuz</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
              Güzelliğinizi ön plana çıkaran, son teknoloji cihazlar ve uzman kadromuzla sunduğumuz profesyonel hizmetlerimizi keşfedin.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-40 -mt-20 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
            {services.map((service, index) => (
              <Link 
                key={service.slug} 
                href={`/hizmet/${service.slug}`}
                className="group bg-white rounded-none overflow-hidden transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] cursor-pointer reveal"
              >
                <div className="h-[350px] lg:h-[450px] overflow-hidden relative">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-charcoal/30 opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="translate-y-8 group-hover:translate-y-0 transition-all duration-700">
                      <span className="bg-white text-charcoal px-10 py-4 text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] inline-block">
                        Detaylı İncele
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-[1px] bg-gold/50"></div>
                    <span className="text-gold text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.3em]">Premium Care</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl mb-4 lg:mb-6 text-charcoal group-hover:text-gold transition-colors duration-500">{service.title}</h3>
                  <p className="text-charcoal-light text-xs lg:text-sm leading-relaxed mb-6 lg:mb-8 line-clamp-2">
                    {service.shortDescription}
                  </p>
                  <div className="flex items-center gap-2 text-gold text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.3em] group-hover:gap-4 transition-all duration-500">
                    İncele <span className="text-base">&rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
