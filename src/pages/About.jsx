import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Building2, Trees, ShieldCheck, Key, Award, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageHero from '../shared/ui/PageHero';
import StatStrip from '../shared/ui/StatStrip';
import Testimonials from '../shared/ui/Testimonials';
import CtaBand from '../shared/ui/CtaBand';
import SEO from '../shared/seo/SEO';

const About = () => {
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const stats = [
    { value: 369, suffix: '', label: t('about.stats.s1', 'Rezidans') },
    { value: 87, suffix: '', label: t('about.stats.s2', 'Ticari Ünite') },
    { value: 3, suffix: '', label: t('about.stats.s3', 'İkonik Kule') },
    { value: 2026, suffix: '', label: t('about.stats.s4', 'Teslim Yılı') },
  ];

  const reasons = [
    { title: t('about.reasons.r1.title', 'Prestijli Konum'), desc: t('about.reasons.r1.desc', 'Basın Ekspres\'in kalbinde, tüm ulaşım ağlarının kesişim noktasında eşsiz bir lokasyon.'), img: '/images/exterior/13_2025-12-18_02-46-35_a465ab.webp' },
    { title: t('about.reasons.r2.title', 'Üstün Mimari'), desc: t('about.reasons.r2.desc', 'Uluslararası standartlarda tasarlanmış, şehre değer katan ikonik silüet.'), img: '/images/exterior/5_2025-12-18_02-46-35_82a21a.webp' },
    { title: t('about.reasons.r3.title', 'Lüks Donanım'), desc: t('about.reasons.r3.desc', 'Akıllı ev altyapısı, 3.20m tavan yüksekliği ve birinci sınıf malzemeler.'), img: '/images/interior/d5_scene7_20240304_220754copy_2025-12-18_03-47-03_62285d.webp' }
  ];

  const offers = [
    t('about.offers.o1', 'Vale ve 7/24 Concierge'),
    t('about.offers.o2', 'Panoramik şehir manzarası'),
    t('about.offers.o3', 'Lüks SPA ve Fitness Kulübü'),
    t('about.offers.o4', 'Özel misafir otoparkı'),
    t('about.offers.o5', 'Premium mağazalar ve restoranlar'),
  ];

  const timeline = [
    { year: '2023', title: t('about.timeline.t1.title', 'Proje Geliştirme'), desc: t('about.timeline.t1.desc', 'Mimari tasarım ve izin süreçleri tamamlandı.') },
    { year: '2024', title: t('about.timeline.t2.title', 'Temel Atma'), desc: t('about.timeline.t2.desc', 'Güçlendirilmiş zemin çalışmaları ve temel atma töreni.') },
    { year: '2025', title: t('about.timeline.t3.title', 'Kaba İnşaat'), desc: t('about.timeline.t3.desc', 'Kulelerin yükselmesi ve cephe giydirme başlangıcı.') },
    { year: '2026', title: t('about.timeline.t4.title', 'Teslim & Yaşam'), desc: t('about.timeline.t4.desc', 'Anahtar teslimleri ve Luxera ayrıcalığının başlaması.') }
  ];

  const specs = [
    { icon: <Building2 />, title: t('about.specs.sp1.title', 'Proje Alanı'), value: t('about.specs.sp1.value', '15.000 m²') },
    { icon: <ShieldCheck />, title: t('about.specs.sp2.title', 'Deprem Güvenliği'), value: t('about.specs.sp2.value', 'C50 Beton & İleri Teknoloji') },
    { icon: <Key />, title: t('about.specs.sp3.title', 'Daire Tipleri'), value: t('about.specs.sp3.value', '1+1, 2+1, 3+1, 4+1') },
    { icon: <TrendingUp />, title: t('about.specs.sp4.title', 'Ticari Alan'), value: t('about.specs.sp4.value', '87 Üniteli Açık AVM') },
  ];

  return (
    <div className="bg-luxera-navy min-h-screen text-white overflow-hidden pb-24">
      <SEO 
        title={t('about.seo.title', 'Hakkımızda & Proje Detayları')}
        description={t('about.seo.desc', 'Luxera Towers; İstanbul Basın Ekspres\'te 369 lüks rezidans ve 87 mağazalık AVM ile yükselen yepyeni bir yaşam vizyonu.')}
        canonical="https://luxeratowers.com/hakkimizda"
      />
      <PageHero
        overline={t('about.hero.overline', 'Proje Hakkında')}
        title={t('about.hero.title', 'Yeni Bir')}
        highlight={t('about.hero.highlight', 'Vizyon')}
        subtitle={t('about.hero.subtitle', 'Basın Ekspres\'in kalbinde, lüksün standartlarını yeniden tanımlayan ikonik bir mimari ve ayrıcalıklı bir yaşam.')}
        backgroundImage="/images/exterior/4_2025-12-18_02-46-35_e74cd5 (1).webp"
      />

      <StatStrip stats={stats} className="mb-32" />

      {/* Tanıtım / Vizyon */}
      <section className="max-w-7xl mx-auto px-6 mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-luxera-gold/20 translate-x-4 translate-y-4 rounded-3xl blur-xl"></div>
          <img src="/images/interior/6_2025-12-18_02-42-20_29be56.webp" alt="Vizyon" className="relative rounded-3xl shadow-2xl border border-white/10" />
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
            {t('about.intro.title1', 'Sıradanlığa Meydan Okuyan')} <br/>
            <span className="text-luxera-gold italic">{t('about.intro.title2', 'Mimari Bir Eser')}</span>
          </h2>
          <div className="h-[1px] w-24 bg-luxera-gold mb-8"></div>
          <p className="text-gray-300 mb-6 leading-relaxed text-lg font-light">
            {t('about.intro.p1', 'Luxera Towers, salt bir konut projesi olmanın çok ötesinde; İstanbul\'un dinamizmini estetikle harmanlayan yeni nesil bir yaşam konseptidir. Her detayı özenle düşünülmüş bu projede, lüks artık bir ayrıcalık değil, standartınız olacak.')}
          </p>
          <p className="text-gray-400 leading-relaxed font-light">
            {t('about.intro.p2', 'İhtiyaç duyduğunuz her şeye asansör mesafesinde ulaşabilme özgürlüğü, gökyüzü bahçelerinde nefes alma imkanı ve uluslararası markaların yer aldığı ticari alanlarıyla tam donanımlı bir dünya yaratıyoruz.')}
          </p>
        </div>
      </section>

      {/* Neden Luxera Towers? */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">{t('about.why.title1', 'Neden')} <span className="text-luxera-gold italic">{t('about.why.title2', 'Luxera Towers?')}</span></h2>
          <div className="h-[1px] w-16 bg-luxera-gold mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg leading-relaxed font-light">
            {t('about.why.desc', 'Şehir hayatıyla bağınızı korurken, bulutların üzerinden izleyeceğiniz manzaralarla huzurun ayrıcalıklı halini deneyimleyin.')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-black/40 border border-white/5 rounded-3xl overflow-hidden group hover:border-luxera-gold/30 transition-all duration-500 shadow-2xl"
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-luxera-navy/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img src={r.img} alt={r.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif text-luxera-gold mb-3">{r.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Size Ne Sunuyor? */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="bg-luxera-charcoal/80 backdrop-blur-md border border-luxera-gold/20 rounded-[3rem] p-10 md:p-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-luxera-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">{t('about.offersHeader.title1', 'Luxera Towers')} <br/><span className="text-luxera-gold italic">{t('about.offersHeader.title2', 'Size Ne Sunuyor?')}</span></h2>
            <div className="h-[1px] w-24 bg-luxera-gold mb-8"></div>
            <p className="text-gray-300 leading-relaxed text-lg font-light">{t('about.offersHeader.desc', 'Luxera Towers\'ta yaşam demek; zamanı keyifle yönettiğiniz, prestijli bir ayrıcalık demek.')}</p>
          </div>
          <ul className="space-y-6 relative z-10">
            {offers.map((o, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-5 text-gray-300 bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-luxera-gold/30 transition-colors"
              >
                <span className="w-3 h-3 rounded-full bg-luxera-gold shrink-0"></span>
                <span className="leading-relaxed font-medium">{o}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Gökyüzü Bahçeleri Konsepti (Parallax) */}
      <section className="w-full h-[70vh] relative overflow-hidden mb-32 flex items-center justify-center">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img src="/images/exterior/9_2025-12-18_02-46-35_8d953d.webp" alt="Gökyüzü Bahçeleri" className="w-full h-[120%] object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-luxera-navy via-black/60 to-luxera-navy"></div>
        </motion.div>
        
        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
            className="bg-black/40 backdrop-blur-md border border-white/10 p-12 rounded-3xl"
          >
            <div className="flex items-center gap-3 justify-center mb-6">
              <Trees className="text-luxera-gold" size={32} />
              <span className="text-luxera-gold uppercase tracking-[0.3em] font-semibold text-sm">{t('about.gardens.subtitle', 'Gökyüzü Bahçeleri')}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">{t('about.gardens.title', '"Her penceresinden başarıya açılan bir manzara"')}</h2>
            <p className="text-gray-300 mx-auto leading-relaxed text-lg font-light">
              {t('about.gardens.desc', 'Kuleler arasına yerleştirilen çok katlı yeşil teraslar, şehrin ortasında doğayla iç içe nefes alan bir yaşam sunar. Peyzajlı sosyal platformlar ve dinlenme alanları evinizin lüks bir uzantısıdır.')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Zaman Çizelgesi */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">{t('about.timelineHeader.title', 'Proje Yolculuğu')}</h2>
          <div className="h-[1px] w-16 bg-luxera-gold mx-auto mb-6"></div>
          <p className="text-gray-400 font-light">{t('about.timelineHeader.desc', 'Temelden teslime, kusursuzluğun planlanan gelişim takvimi.')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-white/10 z-0"></div>
          {timeline.map((t, i) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative z-10"
            >
              <div className="text-5xl font-serif text-luxera-gold/30 mb-6 drop-shadow-lg">{t.year}</div>
              <div className="h-4 w-4 rounded-full bg-luxera-gold mb-8 mx-auto md:mx-0 shadow-[0_0_15px_rgba(212,175,55,0.6)]"></div>
              <h3 className="text-2xl font-serif text-white mb-3">{t.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Teknik Künye */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-[#121824] to-black border border-luxera-gold/20 rounded-[3rem] p-10 md:p-20 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -top-20 text-white/5">
            <Award size={400} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-8">
              <Award className="text-luxera-gold" size={40} />
              <h2 className="text-4xl md:text-5xl font-serif text-white">{t('about.specsHeader', 'Teknik Künye')}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
              {specs.map((s) => (
                <div key={s.title} className="flex gap-6 items-center">
                  <div className="text-luxera-gold bg-luxera-gold/10 p-5 rounded-2xl shrink-0 border border-luxera-gold/20 shadow-lg">{s.icon}</div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2 font-semibold">{s.title}</p>
                    <p className="text-white font-serif text-2xl">{s.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Referanslar */}
      <section className="mt-32 mb-32">
        <Testimonials title={t('about.testimonials.title', 'Luxera\'da Yaşayanlar')} overline={t('about.testimonials.overline', 'Referanslar')} watermark="★" />
      </section>

      {/* CTA */}
      <CtaBand
        title={t('about.cta.title', 'Bu Hikâyenin Bir Parçası Olun')}
        desc={t('about.cta.desc', 'Luxera Towers\'ı yakından tanımak, örnek dairemizi gezmek ve size özel seçenekleri keşfetmek için bizimle iletişime geçin.')}
        primary={{ label: t('about.cta.primary', 'İletişime Geçin'), href: '/iletisim' }}
        secondary={{ label: t('about.cta.secondary', 'Rezidansları İncele'), href: '/rezidanslar' }}
        backgroundImage="/images/exterior/13_2025-12-18_02-46-35_a465ab.webp"
      />
    </div>
  );
};

export default About;
