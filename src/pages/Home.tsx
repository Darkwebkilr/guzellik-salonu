import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-[95vh] flex items-center overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-cream/50 -skew-x-12 translate-x-1/2 z-0 animate-fade-in"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gold/5 rounded-full blur-3xl z-0 animate-float"></div>

        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-8 animate-fade-in-left">
              <div className="w-12 h-[1px] bg-gold"></div>
              <span className="text-gold font-bold uppercase tracking-[0.4em] text-xs block">Parlaten Güzellik Salonu</span>
            </div>
            <h1 className="text-5xl lg:text-9xl leading-[0.85] mb-8 text-charcoal animate-fade-in-up [animation-delay:200ms]">
              Işıltınızı <br />
              <span className="italic font-light text-gold serif relative">
                Keşfedin
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gold/20 scale-x-0 origin-left animate-[scaleX_1s_ease-out_forwards] [animation-delay:1s]"></span>
              </span>
            </h1>
            <p className="text-xl text-charcoal-light max-w-lg mb-12 leading-relaxed font-light animate-fade-in-up [animation-delay:400ms]">
              Modern estetik anlayışını lüks bir atmosferle birleştiriyoruz. Size özel bakım ritüelleriyle değişimi hissedin.
            </p>
            <div className="flex flex-wrap gap-8 items-center animate-fade-in-up [animation-delay:600ms]">
              <Link 
                to="/iletisim" 
                className="inline-block bg-charcoal text-white px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-gold hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(197,160,89,0.5)] active:translate-y-0 transition-all duration-300 cursor-pointer btn-shimmer shadow-2xl"
              >
                Hemen Randevu Al
              </Link>
              <a href="#hizmetler" className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:text-gold transition-all cursor-pointer">
                Hizmetlerimiz
                <span className="w-8 h-[1px] bg-charcoal group-hover:bg-gold group-hover:w-16 transition-all duration-500"></span>
              </a>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative z-10 animate-[scaleIn_1.2s_ease-out_forwards]">
              <div className="rounded-t-[200px] rounded-b-lg overflow-hidden shadow-[40px_40px_0px_-10px_rgba(197,160,89,0.1)] border border-cream-dark">
                <img src="/cilt-bakimi.jpg" alt="Luxury Beauty Treatment" className="w-full h-[650px] object-cover animate-slow-zoom" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-10 shadow-2xl max-w-[220px] hidden lg:block animate-float">
                <p className="text-gold text-5xl font-serif mb-2">10+</p>
                <div className="w-10 h-1 bg-gold mb-4"></div>
                <p className="text-charcoal-light text-xs font-bold uppercase tracking-widest leading-loose">Yıllık Tecrübe ve Sektörel Uzmanlık</p>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] border border-gold/10 rounded-full -z-10 animate-[spin_30s_linear_infinite]"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="hizmetler" className="py-40 bg-cream relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[20rem] font-serif text-charcoal/[0.02] whitespace-nowrap -z-0 pointer-events-none select-none">
          LUXURY BEAUTY CARE PARLATEN
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-8">
            <div className="max-w-2xl">
              <span className="text-gold text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Seçkin Katalog</span>
              <h2 className="text-6xl lg:text-8xl text-charcoal mb-6 leading-[0.9]">Özel Bakım <br/><span className="italic text-gold font-light">Hizmetlerimiz</span></h2>
              <p className="text-charcoal-light leading-relaxed max-w-md">Uzman ekibimizle, her detayı titizlikle planlanmış lüks bir deneyim sunuyoruz.</p>
            </div>
            <div className="h-[1px] flex-1 bg-gold/30 mb-4 hidden md:block mx-12"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {services.map((service, index) => (
              <Link 
                key={service.slug} 
                to={`/hizmet/${service.slug}`}
                className="group bg-white rounded-none overflow-hidden transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="h-[450px] overflow-hidden relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-charcoal/30 opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="translate-y-8 group-hover:translate-y-0 transition-all duration-700">
                      <button className="bg-white text-charcoal px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] btn-shimmer">
                        Detaylı İncele
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-[1px] bg-gold/50"></div>
                    <span className="text-gold text-[10px] font-bold uppercase tracking-[0.3em]">Premium Care</span>
                  </div>
                  <h3 className="text-4xl mb-6 text-charcoal group-hover:text-gold transition-colors duration-500">{service.title}</h3>
                  <p className="text-charcoal-light text-sm leading-relaxed mb-8 line-clamp-2">
                    {service.shortDescription}
                  </p>
                  <div className="flex items-center gap-2 text-gold text-[10px] font-bold uppercase tracking-[0.3em] group-hover:gap-4 transition-all duration-500">
                    İncele <span className="text-base">&rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="hakkimizda" className="py-40 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="flex-1 relative animate-fade-in-left">
              <div className="relative z-10">
                <div className="rounded-none border-[20px] border-cream overflow-hidden shadow-2xl">
                  <img src="/igneli-epilasyon.jpg" alt="About Parlaten" className="w-full h-[700px] object-cover hover:scale-105 transition-transform duration-1000" />
                </div>
                <div className="absolute -top-12 -right-12 bg-gold text-white p-12 shadow-2xl animate-float">
                  <p className="text-6xl font-serif mb-0">15</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] leading-tight">Yıllık <br/>Sektörel <br/>Tecrübe</p>
                </div>
              </div>
              <div className="absolute -bottom-10 -left-10 w-full h-full border border-gold/20 -z-10"></div>
            </div>

            <div className="flex-1 animate-fade-in-up">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-gold"></div>
                <span className="text-gold font-bold uppercase tracking-[0.4em] text-xs block">Hikayemiz</span>
              </div>
              <h2 className="text-6xl lg:text-7xl text-charcoal mb-10 leading-[1.1]">
                Güzelliğin ve Zarafetin <br />
                <span className="italic text-gold font-light">Yeni Tanımı</span>
              </h2>
              <div className="space-y-8 text-charcoal-light leading-relaxed text-lg font-light">
                <p>
                  Parlaten Güzellik Salonu olarak, 15 yılı aşkın süredir her misafirimizin benzersiz güzelliğini ortaya çıkarmak için çalışıyoruz. Modern estetik bilimini, kişiye özel yaklaşımlarla harmanlayarak sadece bir bakım değil, bir dönüşüm vaat ediyoruz.
                </p>
                <p>
                  Uzman kadromuz, dünya standartlarındaki teknolojik donanımımız ve hijyen konusundaki tavizsiz duruşumuzla, kendinizi en özel hissettiğiniz anlara ev sahipliği yapıyoruz. Her detayında lüksü ve huzuru hissedeceğiniz salonumuzda, güzellik ritüellerinizi bir sanata dönüştürüyoruz.
                </p>
              </div>
              
              <div className="mt-16 grid grid-cols-2 gap-12">
                <div>
                  <h4 className="text-gold text-sm font-bold uppercase tracking-widest mb-4">Vizyonumuz</h4>
                  <p className="text-charcoal-light text-sm leading-relaxed">Sektörde yenilikçi adımlarla, lüks ve kaliteyi herkes için erişilebilir kılmak.</p>
                </div>
                <div>
                  <h4 className="text-gold text-sm font-bold uppercase tracking-widest mb-4">Misyonumuz</h4>
                  <p className="text-charcoal-light text-sm leading-relaxed">En son teknolojiyi uzman dokunuşlarla birleştirerek kusursuz sonuçlar sunmak.</p>
                </div>
              </div>

              <div className="mt-16">
                <Link 
                  to="/iletisim" 
                  className="inline-block bg-charcoal text-white px-12 py-5 text-xs font-bold uppercase tracking-[0.3em] hover:bg-gold hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(197,160,89,0.5)] active:translate-y-0 transition-all duration-300 cursor-pointer btn-shimmer"
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
};

export default Home;
