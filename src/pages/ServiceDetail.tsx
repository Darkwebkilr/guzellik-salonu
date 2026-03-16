import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { services } from '../data/services';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Service Hero */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-charcoal/40 z-10"></div>
        <img 
          src={service.image} 
          alt={service.title} 
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom" 
        />
        <div className="container mx-auto px-6 relative z-20 text-white">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="text-gold font-bold uppercase tracking-[0.4em] text-xs block mb-6">Özel Hizmetimiz</span>
            <h1 className="text-7xl lg:text-9xl mb-8 leading-none font-serif">{service.title}</h1>
            <p className="text-xl font-light text-gray-200 leading-relaxed max-w-xl">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Service Content */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-24">
            <div className="flex-[1.5] animate-fade-in-up">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-gold"></div>
                <span className="text-gold font-bold uppercase tracking-[0.4em] text-xs block">Detaylar</span>
              </div>
              <h2 className="text-5xl text-charcoal mb-10 leading-tight">Uygulama <br/><span className="italic text-gold font-light">Süreci ve Detaylar</span></h2>
              <div className="prose prose-xl font-light text-charcoal-light leading-loose space-y-8">
                <p>{service.longDescription}</p>
                <p>Parlaten Güzellik Salonu'nda her işlem, misafirimizin konforu ve sağlığı ön planda tutularak, en yüksek hijyen standartlarında gerçekleştirilir.</p>
              </div>

              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-8 bg-cream border border-gold/10 group hover:border-gold transition-all duration-500">
                    <div className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <span className="text-sm font-bold uppercase tracking-widest text-charcoal">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 animate-fade-in-left">
              <div className="sticky top-40 bg-charcoal p-12 text-white">
                <h3 className="text-3xl font-serif mb-8 text-white">Randevu Alın</h3>
                <p className="text-gray-400 text-sm font-light mb-10 leading-relaxed">Uzmanlarımızdan ücretsiz danışmanlık almak ve size en uygun zamanı belirlemek için hemen ulaşın.</p>
                
                <div className="space-y-6 mb-12">
                   <div className="flex items-center gap-4 text-gold">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                      <span className="text-white font-bold">+90 (555) 000 00 00</span>
                   </div>
                   <div className="flex items-center gap-4 text-gold">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                      <span className="text-white font-bold">WhatsApp Destek</span>
                   </div>
                </div>

                <Link to="/iletisim" className="block w-full text-center bg-gold py-5 text-xs font-bold uppercase tracking-[0.3em] hover:bg-gold-dark transition-all btn-shimmer">
                  Formu Doldurun
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Other Services Link */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6 text-center">
           <h4 className="text-2xl font-serif text-charcoal mb-8">Diğer Özel Hizmetlerimize Göz Atın</h4>
           <div className="flex flex-wrap justify-center gap-8">
              {services.filter(s => s.slug !== slug).map(s => (
                <Link key={s.slug} to={`/hizmet/${s.slug}`} className="text-xs font-bold uppercase tracking-widest text-charcoal/50 hover:text-gold transition-colors">
                  {s.title}
                </Link>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
