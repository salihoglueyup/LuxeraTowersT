import React from 'react';
import { motion } from 'framer-motion';
import { Lock, User, Bell, ExternalLink, ShieldCheck, Mail, Phone, Car, Sparkles, Wrench, Shield, Dumbbell, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { fadeUp, staggerContainer } from '../shared/utils/animations';
import { boardMembers } from '../data/brands';
import PageHero from '../shared/ui/PageHero';
import SectionHeader from '../shared/ui/SectionHeader';
import SEO from '../shared/seo/SEO';

const ResidentPortal = () => {
  const { t } = useTranslation();

  const residentServices = [
    { id: 'valet', title: 'Vale & Otopark', icon: <Car size={28} />, path: '/ayricaliklar/vale', img: '/images/exterior/7_2025-12-18_02-46-34_3b69d3.webp' },
    { id: 'housekeeping', title: 'Housekeeping', icon: <Sparkles size={28} />, path: '/ayricaliklar/housekeeping', img: '/images/interior/d5_scene10_20240304_220213copy_2025-12-18_03-47-03_de61ba.webp' },
    { id: 'security', title: '7/24 Güvenlik', icon: <Shield size={28} />, path: '/ayricaliklar/guvenlik', img: '/images/exterior/12_2025-12-18_02-46-35_4cee27.webp' },
    { id: 'concierge', title: 'Concierge', icon: <Bell size={28} />, path: '/ayricaliklar/concierge', img: '/images/amenities/d5_scene16_20240303_015548copy_2025-12-18_03-46-29_fa58f6.webp' },
    { id: 'fitness', title: 'Spa & Fitness', icon: <Dumbbell size={28} />, path: '/ayricaliklar/fitness', img: '/images/amenities/d5_scene21_20240303_011838copy_2025-12-18_03-46-29_26003e.webp' },
    { id: 'lounge', title: 'Executive Lounge', icon: <Coffee size={28} />, path: '/ayricaliklar/lounge', img: '/images/amenities/d5_scene9_20240303_024623copy_2025-12-18_03-46-29_a8b134.webp' }
  ];

  return (
    <div className="bg-luxera-navy min-h-screen text-white pb-32">
      <SEO 
        title={t('portal.seo.title', 'Sakinler Portalı & Yönetim')}
        description={t('portal.seo.desc', 'Luxera Towers sakinlerine özel yönetim portali. Apsiyon girişi, duyurular ve yönetim kurulu bilgileri.')}
        canonical="https://luxeratowers.com/sakinler-portali"
      />
      <PageHero
        overline={t('portal.hero.overline', 'Ayrıcalıklı Hizmet')}
        title={t('portal.hero.title', 'Sakinler')}
        highlight={t('portal.hero.highlight', 'Portalı')}
        subtitle={t('portal.hero.subtitle', 'Site yönetimi, aidat ödemeleri, duyurular ve sosyal tesis rezervasyonları için dijital asistanınız.')}
        backgroundImage="/images/exterior/13_2025-12-18_02-46-35_a465ab.webp"
      />

      <div className="max-w-7xl mx-auto px-6 mt-32">
        {/* APSİYON GİRİŞ PANELİ (Glassmorphism) */}
        <div className="relative rounded-3xl overflow-hidden mb-32 border border-white/10 shadow-2xl">
          {/* Arka plan animasyonu */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/interior/d5_scene21_20240303_011838copy_2025-12-18_03-46-29_26003e.webp" 
              alt="Lobby" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-luxera-navy/90 via-luxera-navy/70 to-transparent"></div>
          </div>
          
          <div className="relative z-10 p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-luxera-gold/10 border border-luxera-gold/20 text-luxera-gold text-xs uppercase tracking-widest font-semibold mb-8">
                <ShieldCheck size={16} /> Dijital Yönetim Sistemi
              </div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white leading-tight">Apsiyon<br/><span className="text-luxera-gold font-sans font-light">Online İşlemler</span></h2>
              <p className="text-gray-300 mb-10 text-lg font-light leading-relaxed max-w-md">
                Aidat ödemelerinizi yapabilir, güncel bakiye durumunuzu görebilir, site yönetimi ile iletişime geçebilir ve kapalı havuz, SPA gibi sosyal tesislerimiz için anında rezervasyon oluşturabilirsiniz.
              </p>
              
              <a 
                href="https://www.apsiyon.com/giris" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-luxera-gold text-luxera-navy px-8 py-4 rounded-full font-semibold hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:scale-105"
              >
                <Lock size={18} />
                Sisteme Giriş Yap
                <ExternalLink size={18} />
              </a>
            </div>

            {/* Sağ taraf - Hızlı Duyurular Widget'ı */}
            <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
                <Bell size={24} className="text-luxera-gold" />
                <h3 className="text-xl font-serif">Son Duyurular</h3>
              </div>
              
              <div className="space-y-6">
                <div className="group cursor-pointer">
                  <div className="text-luxera-gold text-xs font-semibold mb-1">05 Aralık 2026</div>
                  <h4 className="text-white font-medium mb-1 group-hover:text-luxera-gold transition-colors">Kapalı Havuz Kış Dönemi Bakımı</h4>
                  <p className="text-gray-400 text-sm line-clamp-2">C Blok altındaki kapalı yüzme havuzumuz 05-08 Aralık tarihleri arasında periyodik kış bakımına alınacaktır.</p>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-luxera-gold text-xs font-semibold mb-1">20 Kasım 2026</div>
                  <h4 className="text-white font-medium mb-1 group-hover:text-luxera-gold transition-colors">Apsiyon Mobil Uygulaması Yayında</h4>
                  <p className="text-gray-400 text-sm line-clamp-2">Site yönetim işlemlerinizi artık iOS ve Android cihazlarınızdan tek tıkla yapabilirsiniz.</p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <Link to="/etkinlikler" className="text-gray-400 text-sm hover:text-white transition-colors">Tüm Duyuruları Gör →</Link>
              </div>
            </div>
          </div>
        </div>

        {/* SİTE İÇİ HİZMETLER VE AYRICALIKLAR */}
        <div className="mb-32">
          <SectionHeader 
            title={t('portal.services.title', 'Site İçi Hizmetler')}
            subtitle={t('portal.services.subtitle', 'Yaşamınızı kolaylaştırmak için sunulan ayrıcalıklı hizmetler.')}
            watermark="HİZMET"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {residentServices.map((service) => (
              <Link to={service.path} key={service.id}>
                <motion.div
                  variants={fadeUp}
                  className="group relative h-[250px] rounded-2xl overflow-hidden shadow-2xl"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src={service.img} 
                      alt={service.title}
                      className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-luxera-gold mb-4 border border-white/20 group-hover:bg-luxera-gold group-hover:text-luxera-navy transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-serif text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {service.title}
                    </h3>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>


        {/* YÖNETİM KURULU */}
        <SectionHeader 
          title={t('portal.board.title', 'Yönetim Kurulu')}
          subtitle={t('portal.board.subtitle', 'Luxera Towers yaşam standartlarını zirvede tutmak için çalışan profesyonel yönetim kadromuz.')}
          watermark="BOARD"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {boardMembers.map((member) => (
            <motion.div
              variants={fadeUp}
              key={member.id}
              className="bg-luxera-charcoal border border-luxera-gold/10 p-8 rounded-2xl hover:border-luxera-gold/30 transition-all duration-300 group text-center"
            >
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-luxera-navy to-black rounded-full flex items-center justify-center border-2 border-luxera-gold/20 mb-6 group-hover:border-luxera-gold transition-colors shadow-lg">
                <User size={36} className="text-luxera-gold/70 group-hover:text-luxera-gold transition-colors" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-2">{member.name}</h3>
              <p className="text-luxera-gold text-sm tracking-widest uppercase mb-6 font-medium">{member.role}</p>
              
              <div className="flex justify-center gap-4 text-gray-500">
                <a href="mailto:yonetim@luxeratowers.com" className="hover:text-white transition-colors bg-white/5 p-2 rounded-full"><Mail size={16} /></a>
                <a href="tel:+902120000000" className="hover:text-white transition-colors bg-white/5 p-2 rounded-full"><Phone size={16} /></a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ResidentPortal;
