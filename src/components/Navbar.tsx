import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Sayfa değiştiğinde menüyü kapat
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Menü açıkken kaydırmayı engelle
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] bg-white/95 backdrop-blur-md border-b border-cream-dark transition-all duration-300">
        <div className="container mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-4 cursor-pointer">
            <img src="/Logo.png" alt="Parlaten Logo" className="h-16 md:h-20 w-auto object-contain" />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10 text-[11px] font-bold uppercase tracking-[0.2em] text-charcoal-light">
            <Link to="/" className="hover:text-gold transition-colors cursor-pointer">Anasayfa</Link>
            <Link to="/#hizmetler" className="hover:text-gold transition-colors cursor-pointer">Hizmetlerimiz</Link>
            <Link to="/#hakkimizda" className="hover:text-gold transition-colors cursor-pointer">Hakkımızda</Link>
            <Link to="/iletisim" className="hover:text-gold transition-colors cursor-pointer">İletişim</Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a 
              href="https://www.instagram.com/parlaten_guzellik_salonu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-charcoal hover:text-gold transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <button className="bg-gold hover:bg-gold-dark text-white px-6 py-3 rounded-none text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:-translate-y-1 hover:shadow-xl active:translate-y-0 cursor-pointer btn-shimmer">
              Randevu Al
            </button>
          </div>

          {/* Hamburger / Close Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-12 h-12 space-y-2 focus:outline-none transition-all duration-300"
            aria-label={isOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
          >
            <span className={`block w-8 h-0.5 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5 bg-gold' : 'bg-charcoal'}`}></span>
            <span className={`block w-8 h-0.5 transition-all duration-300 ${isOpen ? 'opacity-0' : 'bg-charcoal'}`}></span>
            <span className={`block w-8 h-0.5 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5 bg-gold' : 'bg-charcoal'}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 w-full h-[100dvh] bg-white z-[90] transform transition-transform duration-500 ease-in-out md:hidden flex flex-col items-center p-6 pt-32 overflow-y-auto ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="flex flex-col items-center space-y-6 text-center w-full min-h-fit pb-12">
          <Link to="/" className="text-3xl font-serif text-charcoal hover:text-gold transition-colors">Anasayfa</Link>
          <div className="w-12 h-[1px] bg-gold/30"></div>
          <Link to="/#hizmetler" className="text-3xl font-serif text-charcoal hover:text-gold transition-colors">Hizmetlerimiz</Link>
          <div className="w-12 h-[1px] bg-gold/30"></div>
          <Link to="/#hakkimizda" className="text-3xl font-serif text-charcoal hover:text-gold transition-colors">Hakkımızda</Link>
          <div className="w-12 h-[1px] bg-gold/30"></div>
          <Link to="/iletisim" className="text-3xl font-serif text-charcoal hover:text-gold transition-colors">İletişim</Link>
          
          <div className="pt-8 w-full flex flex-col items-center space-y-6">
             <a href="tel:+905075034343" className="text-gold font-bold text-xl tracking-tight">+90 (507) 503 43 43</a>
             <a 
               href="https://www.instagram.com/parlaten_guzellik_salonu" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center space-x-2 text-charcoal font-bold uppercase tracking-widest text-xs"
             >
               <Instagram size={18} />
               <span>Instagram'da Takip Et</span>
             </a>
             <button className="bg-gold text-white w-full max-w-[280px] py-5 text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl">
               Randevu Al
             </button>
          </div>
        </div>
        
        {/* Decorative Background for Mobile Menu */}
        <div className="absolute bottom-10 left-0 w-full text-center text-cream-dark text-6xl font-serif opacity-10 pointer-events-none select-none overflow-hidden">
          PARLATEN ANKARA
        </div>
      </div>
    </>
  );
};

export default Navbar;
