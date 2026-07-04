export interface TimelineItem {
  time: string;
  activity: string;
  description?: string;
  icon?: 'flight' | 'train' | 'coffee' | 'hiking' | 'gondola' | 'hotel' | 'meal' | 'car' | 'sightseeing' | 'sunset' | 'sunrise' | 'alert';
}

export interface Waypoint {
  name: string;
  coordinates: [number, number];
  description?: string;
  type?: 'hotel' | 'hiking' | 'transit' | 'sightseeing' | 'airport' | 'gondola' | 'meal' | 'car' | 'coffee';
}

export interface Ticket {
  name: string;
  url: string;
}

export interface ItineraryDay {
  id: number;
  date: string;
  title: string;
  hotel: string;
  travel: string;
  timeline: TimelineItem[];
  waypoints: Waypoint[];
  path?: [number, number][];
  notes?: string[];
  tickets?: Ticket[];
  alerts?: string[];
}

export interface PackingItem {
  name: string;
  category: 'Gear' | 'Clothing' | 'Documents' | 'Electronics' | 'Other';
  requiredForDay?: string;
  checked: boolean;
}
