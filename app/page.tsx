'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/app/data/services';

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
        <div className="absolute top-0 right-0 w-full lg:w-1/3 h-full bg-cream/50 -skew-x-0 lg:-skew-x-12 lg:translate-x-1/2 z-0 animate-fade-in opacity-30 lg:opacity-100"></div>
        <div className="absolute -bottom-24 -left-24 w-64 lg:w-96 h-64 lg:h-96 bg-gold/5 rounded-full blur-3xl z-0 animate-float"></div>

        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10 pt-10 lg:pt-0">
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6 lg:mb-8 animate-fade-in-left">
              <div className="w-8 lg:w-12 h-[1px] bg-gold"></div>
              <span className="text-gold font-bold uppercase tracking-[0.3em] lg:tracking-[0.4em] text-[10px] lg:text-xs block">Parlaten Güzellik Salonu</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-9xl leading-[1.1] lg:leading-[0.85] mb-6 lg:mb-8 text-charcoal animate-fade-in-up [animation-delay:200ms]">
              Işıltınızı <br />
              <span className="italic font-light text-gold serif relative inline-block">
                Keşfedin
                <span className="absolute -bottom-1 lg:-bottom-2 left-0 w-full h-[1px] lg:h-[2px] bg-gold/20 scale-x-0 origin-left animate-[scaleX_1s_ease-out_forwards] [animation-delay:1s]"></span>
              </span>
            </h1>
            <p className="text-base lg:text-xl text-charcoal-light max-w-lg mb-8 lg:mb-12 leading-relaxed font-light animate-fade-in-up [animation-delay:400ms] mx-auto lg:mx-0 px-4 lg:px-0">
              Modern estetik anlayışını Ankara'da lüks bir atmosferle buluşturuyoruz. Size özel bakım ritüelleriyle değişimi hissedin.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-6 lg:gap-8 items-center justify-center lg:justify-start animate-fade-in-up [animation-delay:600ms]">
              <Link 
                href="/iletisim" 
                className="w-full sm:w-auto bg-charcoal text-white px-10 py-5 text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] hover:bg-gold hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(197,160,89,0.5)] active:translate-y-0 transition-all duration-300 cursor-pointer btn-shimmer shadow-2xl"
              >
                Hemen Randevu Al
              </Link>
              <Link href="/#hizmetler" className="group flex items-center gap-3 text-xs lg:text-sm font-bold uppercase tracking-widest hover:text-gold transition-all cursor-pointer">
                Hizmetlerimiz
                <span className="w-8 h-[1px] bg-charcoal group-hover:bg-gold group-hover:w-16 transition-all duration-500"></span>
              </Link>
            </div>
          </div>
          
          <div className="flex-1 relative w-full max-w-[500px] lg:max-w-none">
            <div className="relative z-10 animate-fade-in [animation-delay:800ms]">
              <div className="relative rounded-t-[120px] lg:rounded-t-[200px] rounded-b-lg overflow-hidden shadow-[20px_20px_0px_-5px_rgba(197,160,89,0.1)] lg:shadow-[40px_40px_0px_-10px_rgba(197,160,89,0.1)] border border-cream-dark h-[400px] lg:h-[650px]">
                <Image 
                  src="/cilt-bakimi.jpg" 
                  alt="Luxury Beauty Treatment" 
                  fill
                  className="object-cover animate-slow-zoom" 
                  priority
                />
              </div>
              <div className="absolute -bottom-6 lg:-bottom-10 -left-6 lg:-left-10 bg-white p-6 lg:p-10 shadow-2xl max-w-[160px] lg:max-w-[220px] animate-float">
                <p className="text-gold text-3xl lg:text-5xl font-serif mb-1 lg:mb-2">10+</p>
                <div className="w-8 lg:w-10 h-[1px] lg:h-1 bg-gold mb-3 lg:mb-4"></div>
                <p className="text-charcoal-light text-[8px] lg:text-[10px] font-bold uppercase tracking-widest leading-loose">Yıllık Tecrübe ve Sektörel Uzmanlık</p>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] lg:w-[130%] h-[110%] lg:h-[130%] border border-gold/10 rounded-full -z-10 animate-[spin_30s_linear_infinite]"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="hizmetler" className="py-24 lg:py-40 bg-cream relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[10rem] lg:text-[20rem] font-serif text-charcoal/[0.02] whitespace-nowrap -z-0 pointer-events-none select-none">
          LUXURY BEAUTY CARE PARLATEN
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-32 gap-8 text-center md:text-left reveal">
            <div className="max-w-2xl mx-auto md:mx-0">
              <span className="text-gold text-[10px] lg:text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Seçkin Katalog</span>
              <h2 className="text-5xl lg:text-8xl text-charcoal mb-6 leading-[1.1] lg:leading-[0.9]">Özel Bakım <br/><span className="italic text-gold font-light">Hizmetlerimiz</span></h2>
              <p className="text-charcoal-light leading-relaxed max-w-md mx-auto md:mx-0 text-sm lg:text-base">Uzman ekibimizle, her detayı titizlikle planlanmış lüks bir deneyim sunuyoruz.</p>
            </div>
            <div className="h-[1px] flex-1 bg-gold/30 mb-4 hidden md:block mx-12"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
            {services.map((service, index) => (
              <Link 
                key={service.slug} 
                href={`/hizmet/${service.slug}`}
                className="group bg-white rounded-none overflow-hidden transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] cursor-pointer reveal"
                style={{ transitionDelay: `${index * 150}ms` }}
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
                      <button className="bg-white text-charcoal px-10 py-4 text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] btn-shimmer">
                        Detaylı İncele
                      </button>
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

      {/* Gallery Section */}
      <section className="py-24 lg:py-40 bg-cream-dark/20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 lg:mb-20 gap-8 text-center md:text-left reveal">
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
                className={`relative group overflow-hidden cursor-pointer reveal ${idx === 0 ? 'md:col-span-2 md:row-span-2' : ''} ${idx === 3 ? 'md:col-span-2' : ''}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <Image 
                  src={img} 
                  alt="Galeri" 
                  fill
                  className="object-cover transition-all duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-charcoal/10 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                   <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-all transform scale-50 group-hover:scale-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                   </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-40 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 reveal">
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-[#FBBC05] fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              ))}
            </div>
            <h2 className="text-5xl lg:text-7xl text-charcoal mb-6">Müşteri <span className="italic text-gold font-light">Deneyimleri</span></h2>
            <p className="text-charcoal-light max-w-2xl mx-auto">Google üzerindeki 5 yıldızlı yorumlarımızla Ankara'nın en çok tercih edilen yeni salonu olmanın gururunu yaşıyoruz.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                name: "Selin Yılmaz",
                comment: "Ankara'da sonunda gerçekten profesyonel bir cilt bakımı buldum. Salonun atmosferi harika, kendimi çok özel hissettim. Kesinlikle tavsiye ederim!",
                date: "1 hafta önce"
              },
              {
                name: "Merve Demir",
                comment: "Lazer epilasyon için geliyorum, teknoloji gerçekten çok yeni. Hiç acı hissetmedim. Çalışanlar çok güler yüzlü ve ilgili. Teşekkürler Parlaten!",
                date: "2 hafta önce"
              },
              {
                name: "Ayşe Kaya",
                comment: "Microblading yaptırdım, kaşlarım o kadar doğal oldu ki herkes kendi kaşım sanıyor. Hijyen konusunda çok titizler, Altındağ Güneşevler'de tek geçerim.",
                date: "1 ay önce"
              }
            ].map((review, i) => (
              <div 
                key={i} 
                className="bg-cream p-10 border border-gold/10 relative reveal"
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-charcoal rounded-full flex items-center justify-center text-gold font-bold">
                    {review.name[0]}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-charcoal">{review.name}</h4>
                    <p className="text-[10px] text-gold font-medium uppercase tracking-tight">{review.date}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-[#FBBC05] fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-charcoal-light text-sm italic leading-relaxed">"{review.comment}"</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center reveal">
            <a 
              href="https://share.google/bEm11VbYgwYXW1kbs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-charcoal hover:text-gold transition-colors group"
            >
              Tüm Yorumları Google'da Gör
              <span className="w-12 h-[1px] bg-charcoal group-hover:bg-gold group-hover:w-16 transition-all duration-500"></span>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="hakkimizda" className="py-24 lg:py-40 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="flex-1 relative w-full max-w-[600px] lg:max-w-none reveal">
              <div className="relative z-10">
                <div className="relative rounded-none border-[10px] lg:border-[20px] border-cream overflow-hidden shadow-2xl h-[450px] lg:h-[700px]">
                  <Image 
                    src="/igneli-epilasyon.jpg" 
                    alt="About Parlaten" 
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-1000" 
                  />
                </div>
                <div className="absolute -top-8 lg:-top-12 -right-8 lg:-right-12 bg-gold text-white p-6 lg:p-12 shadow-2xl animate-float">
                  <p className="text-4xl lg:text-6xl font-serif mb-0">15</p>
                  <p className="text-[8px] lg:text-[10px] font-bold uppercase tracking-[0.2em] lg:tracking-[0.3em] leading-tight">Yıllık <br/>Sektörel <br/>Tecrübe</p>
                </div>
              </div>
              <div className="absolute -bottom-6 lg:-bottom-10 -left-6 lg:-left-10 w-full h-full border border-gold/20 -z-10"></div>
            </div>

            <div className="flex-1 text-center lg:text-left pt-10 lg:pt-0 reveal">
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
                  Parlaten Güzellik Salonu olarak, 15 yılı aşkın süredir her misafirimizin benzersiz güzelliğini ortaya çıkarmak için çalışıyoruz. Ankara'nın merkezinde, Altındağ Güneşevler'de modern estetik bilimini, kişiye özel yaklaşımlarla harmanlıyoruz.
                </p>
                <p>
                  Uzman kadromuz ve dünya standartlarındaki teknolojik donanımımızla, kendinizi en özel hissettiğiniz anlara ev sahipliği yapıyoruz. Her detayında lüksü ve huzuru hissedeceksiniz.
                </p>
              </div>
              
              <div className="mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 text-left">
                <div>
                  <h4 className="text-gold text-[10px] lg:text-sm font-bold uppercase tracking-widest mb-3 lg:mb-4">Vizyonumuz</h4>
                  <p className="text-charcoal-light text-xs lg:text-sm leading-relaxed">Sektörde yenilikçi adımlarla, lüks ve kaliteyi herkes için erişilebilir kılmak.</p>
                </div>
                <div>
                  <h4 className="text-gold text-[10px] lg:text-sm font-bold uppercase tracking-widest mb-3 lg:mb-4">Misyonumuz</h4>
                  <p className="text-charcoal-light text-xs lg:text-sm leading-relaxed">En son teknolojiyi uzman dokunuşlarla birleştirerek kusursuz sonuçlar sunmak.</p>
                </div>
              </div>

              <div className="mt-12 lg:mt-16">
                <Link 
                  href="/iletisim" 
                  className="inline-block w-full sm:w-auto bg-charcoal text-white px-12 py-5 text-[10px] lg:text-xs font-bold uppercase tracking-[0.3em] hover:bg-gold hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(197,160,89,0.5)] active:translate-y-0 transition-all duration-300 cursor-pointer btn-shimmer"
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
