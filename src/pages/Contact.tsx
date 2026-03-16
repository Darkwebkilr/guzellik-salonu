import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-24 bg-cream-dark/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24 animate-fade-in-up">
            <span className="text-gold text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Bize Ulaşın</span>
            <h2 className="text-6xl lg:text-7xl text-charcoal mb-6 leading-tight">İletişim & <span className="italic text-gold font-light">Randevu</span></h2>
            <div className="w-24 h-[1px] bg-gold mx-auto"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-20 items-stretch">
            {/* Contact Info Card */}
            <div className="flex-1 bg-charcoal p-12 lg:p-20 text-white animate-fade-in-left">
              <h3 className="text-4xl font-serif mb-12">İletişim Bilgileri</h3>
              
              <div className="space-y-12">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 border border-gold/30 flex items-center justify-center flex-shrink-0 text-gold">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-gold text-xs font-bold uppercase tracking-widest mb-3">Adresimiz</h4>
                    <p className="text-gray-400 font-light leading-relaxed">Çankaya, Ankara <br/>Lüks Plaza No:123 Kat:2</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 border border-gold/30 flex items-center justify-center flex-shrink-0 text-gold">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-gold text-xs font-bold uppercase tracking-widest mb-3">Telefon</h4>
                    <p className="text-gray-400 font-light text-xl">+90 (507) 503 43 43</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 border border-gold/30 flex items-center justify-center flex-shrink-0 text-gold">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-gold text-xs font-bold uppercase tracking-widest mb-3">E-posta</h4>
                    <p className="text-gray-400 font-light">info@parlaten.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-20">
                <h4 className="text-gold text-xs font-bold uppercase tracking-widest mb-8">Bizi Takip Edin</h4>
                <div className="flex gap-6">
                  {['Instagram', 'Facebook', 'X'].map(social => (
                    <a key={social} href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-500 text-xs">
                      {social[0]}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="flex-[1.5] bg-white p-12 lg:p-20 shadow-2xl animate-fade-in-up">
              <h3 className="text-4xl font-serif text-charcoal mb-12">Mesaj Gönderin</h3>
              <form className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative">
                    <input type="text" placeholder="Adınız Soyadınız" className="w-full border-b border-cream-dark py-4 focus:border-gold outline-none transition-colors text-sm font-light placeholder:text-gray-300" />
                  </div>
                  <div className="relative">
                    <input type="email" placeholder="E-posta Adresiniz" className="w-full border-b border-cream-dark py-4 focus:border-gold outline-none transition-colors text-sm font-light placeholder:text-gray-300" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative">
                    <input type="tel" placeholder="Telefon Numaranız" className="w-full border-b border-cream-dark py-4 focus:border-gold outline-none transition-colors text-sm font-light placeholder:text-gray-300" />
                  </div>
                  <div className="relative">
                    <select className="w-full border-b border-cream-dark py-4 focus:border-gold outline-none transition-colors text-sm font-light text-gray-400 bg-transparent">
                      <option>Hizmet Seçiniz</option>
                      <option>Cilt Bakımı</option>
                      <option>Lazer Epilasyon</option>
                      <option>İğneli Epilasyon</option>
                      <option>Kalıcı Makyaj</option>
                    </select>
                  </div>
                </div>
                <div className="relative">
                  <textarea rows={4} placeholder="Mesajınız..." className="w-full border-b border-cream-dark py-4 focus:border-gold outline-none transition-colors text-sm font-light placeholder:text-gray-300 resize-none"></textarea>
                </div>
                <button type="submit" className="bg-gold text-white px-16 py-5 text-xs font-bold uppercase tracking-[0.3em] hover:bg-charcoal transition-all cursor-pointer btn-shimmer w-full md:w-auto">
                  Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Map Section */}
      <section className="h-[400px] lg:h-[600px] w-full bg-cream-dark relative grayscale hover:grayscale-0 transition-all duration-1000">
        <div className="absolute inset-0 flex items-center justify-center z-10 px-6">
           <div className="bg-white p-8 lg:p-12 shadow-2xl text-center max-w-md animate-float">
             <h4 className="text-2xl lg:text-3xl font-serif text-charcoal mb-4">Sizi Bekliyoruz</h4>
             <p className="text-charcoal-light text-xs lg:text-sm font-light leading-relaxed mb-6 lg:mb-8">Salonumuzun konforlu atmosferinde bir kahve eşliğinde güzellik yolculuğunuzu planlayalım.</p>
             <a 
               href="https://maps.google.com/?q=Ankara+Çankaya" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-gold text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] border-b border-gold pb-1 cursor-pointer"
              >
                Yol Tarifi Al
              </a>
           </div>
        </div>
        <img src="/lazer-epilasyon.jpg" className="w-full h-full object-cover opacity-40" alt="Map area" />
      </section>
    </div>
  );
};

export default Contact;
