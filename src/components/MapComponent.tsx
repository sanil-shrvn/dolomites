import { useEffect, useRef } from 'react';
import L from 'leaflet';
import { Waypoint } from '../types';

interface MapComponentProps {
  waypoints: Waypoint[];
  dayId: number;
}

export default function MapComponent({ waypoints, dayId }: MapComponentProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);
  const polylineRef = useRef<L.Polyline | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Initialize map if not already initialized
    if (!mapRef.current) {
      // Create Leaflet map. We use CartoDB Positron for a super clean, elegant, high-contrast light map,
      // or CartoDB Dark Matter for dark mode if requested.
      // Let's use standard CartoDB Positron as it looks incredibly modern, Swiss-style, and clean.
      mapRef.current = L.map(mapContainerRef.current, {
        zoomControl: true,
        attributionControl: false,
      }).setView([46.5, 11.5], 8);

      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
      }).addTo(mapRef.current);
    }

    const map = mapRef.current;

    // Clear previous markers
    markersRef.current.forEach((m) => m.remove());
    markersRef.current = [];

    // Clear previous path polyline
    if (polylineRef.current) {
      polylineRef.current.remove();
      polylineRef.current = null;
    }

    if (!waypoints || waypoints.length === 0) return;

    // 1. Create waypoints and add markers
    const latLngs: L.LatLngExpression[] = [];

    waypoints.forEach((wp, index) => {
      const coords = wp.coordinates;
      latLngs.push(coords);

      // Determine Emoji/Letter based on type
      let emoji = '📍';
      let colorClass = 'bg-slate-600 ring-slate-400';
      if (wp.type === 'hotel') {
        emoji = '🏨';
        colorClass = 'bg-slate-800 ring-slate-500';
      } else if (wp.type === 'hiking') {
        emoji = '🥾';
        colorClass = 'bg-emerald-700 ring-emerald-400';
      } else if (wp.type === 'sightseeing') {
        emoji = '📸';
        colorClass = 'bg-emerald-600 ring-emerald-300';
      } else if (wp.type === 'transit' || wp.type === 'gondola' || wp.type === 'car') {
        emoji = '🚌';
        colorClass = 'bg-slate-700 ring-slate-500';
      } else if (wp.type === 'airport') {
        emoji = '✈️';
        colorClass = 'bg-slate-900 ring-slate-600';
      }

      // Custom Tailwind-styled Leaflet Icon
      const customIcon = L.divIcon({
        html: `
          <div class="relative flex items-center justify-center w-9 h-9 rounded-full ${colorClass} text-white shadow-xl border-2 border-white ring-2 ring-opacity-60 transition-transform duration-300 hover:scale-110">
            <span class="text-base leading-none">${emoji}</span>
            <div class="absolute -top-1 -right-1 w-5 h-5 bg-white text-slate-800 rounded-full border border-slate-200 text-[10px] font-extrabold flex items-center justify-center shadow-sm">
              ${index + 1}
            </div>
          </div>
        `,
        className: 'custom-leaflet-marker',
        iconSize: [36, 36],
        iconAnchor: [18, 18],
      });

      // Create and bind marker
      const marker = L.marker(coords, { icon: customIcon })
        .addTo(map)
        .bindPopup(`
          <div class="font-sans p-1 text-slate-800">
            <div class="text-[10px] uppercase font-bold text-slate-400 tracking-wider">${wp.type || 'Location'} #${index + 1}</div>
            <div class="font-bold text-sm text-slate-900 leading-tight mb-1">${wp.name}</div>
            ${wp.description ? `<div class="text-xs text-slate-600 leading-relaxed">${wp.description}</div>` : ''}
          </div>
        `);

      markersRef.current.push(marker);
    });

    // 2. Draw connecting route line (Polyline) if there are 2 or more waypoints
    if (latLngs.length >= 2) {
      const polyline = L.polyline(latLngs, {
        color: '#059669', // Emerald-600
        weight: 4,
        opacity: 0.8,
        dashArray: '8, 8', // Dashed line for route path
        lineJoin: 'round',
      }).addTo(map);

      polylineRef.current = polyline;
    }

    // 3. Zoom/Pan to fit the bounds of all markers for the active day
    try {
      const bounds = L.latLngBounds(latLngs);
      map.fitBounds(bounds, {
        padding: [40, 40],
        maxZoom: 14,
        animate: true,
        duration: 0.8,
      });
    } catch (e) {
      console.warn('Error fitting map bounds:', e);
    }

  }, [waypoints, dayId]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
      <div ref={mapContainerRef} className="w-full h-full" style={{ minHeight: '350px' }} />
      <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-slate-200/80 shadow-sm z-[1000] text-[10px] font-medium text-slate-600 flex items-center gap-2">
        <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        Interactive routes and stops plotted automatically
      </div>
    </div>
  );
}
