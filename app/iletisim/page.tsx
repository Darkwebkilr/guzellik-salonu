import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-charcoal text-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 -skew-x-12 translate-x-1/4"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8 reveal">
              <div className="w-12 h-[1px] bg-gold"></div>
              <span className="text-gold font-bold uppercase tracking-[0.4em] text-xs">İletişim</span>
            </div>
            <h1 className="text-6xl md:text-8xl mb-8 leading-tight reveal">
              Bize <span className="italic text-gold font-light">Ulaşın</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light reveal">
              Güzellik yolculuğunuza başlamak veya hizmetlerimiz hakkında detaylı bilgi almak için yanınızdayız. Ankara'nın en seçkin noktasında sizi bekliyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 md:py-40 -mt-20 relative z-20">
        <div className="container mx-auto px-6">
          {/* xl: (1280px) öncesinde alt alta (grid-cols-1), sonrasında yan yana (xl:grid-cols-12) */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Contact Info Cards */}
            <div className="xl:col-span-5 space-y-12">
              <div className="reveal">
                <h2 className="text-4xl text-charcoal mb-12">İletişim <span className="italic text-gold font-light">Bilgilerimiz</span></h2>
                
                <div className="space-y-10">
                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 bg-white shadow-xl flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-500">
                      <Phone size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gold mb-2">Telefon</p>
                      <a href="tel:+905075034343" className="text-xl text-charcoal hover:text-gold transition-colors">+90 (507) 503 43 43</a>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 bg-white shadow-xl flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-500">
                      <Mail size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gold mb-2">E-Posta</p>
                      <a href="mailto:info@parlaten.com" className="text-xl text-charcoal hover:text-gold transition-colors">info@parlaten.com</a>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 bg-white shadow-xl flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-500">
                      <MapPin size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gold mb-2">Adres</p>
                      <p className="text-lg text-charcoal-light leading-relaxed">
                        Güneşevler mahallesi 128.cadde 5/E, <br />
                        Güneşevler, Çarşamba pazarı karşısı, <br />
                        06100 Altındağ/Ankara
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 bg-white shadow-xl flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-500">
                      <Clock size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gold mb-2">Çalışma Saatleri</p>
                      <p className="text-lg text-charcoal-light">Pazartesi - Cumartesi: 09:00 - 19:00</p>
                      <p className="text-lg text-charcoal-light italic opacity-60">Pazar: Kapalı</p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 bg-white shadow-xl flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-500">
                      <Instagram size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gold mb-2">Instagram</p>
                      <a 
                        href="https://www.instagram.com/parlaten_guzellik_salonu" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xl text-charcoal hover:text-gold transition-colors"
                      >
                        @parlaten_guzellik_salonu
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="xl:col-span-7 space-y-12">
              <div className="bg-white p-2 md:p-4 shadow-2xl reveal h-[400px] md:h-[600px] relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.070000000000!2d32.88!3d39.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDU4JzEyLjAiTiAzMsKwNTInNDguMCJF!5e0!3m2!1str!2str!4v1620000000000!5m2!1str!2str" 
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000 border-0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
                
                <div className="absolute bottom-4 right-4 md:top-10 md:right-10 md:bottom-auto">
                  <a 
                    href="https://share.google/bEm11VbYgwYXW1kbs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gold text-white px-4 md:px-8 py-3 md:py-4 text-[9px] md:text-[10px] font-bold uppercase tracking-widest shadow-2xl hover:bg-charcoal transition-all duration-300 block"
                  >
                    Google Haritalar'da Aç
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
