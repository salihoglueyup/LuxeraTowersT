import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CreditCard, Wrench, Calendar, Bell, User, Settings, LogOut, ChevronRight, 
  Clock, AlertCircle, Home, Key, Package, Zap, Thermometer, CheckCircle, Car,
  LayoutDashboard, History, Coffee, Users, Video, BatteryCharging, Plus, MoreHorizontal, MapPin
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import SEO from '../../shared/seo/SEO';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('ozet');
  const [smartHomeStates, setSmartHomeStates] = useState({
    livingRoomLight: true,
    bedroomLight: false,
    ac: true,
    curtains: false,
    temp: 22
  });

  const menuCategories = [
    {
      title: 'ANA EKRAN',
      items: [
        { id: 'ozet', label: 'Özet (Pano)', icon: <LayoutDashboard size={18} /> }
      ]
    },
    {
      title: 'FİNANS YÖNETİMİ',
      items: [
        { id: 'finans', label: 'Aidat & Faturalar', icon: <CreditCard size={18} /> },
      ]
    },
    {
      title: 'YAŞAM & HİZMETLER',
      items: [
        { id: 'smart-home', label: 'Akıllı Ev', icon: <Home size={18} /> },
        { id: 'talepler', label: 'Talepler & Servis', icon: <Wrench size={18} /> },
        { id: 'konsiyerj', label: 'Konsiyerj & VIP', icon: <Coffee size={18} /> },
        { id: 'ziyaretci', label: 'Misafir & Vale', icon: <Key size={18} /> },
        { id: 'kargolar', label: 'Kargolarım', icon: <Package size={18} /> }
      ]
    },
    {
      title: 'SOSYAL & TESİSLER',
      items: [
        { id: 'rezervasyonlar', label: 'Rezervasyonlarım', icon: <Calendar size={18} /> },
        { id: 'etkinlikler', label: 'Etkinlik & Topluluk', icon: <Users size={18} /> }
      ]
    },
    {
      title: 'GÜVENLİK & OTOPARK',
      items: [
        { id: 'kameralar', label: 'Canlı Kameralar', icon: <Video size={18} /> },
        { id: 'sarj', label: 'EV Şarj İstasyonu', icon: <BatteryCharging size={18} /> }
      ]
    }
  ];

  const handleLogout = () => {
    navigate('/portal/login');
  };

  const getTabLabel = (tabId) => {
    for (const cat of menuCategories) {
      const found = cat.items.find(i => i.id === tabId);
      if (found) return found.label;
    }
    return 'Ayarlar';
  };

  // --- MODULE COMPONENTS --- //

  const OzetModule = () => (
    <motion.div key="ozet" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      <div className="bg-gradient-to-br from-luxera-charcoal to-black border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-luxera-gold/30 transition-colors shadow-2xl">
        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity"><CreditCard size={80} className="text-luxera-gold" /></div>
        <h4 className="text-gray-400 font-semibold mb-2 flex items-center gap-2"><CreditCard size={16}/> Güncel Borç Bakiyesi</h4>
        <p className="text-4xl font-serif text-white mb-1">₺8,500<span className="text-sm text-gray-500 font-sans">.00</span></p>
        <p className="text-luxera-gold text-xs font-semibold uppercase tracking-wider mb-8">Son Ödeme: 25 Aralık 2025</p>
        <button onClick={() => setActiveTab('finans')} className="w-full bg-luxera-gold text-luxera-navy font-bold py-3 rounded-xl hover:bg-white transition-colors">Hemen Öde</button>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden group hover:border-white/20 transition-colors">
        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity"><Wrench size={80} className="text-white" /></div>
        <div className="flex justify-between items-start mb-6">
          <h4 className="text-gray-400 font-semibold flex items-center gap-2"><Wrench size={16}/> Aktif Talepler</h4>
          <span className="bg-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-full border border-blue-500/30">1 Açık</span>
        </div>
        <div className="bg-black/40 border border-white/10 rounded-2xl p-4 cursor-pointer hover:border-luxera-gold/30 transition-colors" onClick={() => setActiveTab('talepler')}>
          <p className="text-white font-medium mb-1">Akıllı Ev Paneli Arızası</p>
          <p className="text-xs text-gray-400 flex items-center gap-1 mb-3"><Clock size={12}/> Oluşturulma: Dün 14:30</p>
          <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
            <div className="bg-blue-500 h-full w-1/2 rounded-full"></div>
          </div>
          <p className="text-xs text-blue-400 mt-2 font-semibold">Durum: Teknik ekip yönlendirildi</p>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden group hover:border-white/20 transition-colors md:col-span-2 xl:col-span-1">
        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity"><Calendar size={80} className="text-white" /></div>
        <div className="flex justify-between items-start mb-6">
          <h4 className="text-gray-400 font-semibold flex items-center gap-2"><Calendar size={16}/> Yaklaşan Rezervasyon</h4>
        </div>
        <div className="bg-black/40 border border-white/10 rounded-2xl p-4 flex gap-4 items-center cursor-pointer hover:border-luxera-gold/30 transition-colors" onClick={() => setActiveTab('rezervasyonlar')}>
          <div className="w-16 h-16 bg-luxera-gold/10 rounded-xl flex flex-col items-center justify-center border border-luxera-gold/20 shrink-0">
            <span className="text-luxera-gold font-bold text-xl leading-none">24</span>
            <span className="text-luxera-gold text-xs uppercase font-semibold">Ara</span>
          </div>
          <div>
            <p className="text-white font-medium mb-1">Kapalı Havuz Kullanımı</p>
            <p className="text-xs text-gray-400 flex items-center gap-1"><Clock size={12}/> 18:00 - 19:30</p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const FinansModule = () => (
    <motion.div key="finans" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-black via-gray-900 to-black border border-white/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-luxera-gold/5 rounded-full blur-3xl"></div>
          <CreditCard className="text-luxera-gold mb-6" size={40} />
          <h3 className="text-gray-400 font-medium mb-1">Toplam Ödenecek Tutar</h3>
          <p className="text-5xl font-serif text-white mb-6">₺8,500<span className="text-xl text-gray-500 font-sans">.00</span></p>
          <div className="space-y-4">
            <input type="text" placeholder="Kart Numarası" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:border-luxera-gold outline-none" />
            <div className="flex gap-4">
              <input type="text" placeholder="AA/YY" className="w-1/2 bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:border-luxera-gold outline-none" />
              <input type="text" placeholder="CVC" className="w-1/2 bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:border-luxera-gold outline-none" />
            </div>
            <button className="w-full bg-luxera-gold text-luxera-navy font-bold py-4 rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)]">3D Secure ile Öde</button>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md h-[450px] overflow-y-auto custom-scrollbar">
          <h3 className="text-xl font-serif text-white mb-6 border-b border-white/10 pb-4 sticky top-0 bg-luxera-navy/80 backdrop-blur-md z-10">Geçmiş İşlemler</h3>
          <div className="space-y-4">
            {[
              { desc: 'Kasım 2025 Aidatı', date: '01.11.2025', amount: '₺8,500', status: 'Ödendi' },
              { desc: 'Ekim 2025 Aidatı', date: '01.10.2025', amount: '₺8,500', status: 'Ödendi' },
              { desc: 'Eylül 2025 Aidatı', date: '01.09.2025', amount: '₺8,500', status: 'Ödendi' },
              { desc: 'Havuz Rezervasyonu (Ekstra)', date: '15.09.2025', amount: '₺450', status: 'Ödendi' },
              { desc: 'Ağustos 2025 Aidatı', date: '01.08.2025', amount: '₺8,500', status: 'Ödendi' }
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center p-4 bg-black/40 rounded-xl border border-white/5">
                <div>
                  <p className="text-white font-medium">{item.desc}</p>
                  <p className="text-xs text-gray-400">{item.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-white font-bold">{item.amount}</p>
                  <p className="text-xs text-green-400 flex items-center gap-1 justify-end"><CheckCircle size={12}/> {item.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  const SmartHomeModule = () => (
    <motion.div key="smarthome" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md flex flex-col items-center justify-center py-12 md:col-span-1">
          <Thermometer size={48} className="text-luxera-gold mb-4" />
          <h3 className="text-gray-400 font-medium mb-4">Salon Sıcaklığı</h3>
          <div className="text-6xl font-serif text-white mb-6">{smartHomeStates.temp}°C</div>
          <div className="flex gap-4">
            <button onClick={() => setSmartHomeStates(s => ({...s, temp: s.temp - 1}))} className="w-12 h-12 bg-black/40 rounded-full flex items-center justify-center text-white border border-white/10 hover:border-luxera-gold transition-colors">-</button>
            <button onClick={() => setSmartHomeStates(s => ({...s, temp: s.temp + 1}))} className="w-12 h-12 bg-black/40 rounded-full flex items-center justify-center text-white border border-white/10 hover:border-luxera-gold transition-colors">+</button>
          </div>
        </div>
        <div className="md:col-span-2 grid grid-cols-2 gap-6">
          {[
            { id: 'livingRoomLight', label: 'Salon Aydınlatma', icon: <Zap size={24} /> },
            { id: 'bedroomLight', label: 'Yatak Odası', icon: <Zap size={24} /> },
            { id: 'ac', label: 'Merkezi Klima', icon: <Thermometer size={24} /> },
            { id: 'curtains', label: 'Akıllı Perdeler', icon: <Home size={24} /> }
          ].map(device => (
            <div key={device.id} className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer ${smartHomeStates[device.id] ? 'bg-luxera-gold/10 border-luxera-gold/50 shadow-[0_0_20px_rgba(212,175,55,0.1)]' : 'bg-white/5 border-white/10 hover:bg-white/10'}`} onClick={() => setSmartHomeStates(s => ({...s, [device.id]: !s[device.id]}))}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-colors ${smartHomeStates[device.id] ? 'bg-luxera-gold text-luxera-navy' : 'bg-black/40 text-gray-400'}`}>
                {device.icon}
              </div>
              <h4 className="text-white font-medium">{device.label}</h4>
              <p className={`text-xs mt-1 font-bold ${smartHomeStates[device.id] ? 'text-luxera-gold' : 'text-gray-500'}`}>{smartHomeStates[device.id] ? 'AÇIK' : 'KAPALI'}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const ZiyaretciModule = () => (
    <motion.div key="ziyaretci" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
        <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
          <Key className="text-luxera-gold" size={28} />
          <h3 className="text-xl font-serif text-white">QR Ziyaretçi Kaydı</h3>
        </div>
        <p className="text-sm text-gray-400 mb-6">Misafirinizin adını girerek güvenlik noktasından hızlı geçiş yapabileceği tek kullanımlık bir QR kod oluşturun.</p>
        <div className="space-y-4 mb-6">
          <input type="text" placeholder="Misafir Adı Soyadı" className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:border-luxera-gold outline-none" />
          <input type="text" placeholder="Araç Plakası (Opsiyonel)" className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:border-luxera-gold outline-none" />
        </div>
        <button className="w-full bg-luxera-gold text-luxera-navy font-bold py-4 rounded-xl hover:bg-white transition-all">QR Kod Üret</button>
      </div>
      <div className="bg-gradient-to-br from-luxera-navy to-black border border-white/10 p-8 rounded-3xl backdrop-blur-md flex flex-col items-center justify-center text-center">
        <Car size={64} className="text-luxera-gold mb-6" />
        <h3 className="text-2xl font-serif text-white mb-2">Vale Çağır</h3>
        <p className="text-gray-400 mb-8 max-w-xs">Aracınızın çıkış kapısına getirilmesi yaklaşık 5-7 dakika sürmektedir.</p>
        <button className="bg-white text-luxera-navy font-bold py-4 px-12 rounded-full hover:bg-luxera-gold transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] text-lg uppercase tracking-widest">
          Aracımı Hazırla
        </button>
      </div>
    </motion.div>
  );

  const KargolarModule = () => (
    <motion.div key="kargolar" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
      <h3 className="text-xl font-serif text-white mb-6 border-b border-white/10 pb-4 flex items-center gap-3"><Package className="text-luxera-gold"/> Resepsiyondaki Kargolarım</h3>
      <div className="space-y-4">
        {[
          { sender: 'Amazon TR', code: 'TR-1928374', date: 'Bugün 14:20', status: 'Resepsiyonda Bekliyor', active: true },
          { sender: 'Yurtiçi Kargo', code: 'YK-554122', date: 'Dün 10:15', status: 'Teslim Alındı', active: false },
          { sender: 'Trendyol', code: 'TY-9988221', date: '12 Aralık 16:30', status: 'Teslim Alındı', active: false }
        ].map((kargo, i) => (
          <div key={i} className={`flex justify-between items-center p-5 rounded-2xl border transition-colors ${kargo.active ? 'bg-luxera-gold/10 border-luxera-gold/30' : 'bg-black/40 border-white/5'}`}>
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${kargo.active ? 'bg-luxera-gold text-luxera-navy' : 'bg-white/10 text-gray-400'}`}>
                <Package size={20} />
              </div>
              <div>
                <p className="text-white font-medium text-lg">{kargo.sender}</p>
                <p className="text-sm text-gray-400">Takip No: {kargo.code}</p>
              </div>
            </div>
            <div className="text-right">
              <p className={`text-sm font-bold uppercase tracking-wider mb-1 ${kargo.active ? 'text-luxera-gold' : 'text-gray-500'}`}>{kargo.status}</p>
              <p className="text-xs text-gray-400">{kargo.date}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  const TaleplerModule = () => (
    <motion.div key="talepler" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-6">
      <div className="flex justify-between items-center bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
        <p className="text-gray-300">Tüm teknik ve destek taleplerinizi buradan takip edebilirsiniz.</p>
        <button className="bg-luxera-gold text-luxera-navy px-6 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-white transition-colors">
          <Plus size={18} /> Yeni Talep
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Bekleyen */}
        <div className="bg-black/20 border border-white/5 rounded-2xl p-4">
          <h4 className="text-gray-400 font-semibold mb-4 flex items-center gap-2"><Clock size={16} /> Beklemede (0)</h4>
          <div className="h-40 border-2 border-dashed border-white/5 rounded-xl flex items-center justify-center text-gray-500 text-sm">Talep bulunmuyor</div>
        </div>
        {/* İşlemde */}
        <div className="bg-black/20 border border-white/5 rounded-2xl p-4">
          <h4 className="text-blue-400 font-semibold mb-4 flex items-center gap-2"><Wrench size={16} /> İşlemde (1)</h4>
          <div className="bg-white/5 border border-white/10 p-4 rounded-xl cursor-grab active:cursor-grabbing">
            <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded mb-2 inline-block">Teknik Servis</span>
            <h5 className="text-white font-medium mb-1">Akıllı Ev Paneli Arızası</h5>
            <p className="text-xs text-gray-400 line-clamp-2 mb-3">Salondaki panelin dokunmatiği bazen tepki vermiyor. Kontrol edilmesini rica ederim.</p>
            <div className="flex justify-between items-center text-xs text-gray-500">
              <span>Dün 14:30</span>
              <MoreHorizontal size={16} />
            </div>
          </div>
        </div>
        {/* Çözüldü */}
        <div className="bg-black/20 border border-white/5 rounded-2xl p-4">
          <h4 className="text-green-400 font-semibold mb-4 flex items-center gap-2"><CheckCircle size={16} /> Çözüldü (2)</h4>
          <div className="space-y-3">
            <div className="bg-white/5 border border-white/10 p-4 rounded-xl opacity-60">
              <h5 className="text-white font-medium mb-1 text-sm">Mutfak Bataryası Sızıntısı</h5>
              <p className="text-xs text-gray-400">12 Kasım 2025</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-4 rounded-xl opacity-60">
              <h5 className="text-white font-medium mb-1 text-sm">Balkon Gideri Temizliği</h5>
              <p className="text-xs text-gray-400">03 Ekim 2025</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const RezervasyonlarModule = () => (
    <motion.div key="rezervasyonlar" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-serif text-white">Tesis Takvimi</h3>
          <div className="flex gap-2">
            <button className="bg-black/40 text-gray-300 px-4 py-2 rounded-lg hover:text-white hover:bg-white/10 transition-colors">Kapalı Havuz</button>
            <button className="bg-luxera-gold text-luxera-navy font-bold px-4 py-2 rounded-lg">SPA & Masaj</button>
            <button className="bg-black/40 text-gray-300 px-4 py-2 rounded-lg hover:text-white hover:bg-white/10 transition-colors">VIP Toplantı</button>
          </div>
        </div>
        {/* Fake Calendar Grid */}
        <div className="grid grid-cols-7 gap-2 mb-4">
          {['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'].map(d => <div key={d} className="text-center text-gray-500 text-sm py-2">{d}</div>)}
          {Array.from({length: 31}).map((_, i) => (
            <div key={i} className={`aspect-square rounded-lg flex items-center justify-center text-sm cursor-pointer transition-colors ${i === 23 ? 'bg-luxera-gold text-luxera-navy font-bold shadow-[0_0_10px_rgba(212,175,55,0.5)]' : 'bg-black/20 text-gray-300 hover:bg-white/10'}`}>
              {i + 1}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gradient-to-br from-luxera-navy to-black border border-white/10 p-8 rounded-3xl backdrop-blur-md">
        <h3 className="text-xl font-serif text-white mb-6">Yaklaşan</h3>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex gap-4 items-center mb-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 opacity-10"><Calendar size={60} /></div>
          <div className="w-16 h-16 bg-luxera-gold/10 rounded-xl flex flex-col items-center justify-center border border-luxera-gold/20 shrink-0">
            <span className="text-luxera-gold font-bold text-xl leading-none">24</span>
            <span className="text-luxera-gold text-xs uppercase font-semibold">Ara</span>
          </div>
          <div className="relative z-10">
            <p className="text-white font-medium mb-1">SPA Masaj Seansı</p>
            <p className="text-xs text-gray-400 flex items-center gap-1"><Clock size={12}/> 18:00 - 19:30</p>
          </div>
        </div>
        <button className="w-full bg-luxera-gold text-luxera-navy font-bold py-3 rounded-xl hover:bg-white transition-all shadow-xl">Yeni Rezervasyon</button>
      </div>
    </motion.div>
  );

  const KonsiyerjModule = () => (
    <motion.div key="konsiyerj" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { title: 'Kuru Temizleme', desc: 'Kapınızdan alınır', icon: <Package size={32} /> },
        { title: 'Daire Temizliği', desc: 'Profesyonel ekip', icon: <Home size={32} /> },
        { title: 'VIP Transfer', desc: 'Havalimanı & Şehir İçi', icon: <Car size={32} /> },
        { title: 'Özel Asistan', desc: 'Rezervasyon & Bilet', icon: <Coffee size={32} /> },
      ].map((srv, i) => (
        <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-3xl text-center group cursor-pointer hover:border-luxera-gold/50 transition-all hover:-translate-y-1">
          <div className="w-16 h-16 bg-black/40 rounded-full flex items-center justify-center text-luxera-gold mx-auto mb-4 group-hover:scale-110 transition-transform">
            {srv.icon}
          </div>
          <h4 className="text-white font-medium mb-1">{srv.title}</h4>
          <p className="text-xs text-gray-400">{srv.desc}</p>
        </div>
      ))}
      <div className="md:col-span-2 lg:col-span-4 bg-gradient-to-r from-luxera-gold/20 to-transparent border border-luxera-gold/30 p-8 rounded-3xl mt-4 flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-serif text-white mb-2">Özel Bir İsteğiniz Mi Var?</h3>
          <p className="text-gray-300">Konsiyerj ekibimiz 7/24 hizmetinizdedir. Talebinizi iletin, biz halledelim.</p>
        </div>
        <button className="bg-luxera-gold text-luxera-navy font-bold px-8 py-4 rounded-xl hover:bg-white transition-colors shrink-0">
          Danışmana Bağlan
        </button>
      </div>
    </motion.div>
  );

  const KameralarModule = () => (
    <motion.div key="kameralar" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        { title: 'Lobi Giriş', active: true, img: '/images/interior/d5_scene21_20240303_011838copy_2025-12-18_03-46-29_26003e.webp' },
        { title: 'Kapalı Çocuk Parkı', active: true, img: '/images/exterior/4_2025-12-18_02-46-35_361a6b.webp' },
        { title: 'Otopark - Kat 1', active: false, img: '' },
        { title: 'Otopark - Kat 2', active: false, img: '' }
      ].map((cam, i) => (
        <div key={i} className="bg-black border border-white/10 rounded-2xl overflow-hidden relative aspect-video group">
          {cam.active ? (
            <>
              <img src={cam.img} alt={cam.title} className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 px-3 py-1.5 rounded-lg backdrop-blur-md border border-white/10">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-white text-xs font-bold tracking-widest uppercase">LIVE</span>
              </div>
              <div className="absolute bottom-4 left-4">
                <span className="text-white font-medium bg-black/60 px-3 py-1.5 rounded-lg backdrop-blur-md border border-white/10">{cam.title}</span>
              </div>
            </>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-gray-500 bg-white/5">
              <Video size={32} className="mb-2 opacity-50" />
              <span className="text-sm">Bağlantı Yok</span>
              <span className="text-xs mt-1">{cam.title}</span>
            </div>
          )}
        </div>
      ))}
    </motion.div>
  );

  const SarjModule = () => (
    <motion.div key="sarj" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-1 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md flex flex-col items-center justify-center text-center">
        <BatteryCharging size={64} className="text-luxera-gold mb-6" />
        <h3 className="text-2xl font-serif text-white mb-2">EV Şarj İstasyonları</h3>
        <p className="text-gray-400 mb-6">Otopark -1. Katta bulunan 4 adet 22kW AC şarj istasyonu durumu.</p>
        <div className="w-full bg-black/40 p-4 rounded-xl border border-white/5 flex justify-between items-center">
          <span className="text-gray-300">Boş İstasyon</span>
          <span className="text-2xl font-bold text-green-400">2<span className="text-sm text-gray-500 font-normal">/4</span></span>
        </div>
      </div>
      <div className="md:col-span-2 grid grid-cols-2 gap-6">
        {[
          { id: 1, status: 'available', kw: '22kW', time: '-' },
          { id: 2, status: 'charging', kw: '22kW', time: '1s 45dk kaldı' },
          { id: 3, status: 'charging', kw: '22kW', time: '2s 10dk kaldı' },
          { id: 4, status: 'available', kw: '22kW', time: '-' }
        ].map(st => (
          <div key={st.id} className={`p-6 rounded-3xl border transition-all ${st.status === 'available' ? 'bg-green-500/5 border-green-500/30' : 'bg-blue-500/5 border-blue-500/30'}`}>
            <div className="flex justify-between items-start mb-6">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${st.status === 'available' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400 animate-pulse'}`}>
                <Zap size={24} />
              </div>
              <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${st.status === 'available' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'}`}>
                {st.status === 'available' ? 'BOŞ' : 'ŞARJ EDİLİYOR'}
              </span>
            </div>
            <h4 className="text-white font-medium mb-1">İstasyon {st.id}</h4>
            <div className="flex justify-between text-xs text-gray-400 mt-4 border-t border-white/5 pt-4">
              <span className="flex items-center gap-1"><Zap size={12}/> {st.kw}</span>
              <span className="flex items-center gap-1"><Clock size={12}/> {st.time}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  const EtkinliklerModule = () => (
    <motion.div key="etkinlikler" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        { title: 'Lobi Lounge Caz Dinletisi', date: '25 Aralık Çarşamba, 20:00', loc: 'Ana Lobi', img: '/images/interior/d5_scene21_20240303_011838copy_2025-12-18_03-46-29_26003e.webp', status: 'Kayıt Açık' },
        { title: 'Sabah Yogası', date: 'Her Cumartesi, 09:00', loc: 'Fitness Terası', img: '/images/amenities/d5_scene26_20240303_012656copy_2025-12-18_03-46-34_808608.webp', status: 'Kayıt Açık' }
      ].map((evt, i) => (
        <div key={i} className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden group">
          <div className="h-48 overflow-hidden relative">
            <img src={evt.img} alt={evt.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute top-4 right-4 bg-luxera-gold text-luxera-navy text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">{evt.status}</div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-serif text-white mb-2">{evt.title}</h3>
            <div className="flex flex-col gap-2 text-sm text-gray-400 mb-6">
              <span className="flex items-center gap-2"><Calendar size={14} className="text-luxera-gold"/> {evt.date}</span>
              <span className="flex items-center gap-2"><MapPin size={14} className="text-luxera-gold"/> {evt.loc}</span>
            </div>
            <button className="w-full bg-white/10 text-white font-bold py-3 rounded-xl hover:bg-luxera-gold hover:text-luxera-navy transition-colors">Katıl</button>
          </div>
        </div>
      ))}
    </motion.div>
  );

  return (
    <div className="bg-luxera-navy min-h-screen text-white pt-24 pb-12">
      <SEO title="Yönetim Paneli | Luxera Towers" description="Luxera Towers dijital yönetim paneli." />

      <div className="max-w-[95rem] mx-auto px-4 md:px-6 h-full flex flex-col md:flex-row gap-8">
        
        {/* HIERARCHICAL SIDEBAR */}
        <div className="w-full md:w-64 lg:w-72 shrink-0">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md sticky top-32 shadow-2xl h-[calc(100vh-10rem)] overflow-y-auto custom-scrollbar">
            
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
              <div className="w-12 h-12 bg-luxera-gold/20 rounded-full flex items-center justify-center border border-luxera-gold/30 shrink-0">
                <User size={20} className="text-luxera-gold" />
              </div>
              <div className="overflow-hidden">
                <h3 className="font-serif text-white truncate">Eyüp S.</h3>
                <p className="text-luxera-gold text-xs tracking-widest uppercase font-semibold">A Blok - Daire 42</p>
              </div>
            </div>

            <nav className="flex flex-col gap-6">
              {menuCategories.map((category, catIndex) => (
                <div key={catIndex}>
                  <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3 px-2">{category.title}</h4>
                  <div className="flex flex-col gap-1">
                    {category.items.map(item => (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 text-sm ${
                          activeTab === item.id 
                          ? 'bg-luxera-gold/10 text-luxera-gold border border-luxera-gold/20 font-semibold' 
                          : 'text-gray-400 hover:bg-white/5 hover:text-white border border-transparent'
                        }`}
                      >
                        <span className={activeTab === item.id ? 'text-luxera-gold' : 'text-gray-500'}>{item.icon}</span>
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </nav>

            <div className="mt-8 pt-6 border-t border-white/10">
              <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-2.5 w-full text-left text-red-400 hover:bg-red-400/10 rounded-xl transition-colors text-sm">
                <LogOut size={18} /> Çıkış Yap
              </button>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="flex-1 min-w-0">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md mb-6 flex justify-between items-center">
            <h2 className="text-xl md:text-2xl font-serif text-white ml-2">{getTabLabel(activeTab)}</h2>
            <button className="relative p-2 text-gray-300 hover:text-white transition-colors bg-black/40 rounded-full border border-white/10">
              <Bell size={18} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-luxera-navy"></span>
            </button>
          </div>

          <div className="pb-12">
            <AnimatePresence mode="wait">
              {activeTab === 'ozet' && <OzetModule />}
              {activeTab === 'finans' && <FinansModule />}
              {activeTab === 'smart-home' && <SmartHomeModule />}
              {activeTab === 'ziyaretci' && <ZiyaretciModule />}
              {activeTab === 'kargolar' && <KargolarModule />}
              {activeTab === 'talepler' && <TaleplerModule />}
              {activeTab === 'rezervasyonlar' && <RezervasyonlarModule />}
              {activeTab === 'konsiyerj' && <KonsiyerjModule />}
              {activeTab === 'kameralar' && <KameralarModule />}
              {activeTab === 'sarj' && <SarjModule />}
              {activeTab === 'etkinlikler' && <EtkinliklerModule />}
              
              {/* Fallback for Settings/History etc */}
              {['gecmis-islemler'].includes(activeTab) && (
                <motion.div key="fallback" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} className="bg-white/5 border border-white/10 rounded-3xl p-16 backdrop-blur-md flex flex-col items-center justify-center text-center h-[400px]">
                  <div className="w-16 h-16 bg-black/40 rounded-full flex items-center justify-center text-luxera-gold mb-6 border border-white/10"><Settings size={28} /></div>
                  <h3 className="text-xl font-serif text-white mb-2">{getTabLabel(activeTab)} yükleniyor...</h3>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
