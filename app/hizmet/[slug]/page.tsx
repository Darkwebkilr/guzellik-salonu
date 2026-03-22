import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/app/data/services';
import { notFound } from 'next/navigation';
import { CheckCircle2, ArrowLeft, Phone } from 'lucide-react';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <Image 
          src={service.image} 
          alt={service.title} 
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-charcoal/40 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-6 text-center text-white">
            <Link 
              href="/#hizmetler" 
              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.4em] mb-8 hover:text-gold transition-colors"
            >
              <ArrowLeft size={16} /> Tüm Hizmetler
            </Link>
            <h1 className="text-6xl md:text-9xl mb-6 leading-tight">{service.title}</h1>
            <div className="w-24 h-[1px] bg-gold mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 md:py-40">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-12 reveal">
              <div>
                <span className="text-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Detaylı İnceleme</span>
                <h2 className="text-4xl md:text-6xl text-charcoal mb-8 leading-tight">Uygulama <br/><span className="italic text-gold font-light">Hakkında</span></h2>
                <div className="prose prose-lg text-charcoal-light leading-relaxed font-light space-y-6">
                  <p className="text-xl leading-loose">
                    {service.longDescription}
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 md:p-12 shadow-2xl border-l-4 border-gold">
                <h3 className="text-2xl mb-8">Neden Bizi Tercih Etmelisiniz?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <CheckCircle2 className="text-gold mt-1 shrink-0" size={20} />
                      <span className="text-charcoal-light text-sm font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-5 space-y-8 reveal">
              <div className="bg-charcoal p-10 md:p-16 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 -skew-x-12 translate-x-1/2 -translate-y-1/2"></div>
                
                <h3 className="text-3xl mb-8 relative z-10">Randevu <span className="italic text-gold font-light">Oluşturun</span></h3>
                <p className="text-gray-400 mb-10 leading-relaxed font-light relative z-10">
                  {service.title} uygulaması için uzmanlarımızdan randevu almak veya ücretsiz ön görüşme yapmak için bizimle iletişime geçin.
                </p>
                
                <div className="space-y-6 relative z-10">
                  <a 
                    href="https://wa.me/905075034343" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-gold hover:bg-gold-dark text-white py-5 text-xs font-bold uppercase tracking-[0.2em] transition-all"
                  >
                    WhatsApp'tan Yazın
                  </a>
                  <a 
                    href="tel:+905075034343" 
                    className="flex items-center justify-center gap-3 w-full border border-white/20 hover:border-gold hover:text-gold py-5 text-xs font-bold uppercase tracking-[0.2em] transition-all"
                  >
                    <Phone size={16} /> Hemen Arayın
                  </a>
                </div>
              </div>

              <div className="p-8 border border-cream-dark bg-cream/50">
                <h4 className="text-sm font-bold uppercase tracking-widest text-charcoal mb-6">Diğer Hizmetlerimiz</h4>
                <div className="space-y-4">
                  {services.filter(s => s.slug !== slug).slice(0, 4).map(s => (
                    <Link 
                      key={s.slug} 
                      href={`/hizmet/${s.slug}`}
                      className="group flex items-center justify-between py-3 border-b border-charcoal/5 hover:border-gold transition-all"
                    >
                      <span className="text-charcoal-light group-hover:text-gold transition-colors">{s.title}</span>
                      <span className="text-gold opacity-0 group-hover:opacity-100 transition-all">&rarr;</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
