'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/app/data/services';
import { Award, UserCheck, GraduationCap, Sparkles } from 'lucide-react';

export default function Home() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const galleryImages = [
    "/manikur.jpg",
    "/cilt-bakimi.jpg",
    "/mikroblading-kil-teknigi.avif",
    "/profesyonel-makyaj.jpg",
    "/kalici-oje.jpg",
    "/hybrid alexandrite ve buz epilasyon.jpg",
    "/kas-dizayni.jpg",
    "/pedikur.jpg",
    "/igneli-epilasyon.jpg"
  ];

  return (
    <div className="min-h-screen">
      {/* Lightbox Modal */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[200] bg-charcoal/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-10 right-10 text-white text-4xl font-light hover:text-gold transition-colors">&times;</button>
          <div className="relative w-full max-w-5xl h-[80vh]">
            <Image 
              src={selectedImg} 
              fill
              className="object-contain" 
              alt="Büyütülmüş Görsel" 
              priority
            />
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[90vh] lg:min-h-[95vh] flex items-center overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-full lg:w-1/3 h-full bg-cream/50 z-0 opacity-30 lg:opacity-100"></div>

        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10 pt-10 lg:pt-0">
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6 lg:mb-8">
              <div className="w-8 lg:w-12 h-[1px] bg-gold"></div>
              <span className="text-gold font-bold uppercase tracking-[0.3em] lg:tracking-[0.4em] text-[10px] lg:text-xs block">Parlaten Güzellik Salonu</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-9xl leading-[1.1] lg:leading-[0.85] mb-6 lg:mb-8 text-charcoal">
              Işıltınızı <br />
              <span className="italic font-light text-gold serif relative inline-block">
                Keşfedin
              </span>
            </h1>
            <p className="text-base lg:text-xl text-charcoal-light max-w-lg mb-8 lg:mb-12 leading-relaxed font-light mx-auto lg:mx-0 px-4 lg:px-0">
              30 yıllık sektörel tecrübe ve uzman kadromuzla, modern estetik anlayışını Ankara'da lüks bir atmosferle buluşturuyoruz.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-6 lg:gap-8 items-center justify-center lg:justify-start">
              <Link 
                href="https://wa.me/905075034343" 
                target="_blank"
                className="w-full sm:w-auto bg-charcoal text-white px-10 py-5 text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] hover:bg-gold transition-all duration-300 cursor-pointer shadow-2xl text-center"
              >
                Hemen Randevu Al
              </Link>
              <Link href="/hizmet" className="group flex items-center gap-3 text-xs lg:text-sm font-bold uppercase tracking-widest hover:text-gold transition-all cursor-pointer">
                Hizmetlerimiz
                <span className="w-8 h-[1px] bg-charcoal group-hover:bg-gold group-hover:w-16 transition-all duration-500"></span>
              </Link>
            </div>
          </div>
          
          <div className="flex-1 relative w-full max-w-[500px] lg:max-w-none">
            <div className="relative z-10">
              <div className="relative rounded-t-[120px] lg:rounded-t-[200px] rounded-b-lg overflow-hidden shadow-xl border border-cream-dark h-[400px] lg:h-[650px]">
                <Image 
                  src="/cilt-bakimi.jpg" 
                  alt="Luxury Beauty Treatment" 
                  fill
                  className="object-cover" 
                  priority
                />
              </div>
              <div className="absolute -bottom-6 lg:-bottom-10 -left-6 lg:-left-10 bg-white p-6 lg:p-10 shadow-2xl max-w-[160px] lg:max-w-[220px]">
                <p className="text-gold text-3xl lg:text-5xl font-serif mb-1 lg:mb-2">30+</p>
                <div className="w-8 lg:w-10 h-[1px] lg:h-1 bg-gold mb-3 lg:mb-4"></div>
                <p className="text-charcoal-light text-[8px] lg:text-[10px] font-bold uppercase tracking-widest leading-loose">Yıllık Tecrübe ve Sektörel Uzmanlık</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Markers Section */}
      <section className="py-16 bg-white border-y border-cream-dark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <div className="flex flex-col items-center text-center space-y-3">
              <Award className="text-gold w-8 h-8 md:w-10 md:h-10" strokeWidth={1} />
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-charcoal">Uzman Estetisyen</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <UserCheck className="text-gold w-8 h-8 md:w-10 md:h-10" strokeWidth={1} />
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-charcoal">Uzman Hemşire</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <GraduationCap className="text-gold w-8 h-8 md:w-10 md:h-10" strokeWidth={1} />
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-charcoal">Usta Öğretici</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <Sparkles className="text-gold w-8 h-8 md:w-10 md:h-10" strokeWidth={1} />
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-charcoal">Microblading Artisti</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="hizmetler" className="py-24 lg:py-40 bg-cream relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-32 gap-8 text-center md:text-left">
            <div className="max-w-2xl mx-auto md:mx-0">
              <span className="text-gold text-[10px] lg:text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Seçkin Katalog</span>
              <h2 className="text-5xl lg:text-8xl text-charcoal mb-6 leading-[1.1] lg:leading-[0.9]">Özel Bakım <br/><span className="italic text-gold font-light">Hizmetlerimiz</span></h2>
              <p className="text-charcoal-light leading-relaxed max-w-md mx-auto md:mx-0 text-sm lg:text-base">Uzman ekibimizle, her detayı titizlikle planlanmış lüks bir deneyim sunuyoruz.</p>
            </div>
            <div className="h-[1px] flex-1 bg-gold/30 mb-4 hidden md:block mx-12"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
            {services.map((service) => (
              <Link 
                key={service.slug} 
                href={`/hizmet/${service.slug}`}
                className="group bg-white rounded-none overflow-hidden transition-all duration-500 hover:shadow-xl cursor-pointer"
              >
                <div className="h-[350px] lg:h-[450px] overflow-hidden relative">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-charcoal/30 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="bg-white text-charcoal px-10 py-4 text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em]">
                      Detaylı İncele
                    </span>
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

      {/* Gallery Section */}
      <section className="py-24 lg:py-40 bg-cream-dark/20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 lg:mb-20 gap-8 text-center md:text-left">
            <div className="max-w-2xl mx-auto md:mx-0">
              <span className="text-gold text-[10px] lg:text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Görsel Bir Yolculuk</span>
              <h2 className="text-5xl lg:text-8xl text-charcoal mb-6 leading-[1.1] lg:leading-[0.9]">Salonumuzdan <br/><span className="italic text-gold font-light">Kareler</span></h2>
              <p className="text-charcoal-light leading-relaxed max-w-md mx-auto md:mx-0 text-sm lg:text-base">Sizin için hazırladığımız huzurlu atmosferi ve profesyonel uygulamalarımızı keşfedin.</p>
            </div>
            <div className="h-[1px] flex-1 bg-gold/30 mb-4 hidden md:block mx-12"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 auto-rows-[200px] md:auto-rows-[400px]">
            {galleryImages.map((img, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedImg(img)}
                className={`relative group overflow-hidden cursor-pointer ${idx === 0 ? 'md:col-span-2 md:row-span-2' : ''} ${idx === 3 ? 'md:col-span-2' : ''}`}
              >
                <Image 
                  src={img} 
                  alt="Galeri" 
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="hakkimizda" className="py-24 lg:py-40 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="flex-1 relative w-full max-w-[600px] lg:max-w-none">
              <div className="relative rounded-none border-[10px] lg:border-[20px] border-cream overflow-hidden shadow-2xl h-[450px] lg:h-[700px]">
                <Image 
                  src="/igneli-epilasyon.jpg" 
                  alt="About Parlaten" 
                  fill
                  className="object-cover" 
                />
              </div>
              <div className="absolute -top-8 lg:-top-12 -right-8 lg:-right-12 bg-gold text-white p-6 lg:p-12 shadow-2xl">
                <p className="text-4xl lg:text-6xl font-serif mb-0">30</p>
                <p className="text-[8px] lg:text-[10px] font-bold uppercase tracking-[0.2em] lg:tracking-[0.3em] leading-tight">Yıllık <br/>Sektörel <br/>Tecrübe</p>
              </div>
            </div>

            <div className="flex-1 text-center lg:text-left pt-10 lg:pt-0">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6 lg:mb-8">
                <div className="w-12 h-[1px] bg-gold"></div>
                <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] lg:text-xs block">Hikayemiz</span>
              </div>
              <h2 className="text-5xl lg:text-7xl text-charcoal mb-8 lg:mb-10 leading-[1.1]">
                Güzelliğin ve Zarafetin <br />
                <span className="italic text-gold font-light">Yeni Tanımı</span>
              </h2>
              <div className="space-y-6 lg:space-y-8 text-charcoal-light leading-relaxed text-base lg:text-lg font-light">
                <p>
                  Parlaten Güzellik Salonu olarak, 30 yılı aşkın süredir her misafirimizin benzersiz güzelliğini ortaya çıkarmak için çalışıyoruz. Ankara'nın merkezinde, Altındağ Güneşevler'de modern estetik bilimini, kişiye özel yaklaşımlarla harmanlıyoruz.
                </p>
                <p>
                  Uzman kadromuz (Uzman Hemşire, Uzman Estetisyen, Usta Öğretici ve Microblading Artistleri) ile dünya standartlarındaki teknolojik donanımımızı birleştirerek, kendinizi en özel hissettiğiniz anlara ev sahipliği yapıyoruz.
                </p>
              </div>
              <div className="mt-12 lg:mt-16">
                <Link 
                  href="/iletisim" 
                  className="inline-block w-full sm:w-auto bg-charcoal text-white px-12 py-5 text-[10px] lg:text-xs font-bold uppercase tracking-[0.3em] hover:bg-gold transition-all duration-300 cursor-pointer shadow-xl text-center"
                >
                  Daha Fazlasını Keşfedin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
