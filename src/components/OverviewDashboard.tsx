import { useState, useEffect } from 'react';
import { 
  Calendar, 
  MapPin, 
  Compass, 
  AlertTriangle, 
  CheckSquare, 
  Car, 
  Backpack, 
  TrendingUp,
  ExternalLink,
  Milestone
} from 'lucide-react';
import { ITINERARY_DATA, INITIAL_PACKING_LIST } from '../data';
import { Waypoint, PackingItem } from '../types';
import MapComponent from './MapComponent';

interface OverviewDashboardProps {
  onSelectDay: (id: number) => void;
}

export default function OverviewDashboard({ onSelectDay }: OverviewDashboardProps) {
  const [packingList, setPackingList] = useState<PackingItem[]>(() => {
    const saved = localStorage.getItem('dolomites_packing_list');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return INITIAL_PACKING_LIST;
  });

  useEffect(() => {
    localStorage.setItem('dolomites_packing_list', JSON.stringify(packingList));
  }, [packingList]);

  const togglePackingItem = (index: number) => {
    const updated = [...packingList];
    updated[index].checked = !updated[index].checked;
    setPackingList(updated);
  };

  // Master waypoints for the global trip overview map
  const masterWaypoints: Waypoint[] = [
    { name: 'Zurich, Switzerland', coordinates: [47.3769, 8.5417], type: 'hotel', description: 'Swiss Base (July 10-11)' },
    { name: 'Grindelwald, Alps', coordinates: [46.6242, 8.0414], type: 'hiking', description: 'Cliff Walk Day Trip' },
    { name: 'Bolzano, Italy', coordinates: [46.4983, 11.3548], type: 'hotel', description: 'Dolomites Gateway Base' },
    { name: 'Ortisei, Val Gardena', coordinates: [46.5743, 11.6742], type: 'hotel', description: 'Hiking Hub (July 13-15)' },
    { name: 'Venice, Italy', coordinates: [45.4408, 12.3155], type: 'hotel', description: 'Car Pickup & Canal Stay' },
    { name: 'Venas di Cadore (Cortina)', coordinates: [46.4132, 12.2828], type: 'hotel', description: 'Dolomites Airbnb (July 18-22)' },
    { name: 'Milan, Italy', coordinates: [45.4642, 9.1900], type: 'hotel', description: 'Final Stop & Return Flight' }
  ];

  // Calculated stats
  const totalHikes = 9; 
  const packedPercent = Math.round(
    (packingList.filter(item => item.checked).length / packingList.length) * 100
  );

  return (
    <div className="space-y-6 md:space-y-8 animate-fade-in" id="overview-dashboard">
      
      {/* 1. TOP BENTO GRID: QUICK STATS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4" id="stats-grid">
        
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center gap-4 hover:border-slate-400 transition-all duration-300">
          <div className="p-3 rounded-xl bg-slate-100 text-slate-800 shrink-0">
            <Calendar className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Duration</div>
            <div className="text-xl font-bold text-slate-950 mt-0.5 leading-none">17 Days</div>
            <div className="text-[10px] text-slate-500 mt-1 truncate">July 10 – July 26</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center gap-4 hover:border-emerald-600 transition-all duration-300">
          <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 shrink-0">
            <Compass className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Alpine Hikes</div>
            <div className="text-xl font-bold text-emerald-950 mt-0.5 leading-none">{totalHikes} Tracks</div>
            <div className="text-[10px] text-emerald-600 font-semibold mt-1 truncate">Seceda, Tre Cime & more</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center gap-4 hover:border-slate-400 transition-all duration-300">
          <div className="p-3 rounded-xl bg-slate-100 text-slate-800 shrink-0">
            <Car className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Transit Modality</div>
            <div className="text-xl font-bold text-slate-950 mt-0.5 leading-none">Train & Car</div>
            <div className="text-[10px] text-slate-500 mt-1 truncate">Self-drive Venice to Milan</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center gap-4 hover:border-emerald-600 transition-all duration-300">
          <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 shrink-0">
            <Backpack className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Gear Checklist</div>
            <div className="text-xl font-bold text-emerald-950 mt-0.5 leading-none">{packedPercent}% Ready</div>
            <div className="text-[10px] text-emerald-600 font-semibold mt-1 truncate">
              {packingList.filter(i => i.checked).length} of {packingList.length} items packed
            </div>
          </div>
        </div>

      </div>

      {/* 2. CRITICAL WARNINGS & LOGISTICS BLOCK */}
      <div className="bg-red-50/70 border-l-4 border-red-500 rounded-r-2xl p-6 shadow-sm" id="critical-logistics">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-red-100 text-red-700 rounded-xl mt-0.5 shrink-0">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div className="space-y-4 w-full">
            <div>
              <h3 className="font-bold text-slate-900 text-base leading-none">Critical Trip Logistics & Alpine Prep Required</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Before commencing the expedition, confirm you satisfy these high-priority guidelines to prevent transport, lodging, or safety issues:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4" id="warning-subcards">
              
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-900 text-white text-[9px] font-mono font-semibold uppercase">
                    July 17 • Car Hire
                  </span>
                  <h4 className="font-bold text-slate-800 text-xs mt-2 mb-1">Rental Car Pick Up (Venice)</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Piazzale Roma hub. Bring a physical credit card under the driver name and your International Driving Permit (IDP).
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-red-600 text-white text-[9px] font-mono font-semibold uppercase">
                    July 21 • Road Block
                  </span>
                  <h4 className="font-bold text-slate-800 text-xs mt-2 mb-1">Lago di Braies Closures</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Strictly no driving allowed to Braies between <strong>9:00 AM & 4:00 PM</strong>. Arrive before 8:30 AM or book shuttle passes early.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-700 text-white text-[9px] font-mono font-semibold uppercase">
                    July 22 • Tunnel Hike
                  </span>
                  <h4 className="font-bold text-slate-800 text-xs mt-2 mb-1">Lagazuoi WW1 Tunnels</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Descent is steep and pitch-black inside raw bedrock. A <strong>helmet, harness, and headlamp</strong> are mandatory.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* 3. MASTER MAP & PACKING CHECKLIST SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="master-visual-layout">
        
        {/* Left Column: Master Route Map */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-4">
          <div>
            <h3 className="text-lg font-light text-slate-900 tracking-tight flex items-center gap-2">
              <Milestone className="w-5 h-5 text-emerald-700 shrink-0" />
              Master Route Map (17 Days)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Visualizing the complete expedition trajectory from Zurich, crossing South Tyrol valleys, down to Venice, and terminating in Milan.
            </p>
          </div>
          <div className="h-[430px] w-full" id="master-map-frame">
            <MapComponent waypoints={masterWaypoints} dayId={999} />
          </div>
        </div>

        {/* Right Column: Gear & Packing List */}
        <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
          <div>
            <h3 className="text-base font-semibold text-slate-900 flex items-center gap-2">
              <CheckSquare className="w-4 h-4 text-emerald-700" />
              Alpine Gear & Document Packing List
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Tick off vital items for mountain safety. Checked progress is cached locally in your browser.
            </p>
          </div>

          <div className="space-y-2 max-h-[350px] overflow-y-auto pr-1" id="packing-checklist-flow">
            {packingList.map((item, index) => (
              <div 
                key={index} 
                onClick={() => togglePackingItem(index)}
                className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
                  item.checked 
                    ? 'bg-emerald-50/40 border-emerald-100 text-slate-400' 
                    : 'bg-slate-50/50 border-slate-200 hover:border-slate-300 text-slate-800'
                }`}
              >
                <input 
                  type="checkbox" 
                  checked={item.checked} 
                  onChange={() => {}} // Handled by outer block click
                  className="mt-0.5 h-4 w-4 text-emerald-700 border-slate-300 rounded focus:ring-emerald-500"
                />
                <div className="flex-1 min-w-0">
                  <div className={`text-xs font-semibold ${item.checked ? 'line-through opacity-60' : 'text-slate-800'}`}>
                    {item.name}
                  </div>
                  <div className="flex items-center gap-2 mt-1.5 text-[9px]">
                    <span className={`px-1.5 py-0.5 rounded font-bold uppercase tracking-wider ${
                      item.category === 'Gear' ? 'bg-slate-900 text-white' :
                      item.category === 'Documents' ? 'bg-emerald-100 text-emerald-800' :
                      item.category === 'Electronics' ? 'bg-slate-100 border border-slate-200 text-slate-700' :
                      'bg-slate-100 text-slate-600'
                    }`}>
                      {item.category}
                    </span>
                    {item.requiredForDay && (
                      <span className="text-slate-500 italic">Day {item.requiredForDay} focus</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex justify-between items-center text-[10px] text-slate-500">
            <span>{packingList.filter(i => i.checked).length} of {packingList.length} completed</span>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setPackingList(INITIAL_PACKING_LIST);
              }}
              className="text-emerald-700 hover:text-emerald-800 font-bold uppercase tracking-widest text-[9px]"
            >
              Reset Checklist
            </button>
          </div>

        </div>

      </div>

      {/* 4. CALENDARS GRID: HOTELS & TRANSITS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="calendars-block">
        
        {/* Lodging Overnight Base Calendar */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex justify-between items-center pb-2 border-b border-slate-100">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-700" />
              Overnight Lodging Schedule
            </h3>
            <span className="text-[9px] px-2 py-0.5 bg-slate-100 border border-slate-200 rounded text-slate-500 font-mono">17 Stays</span>
          </div>
          <div className="divide-y divide-slate-100 max-h-[300px] overflow-y-auto pr-1">
            {ITINERARY_DATA.map((day) => (
              <div 
                key={day.id} 
                onClick={() => onSelectDay(day.id)}
                className="py-3 flex items-center justify-between hover:bg-slate-50 px-2 rounded-lg transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <span className="w-12 text-xs font-mono font-bold text-slate-400">{day.date}</span>
                  <div className="text-xs font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">{day.title.split(' (')[0]}</div>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-semibold text-slate-700 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-md truncate max-w-[140px]">
                  <MapPin className="w-3 h-3 text-emerald-700 shrink-0" />
                  <span className="truncate">{day.hotel.replace('N/A transport ', '').split('(')[0].trim()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Travel Transit Calendar */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex justify-between items-center pb-2 border-b border-slate-100">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <Compass className="w-4 h-4 text-emerald-700" />
              Transit Log & Route Details
            </h3>
            <span className="text-[9px] px-2 py-0.5 bg-slate-100 border border-slate-200 rounded text-slate-500 font-mono">Day Routes</span>
          </div>
          <div className="divide-y divide-slate-100 max-h-[300px] overflow-y-auto pr-1">
            {ITINERARY_DATA.map((day) => (
              <div 
                key={day.id} 
                onClick={() => onSelectDay(day.id)}
                className="py-3 flex items-center justify-between hover:bg-slate-50 px-2 rounded-lg transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <span className="w-12 text-xs font-mono font-bold text-slate-400">{day.date}</span>
                  <div className="text-xs font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">{day.title.split(' (')[0]}</div>
                </div>
                <div className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded border ${
                  day.travel.includes('Leave') 
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-800' 
                    : 'bg-slate-100 border-slate-200 text-slate-600'
                } truncate max-w-[150px]`}>
                  {day.travel}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
