import { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Coffee, 
  ExternalLink, 
  Compass, 
  Plane, 
  Train, 
  Utensils, 
  Sun, 
  Sparkles, 
  Flame, 
  CheckCircle,
  AlertCircle,
  HelpCircle,
  Info,
  Menu,
  ChevronRight,
  CloudSun,
  Map,
  X
} from 'lucide-react';
import { ITINERARY_DATA } from './data';
import OverviewDashboard from './components/OverviewDashboard';
import MapComponent from './components/MapComponent';

export default function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'daily' | 'eating-rules'>('dashboard');
  const [selectedDayId, setSelectedDayId] = useState<number>(13); // Default to July 13 (Seceda)
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const activeDay = ITINERARY_DATA.find((day) => day.id === selectedDayId) || ITINERARY_DATA[0];

  const handleSelectDay = (id: number) => {
    setSelectedDayId(id);
    setActiveTab('daily');
    setMobileSidebarOpen(false);
  };

  // Resolve timeline icons dynamically to match the premium theme
  const getTimelineIcon = (iconName?: string) => {
    switch (iconName) {
      case 'flight':
        return <Plane className="w-3.5 h-3.5 text-rose-600" />;
      case 'train':
        return <Train className="w-3.5 h-3.5 text-slate-700" />;
      case 'coffee':
        return <Coffee className="w-3.5 h-3.5 text-emerald-800" />;
      case 'gondola':
        return <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />;
      case 'hotel':
        return <MapPin className="w-3.5 h-3.5 text-slate-800" />;
      case 'meal':
        return <Utensils className="w-3.5 h-3.5 text-emerald-700" />;
      case 'sunrise':
      case 'sunset':
        return <Sun className="w-3.5 h-3.5 text-amber-500" />;
      default:
        return <Compass className="w-3.5 h-3.5 text-slate-600" />;
    }
  };

  // Helper dictionary to map weather dynamically to provide realistic alpine stats
  const getDayWeather = (dayId: number) => {
    const weatherMap: Record<number, { temp: string; desc: string; icon: string }> = {
      10: { temp: '24°C', desc: 'Sunny & Clear', icon: '☀️' },
      11: { temp: '22°C', desc: 'Sunny', icon: '☀️' },
      12: { temp: '25°C', desc: 'Pleasant & Warm', icon: '☀️' },
      13: { temp: '18°C', desc: 'Clear & Crisp', icon: '☀️' },
      14: { temp: '19°C', desc: 'Partly Cloudy', icon: '⛅' },
      15: { temp: '20°C', desc: 'Bright Skies', icon: '☀️' },
      16: { temp: '21°C', desc: 'Rain Showers', icon: '🌧️' },
      17: { temp: '26°C', desc: 'Warm & Sunny', icon: '☀️' },
      18: { temp: '23°C', desc: 'Overcast & Cool', icon: '☁️' },
      19: { temp: '16°C', desc: 'Windy & Crisp', icon: '💨' },
      20: { temp: '17°C', desc: 'Perfectly Clear', icon: '☀️' },
      21: { temp: '15°C', desc: 'Morning Showers', icon: '🌧️' },
      22: { temp: '18°C', desc: 'Clear & Cold', icon: '☀️' },
      23: { temp: '19°C', desc: 'Partly Cloudy', icon: '⛅' },
      24: { temp: '22°C', desc: 'Bright Skies', icon: '☀️' },
      25: { temp: '27°C', desc: 'Warm & Sunny', icon: '☀️' },
      26: { temp: '28°C', desc: 'Clear Departure', icon: '☀️' },
    };
    return weatherMap[dayId] || { temp: '18°C', desc: 'Clear', icon: '☀️' };
  };

  const weather = getDayWeather(selectedDayId);

  return (
    <div className="flex h-screen bg-[#F4F4F2] text-slate-800 font-sans overflow-hidden" id="app-container">
      
      {/* 1. LEFT NAVIGATION: DATE LIST (Desktop Sidebar) */}
      <nav 
        className="w-56 lg:w-64 bg-slate-900 text-white flex flex-col border-r border-slate-800 shrink-0 hidden md:flex"
        id="desktop-sidebar"
      >
        <div className="p-6 border-b border-slate-800 shrink-0">
          <h1 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Dolomites '26</h1>
          <p className="text-xl font-serif italic mt-1 text-emerald-400">Expedition</p>
        </div>
        
        <div className="flex-1 overflow-y-auto overflow-x-hidden py-3" id="sidebar-day-list">
          <div className="px-4 py-2 text-[10px] uppercase font-bold tracking-widest text-slate-500">
            Expedition Days
          </div>
          {ITINERARY_DATA.map((day) => {
            const isSelected = activeTab === 'daily' && day.id === selectedDayId;
            const dateParts = day.date.split(' ');
            const month = dateParts[0].substring(0, 3).toUpperCase();
            const dateNum = dateParts[1];

            return (
              <div
                key={day.id}
                onClick={() => handleSelectDay(day.id)}
                className={`px-4 py-3 cursor-pointer border-b border-slate-800/50 flex items-center gap-3 transition-all ${
                  isSelected
                    ? 'bg-emerald-950/90 border-l-4 border-emerald-400 text-white'
                    : 'hover:bg-slate-800/80 text-slate-400 hover:text-white'
                }`}
              >
                <div className="text-center w-8 shrink-0">
                  <p className={`text-[10px] font-mono leading-none ${isSelected ? 'text-emerald-400' : 'text-slate-500'}`}>
                    {month}
                  </p>
                  <p className="text-sm font-bold leading-none mt-1">{dateNum}</p>
                </div>
                <div className="min-w-0 flex-1">
                  <p className={`text-xs font-semibold truncate ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {day.title.replace(/^(Early Morning Flight - |Zurich \()?/, '').split(' (')[0]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-4 bg-slate-950 border-t border-slate-800 shrink-0" id="sidebar-footer">
          <p className="text-[9px] uppercase tracking-widest text-slate-500 leading-none">Current Base</p>
          <p className="text-xs font-semibold text-emerald-400 mt-1.5 truncate">
            {activeDay.hotel.replace('N/A transport ', '').split(' (')[0]}
          </p>
        </div>
      </nav>

      {/* Mobile Drawer Backdrop */}
      {mobileSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 z-[3000] md:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar (Slide-out Drawer) */}
      <div 
        className={`fixed top-0 bottom-0 left-0 w-64 bg-slate-900 text-white z-[3001] flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
          mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        id="mobile-sidebar"
      >
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <div>
            <h1 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Dolomites '26</h1>
            <p className="text-lg font-serif italic text-emerald-400">Expedition</p>
          </div>
          <button 
            onClick={() => setMobileSidebarOpen(false)}
            className="p-1 rounded-lg text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto py-2">
          {ITINERARY_DATA.map((day) => {
            const isSelected = activeTab === 'daily' && day.id === selectedDayId;
            return (
              <div
                key={day.id}
                onClick={() => handleSelectDay(day.id)}
                className={`px-4 py-3 cursor-pointer border-b border-slate-800 flex items-center gap-3 ${
                  isSelected ? 'bg-emerald-950 text-white border-l-4 border-emerald-400' : 'text-slate-300'
                }`}
              >
                <div className="text-center w-8 shrink-0">
                  <p className="text-[9px] font-mono leading-none text-slate-500">
                    {day.date.split(' ')[0].substring(0, 3).toUpperCase()}
                  </p>
                  <p className="text-xs font-bold mt-0.5">{day.date.split(' ')[1]}</p>
                </div>
                <p className="text-xs font-medium truncate">{day.title}</p>
              </div>
            );
          })}
        </div>

        <div className="p-4 bg-slate-950 border-t border-slate-800">
          <p className="text-[9px] uppercase tracking-widest text-slate-500">Overnight Hub</p>
          <p className="text-xs font-semibold text-emerald-400 truncate mt-1">{activeDay.hotel}</p>
        </div>
      </div>

      {/* 2. MAIN CONTENT AREA: DAILY ITINERARY & VIEWS */}
      <main className="flex-1 flex flex-col min-w-0 h-full overflow-hidden" id="main-content-wrapper">
        
        {/* MOBILE TOP BAR */}
        <div className="bg-slate-900 text-white px-4 py-3 flex md:hidden items-center justify-between shrink-0" id="mobile-top-bar">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setMobileSidebarOpen(true)}
              className="p-1 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 leading-none">Expedition Day</p>
              <p className="text-xs font-semibold text-emerald-400 mt-0.5">{activeDay.date} — {activeDay.title.split(' (')[0]}</p>
            </div>
          </div>
          <div className="flex bg-slate-800 p-0.5 rounded-lg border border-slate-700">
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${
                activeTab === 'dashboard' ? 'bg-emerald-600 text-white' : 'text-slate-400'
              }`}
            >
              Map
            </button>
            <button 
              onClick={() => setActiveTab('daily')}
              className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${
                activeTab === 'daily' ? 'bg-emerald-600 text-white' : 'text-slate-400'
              }`}
            >
              Plan
            </button>
          </div>
        </div>

        {/* HEADER AREA (Geometric Balance Layout) */}
        <header 
          className="bg-white border-b border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 py-6 md:px-10 md:py-6 gap-4 shrink-0 shadow-sm"
          id="main-app-header"
        >
          <div>
            <div className="flex items-center gap-3 mb-1.5">
              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded uppercase tracking-wider">
                {activeTab === 'dashboard' ? 'Overview' : activeTab === 'eating-rules' ? 'Dining' : 'Active Route'}
              </span>
              <h2 className="text-2xl md:text-3xl font-light text-slate-900 tracking-tight leading-none">
                {activeTab === 'dashboard' && 'Dolomites Summer Expedition'}
                {activeTab === 'daily' && activeDay.title}
                {activeTab === 'eating-rules' && 'Rules for Eating Outside'}
              </h2>
            </div>
            <p className="text-slate-500 text-xs md:text-sm italic font-serif">
              {activeTab === 'dashboard' && 'Zurich → Bolzano → Ortisei → Venice → Cortina → Milan'}
              {activeTab === 'daily' && (activeDay.travel || 'Expedition schedule details')}
              {activeTab === 'eating-rules' && 'Outdoor dining etiquette, rifugio rules & high altitude guidelines'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            {/* Nav Switcher */}
            <nav className="flex bg-slate-100 p-1 rounded-xl border border-slate-200 shrink-0 self-center" id="nav-tabs">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                  activeTab === 'dashboard'
                    ? 'bg-white text-slate-900 shadow-sm border border-slate-200/50'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab('daily')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                  activeTab === 'daily'
                    ? 'bg-white text-slate-900 shadow-sm border border-slate-200/50'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Daily Schedule
              </button>
              <button
                onClick={() => setActiveTab('eating-rules')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all flex items-center gap-1 ${
                  activeTab === 'eating-rules'
                    ? 'bg-white text-slate-900 shadow-sm border border-slate-200/50'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Utensils className="w-3.5 h-3.5" />
                Dining Rules
              </button>
            </nav>

            {/* Weather / Subtitle block */}
            <div className="text-right pl-4 border-l border-slate-200 hidden md:block shrink-0">
              <p className="text-[10px] uppercase text-slate-400 tracking-widest">Active Weather</p>
              <p className="text-lg font-semibold text-slate-800 mt-0.5">
                {weather.temp} <span className="text-emerald-600 font-normal">{weather.icon} {weather.desc}</span>
              </p>
            </div>
          </div>
        </header>

        {/* VIEW BODY SCROLLER */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-[#F4F4F2]" id="content-container-scroller">
          
          {/* DASHBOARD TAB */}
          {activeTab === 'dashboard' && (
            <OverviewDashboard onSelectDay={handleSelectDay} />
          )}

          {/* DAILY SCHEDULE TAB */}
          {activeTab === 'daily' && (
            <div className="space-y-6 md:space-y-8 animate-fade-in" id="daily-explorer-pane">
              
              {/* Horizontal scroll Day Switcher strip (Visible on all viewports, helpful fallback) */}
              <div 
                className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm overflow-x-auto whitespace-nowrap scrollbar-none flex gap-2 items-center shrink-0" 
                id="horizontal-switcher"
              >
                {ITINERARY_DATA.map((day) => {
                  const isSelected = day.id === selectedDayId;
                  const [month, dateNum] = day.date.split(' ');
                  return (
                    <button
                      key={day.id}
                      onClick={() => setSelectedDayId(day.id)}
                      className={`inline-flex flex-col items-center justify-center px-4 py-2 rounded-xl border transition-all cursor-pointer min-w-[70px] ${
                        isSelected
                          ? 'bg-slate-900 border-slate-900 text-white font-bold ring-2 ring-emerald-500/10'
                          : 'bg-slate-50/50 border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-100/50'
                      }`}
                    >
                      <span className="text-[9px] font-bold uppercase tracking-wider opacity-90">{month.substring(0, 3)}</span>
                      <span className="text-lg font-bold leading-none mt-0.5">{dateNum}</span>
                    </button>
                  );
                })}
              </div>

              {/* Grid content breakdown */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="daily-content-grid">
                
                {/* LEFT COLUMN: HOURLY BREAKDOWN & TICKETS */}
                <section className="lg:col-span-5 space-y-6">
                  
                  {/* General day statistics card */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Day Overview</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/50">
                        <p className="text-[10px] uppercase font-bold text-slate-400">Night Base</p>
                        <p className="text-xs font-bold text-slate-800 mt-1 truncate">{activeDay.hotel}</p>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/50">
                        <p className="text-[10px] uppercase font-bold text-slate-400">Transit Mode</p>
                        <p className="text-xs font-bold text-slate-800 mt-1 truncate">{activeDay.travel}</p>
                      </div>
                    </div>
                  </div>

                  {/* Required Passes / Online bookings */}
                  {activeDay.tickets && activeDay.tickets.length > 0 && (
                    <div className="bg-emerald-50/55 border border-emerald-200 rounded-2xl p-6 space-y-3.5 shadow-sm">
                      <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-800 flex items-center gap-2">
                        <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                        Booking Portals & Required Passes
                      </h3>
                      <div className="space-y-2">
                        {activeDay.tickets.map((t, idx) => (
                          <a
                            key={idx}
                            href={t.url}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-between p-3.5 bg-white hover:bg-emerald-50/30 rounded-xl border border-emerald-200 text-xs font-semibold text-emerald-950 transition-colors"
                          >
                            <span className="truncate pr-4">{t.name}</span>
                            <ExternalLink className="w-3.5 h-3.5 shrink-0 text-emerald-700" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Critical Safety Warning alerts */}
                  {activeDay.alerts && activeDay.alerts.map((alert, idx) => (
                    <div 
                      key={idx} 
                      className="bg-red-50/80 border-l-4 border-red-500 text-slate-900 p-5 rounded-r-2xl shadow-sm space-y-1.5"
                    >
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                        <h4 className="font-bold text-xs uppercase tracking-wider text-red-800">Logistic & Safety Alert</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-sans">{alert}</p>
                    </div>
                  ))}

                  {/* Timeline listing */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Hour-by-Hour Timeline</h3>
                    
                    <div className="space-y-5" id="timeline-listing">
                      {activeDay.timeline.map((item, index) => {
                        const isSpecialType = ['gondola', 'hiking', 'hotel', 'flight'].includes(item.icon || '');
                        
                        return (
                          <div key={index} className="flex gap-4 items-start">
                            <div className="w-20 text-right pt-0.5 shrink-0">
                              <p className="text-[10px] font-mono font-semibold text-slate-400">{item.time}</p>
                            </div>
                            
                            <div className={`flex-1 pb-4 border-b border-slate-100 ${
                              isSpecialType 
                                ? 'bg-emerald-50/30 p-3.5 rounded-xl border border-emerald-200/60' 
                                : ''
                            }`}>
                              <div className="flex items-center gap-2">
                                <span className="shrink-0 p-1 bg-slate-100 rounded">
                                  {getTimelineIcon(item.icon)}
                                </span>
                                <p className={`font-bold text-xs md:text-sm ${
                                  isSpecialType ? 'text-emerald-900' : 'text-slate-800'
                                }`}>
                                  {item.activity}
                                </p>
                              </div>
                              {item.description && (
                                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.description}</p>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                </section>

                {/* RIGHT COLUMN: INTERACTIVE MAP & WAYPOINTS */}
                <section className="lg:col-span-7 flex flex-col gap-6">
                  
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-3">
                    <div className="flex items-center justify-between px-2 pt-1">
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Route Map Visualization</h3>
                        <p className="text-[10px] text-slate-500 mt-0.5">Click markers on the interactive canvas to inspect stops</p>
                      </div>
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        Day {activeDay.id}
                      </span>
                    </div>

                    <div className="h-[480px] w-full" id="map-container-frame">
                      <MapComponent waypoints={activeDay.waypoints} dayId={activeDay.id} />
                    </div>
                  </div>

                  {/* Scheduled Stops breakdown */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                      Scheduled Stops ({activeDay.waypoints.length})
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="stops-list-grid">
                      {activeDay.waypoints.map((wp, index) => (
                        <div 
                          key={index} 
                          className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-slate-100/80 rounded-xl border border-slate-200/50 transition-colors"
                        >
                          <span className="w-5 h-5 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-[10px] shrink-0">
                            {index + 1}
                          </span>
                          <div className="min-w-0">
                            <div className="text-xs font-bold text-slate-800 truncate">{wp.name}</div>
                            {wp.description && (
                              <div className="text-[9px] text-slate-500 truncate mt-0.5">{wp.description}</div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </section>

              </div>

            </div>
          )}

          {/* EATING RULES TAB */}
          {activeTab === 'eating-rules' && (
            <div className="max-w-3xl mx-auto bg-white p-6 md:p-10 rounded-3xl border border-slate-200 shadow-md space-y-8 animate-fade-in" id="dining-rules-container">
              
              <div className="text-center space-y-2 pb-6 border-b border-slate-100">
                <span className="text-emerald-700 text-xs font-bold uppercase tracking-widest">Dolomites Dining Guide</span>
                <h2 className="text-3xl font-light text-slate-900 tracking-tight font-display">Rules & Etiquette for Eating Outside</h2>
                <p className="text-sm text-slate-500 max-w-lg mx-auto">
                  Dining in the high Italian Alps is a unique privilege. Follow these local regulations to respect nature and optimize your culinary experience.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="rules-grid">
                
                <div className="p-5 bg-emerald-50/50 rounded-2xl border border-emerald-100 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-emerald-100 text-emerald-800 rounded-lg">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-slate-950 text-sm">Carry In, Carry Out (No Litter)</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Naturpark Puez-Odle and Tre Cime regions are UNESCO World Heritage sites. <strong>Always carry back all trash</strong>, including organic wastes like banana peels or apple cores, which decompose incredibly slowly at high, cold altitudes.
                  </p>
                </div>

                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-slate-200 text-slate-800 rounded-lg">
                      <Flame className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-slate-950 text-sm">Strictly NO Open Campfires</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lighting fires outside designated campsite areas is strictly forbidden in the Dolomites nature parks to prevent wildfires and soil destruction. Pack warm clothes or rely on steaming hot rifugio meals instead.
                  </p>
                </div>

                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-slate-200 text-slate-800 rounded-lg">
                      <Info className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-slate-950 text-sm">Rifugio Lunch Dining Etiquette</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Rifugios are rustic mountain homes. Avoid sitting at their outdoor tables to eat your packed sandwiches—tables are reserved for ordering patrons. Take lunch on surrounding boulder fields instead, and always leave space for hikers.
                  </p>
                </div>

                <div className="p-5 bg-emerald-50/50 rounded-2xl border border-emerald-100 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-emerald-100 text-emerald-800 rounded-lg">
                      <Compass className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-slate-950 text-sm">Always Carry Cash</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Many high-altitude cabins (like Rifugio Vandelli or Rifugio Nuvolau) have spotty satellite connection or no telephone lines. They frequently cannot process credit cards. Carry at least <strong>€30-€50 cash per day</strong> for lunches!
                  </p>
                </div>

              </div>

              {/* Tap water section */}
              <div className="bg-emerald-950 text-white rounded-2xl p-6 border border-emerald-900 flex items-start gap-4">
                <div className="p-3 bg-emerald-900 text-emerald-400 rounded-xl shrink-0">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-bold font-serif italic text-emerald-300">Is Mountain Stream Water Safe to Drink?</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    While mountain streams appear crystal clear, they flow through pastures grazed heavily by cows and sheep. Drinking directly from rivers can lead to giardia or bacterial infections. Instead, refill your bottles at designated taps in villages, cable car stations, or inside rifugios, which offer premium, tested spring water.
                  </p>
                </div>
              </div>

            </div>
          )}

          {/* Aesthetic Footer inside the scroll container */}
          <footer className="py-8 mt-12 text-center text-xs text-slate-400/80 border-t border-slate-200" id="main-app-footer">
            <p>🏔️ Dolomites Summer Expedition Planner. Real-time pathing and alpine coordinates tracking.</p>
            <p className="mt-1">Developed for July 10 – July 26, 2026. Have an incredible mountain journey!</p>
          </footer>

        </div>

      </main>

      {/* 3. RIGHT RAIL: QUICK STATS / VERTICAL TRACK INDICATORS */}
      <aside 
        className="w-12 bg-white border-l border-slate-200 hidden xl:flex flex-col items-center justify-between py-10 shrink-0"
        id="desktop-right-rail"
      >
        <div className="[writing-mode:vertical-rl] rotate-180 text-[10px] font-bold tracking-[0.3em] uppercase text-slate-400">
          Europe Tour 2026
        </div>
        
        <div className="flex flex-col gap-6" id="rail-status-dots">
          <div className="w-1.5 h-1.5 bg-slate-200 rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full ring-4 ring-emerald-100 animate-pulse"></div>
          <div className="w-1.5 h-1.5 bg-slate-200 rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-slate-200 rounded-full"></div>
        </div>

        <div className="text-slate-300 hover:text-emerald-600 transition-colors cursor-pointer">
          <Compass className="w-4 h-4" />
        </div>
      </aside>

    </div>
  );
}
