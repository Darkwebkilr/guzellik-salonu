import React from 'react';
import Link from 'next/link';

import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-1">
            <Image 
              src="/Logo.png" 
              alt="Parlaten Logo" 
              width={200} 
              height={80} 
              className="h-20 w-auto object-contain mb-8" 
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Parlaten Güzellik Salonu olarak, en yüksek kalite standartlarında hizmet vermeyi misyon edindik. Güzelliğiniz bizim tutkumuzdur.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl mb-8 border-b border-gold w-fit pr-8 pb-2">Hızlı Linkler</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-gold transition-colors cursor-pointer">Anasayfa</Link></li>
              <li><Link href="/hizmet" className="hover:text-gold transition-colors cursor-pointer">Hizmetlerimiz</Link></li>
              <li><Link href="/#hakkimizda" className="hover:text-gold transition-colors cursor-pointer">Hakkımızda</Link></li>
              <li><Link href="/iletisim" className="hover:text-gold transition-colors cursor-pointer">İletişim</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl mb-8 border-b border-gold w-fit pr-8 pb-2">İletişim Bilgileri</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><p>Adres: Güneşevler mahallesi 128.cadde 5/E, Güneşevler, Çarşamba pazarı karşısı, 06100 Altındağ/Ankara</p></li>
              <li><p>Telefon: +90 (507) 503 43 43</p></li>
              <li><p>E-posta: info@parlaten.com</p></li>
              <li>
                <a 
                  href="https://www.instagram.com/parlaten_guzellik_salonu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  Instagram: @parlaten_guzellik_salonu
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl mb-8 border-b border-gold w-fit pr-8 pb-2">Çalışma Saatleri</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><p>Pazartesi - Cumartesi: 09:00 - 19:00</p></li>
              <li><p>Pazar: Kapalı</p></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-12 text-center text-[10px] text-gray-500 tracking-[0.2em] uppercase space-y-4">
          <p>&copy; 2026 Parlaten Güzellik Salonu. Tüm Hakları Saklıdır.</p>
          <p className="opacity-80">
            Bu site <span className="text-gold font-bold">Evolution Ajans</span> tarafından tasarlanmıştır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
