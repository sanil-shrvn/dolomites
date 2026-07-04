import { ItineraryDay, PackingItem } from './types';

export const ITINERARY_DATA: ItineraryDay[] = [
  {
    id: 10,
    date: 'July 10',
    title: 'Early Morning Flight - Zurich',
    hotel: 'Zurich',
    travel: 'Leave for Zurich, Reach Zurich',
    timeline: [
      {
        time: '04:00 AM',
        activity: 'Depart for Airport',
        description: 'Start the journey and head to the airport for the early flight.',
        icon: 'flight',
      },
      {
        time: '02:00 PM',
        activity: 'Arrive in Zurich',
        description: 'Touch down in beautiful Switzerland. Take the airport train to the city center.',
        icon: 'train',
      },
      {
        time: '03:30 PM',
        activity: 'Check in & Unwind',
        description: 'Check in to the Zurich accommodation and freshen up.',
        icon: 'hotel',
      },
      {
        time: '05:00 PM',
        activity: 'Explore Zurich Old Town',
        description: 'Walk along the Limmat river, visit Grossmünster, and check out Lake Zurich viewpoints.',
        icon: 'sightseeing',
      },
      {
        time: '07:30 PM',
        activity: 'Welcome Dinner',
        description: 'Indulge in classic Swiss fondue or local delights in Zurich.',
        icon: 'meal',
      }
    ],
    waypoints: [
      { name: 'Zurich Airport (ZRH)', coordinates: [47.4582, 8.5555], type: 'airport', description: 'Arrival Airport' },
      { name: 'Zurich Old Town', coordinates: [47.3769, 8.5417], type: 'hotel', description: 'Base in Zurich' }
    ]
  },
  {
    id: 11,
    date: 'July 11',
    title: 'Zurich (Grindelwald & Lauterbrunnen Excursion)',
    hotel: 'N/A transport (Overnight transit/travel)',
    travel: 'Leave at night for Bolzano',
    timeline: [
      {
        time: '06:00 AM',
        activity: 'Depart Zurich HB',
        description: 'Board the early morning scenic train heading to Grindelwald.',
        icon: 'train',
      },
      {
        time: '08:30 AM',
        activity: 'Arrive in Grindelwald',
        description: 'Grab a hot coffee and delicious Swiss pastries under the shadow of Eiger.',
        icon: 'coffee',
      },
      {
        time: '09:00 AM',
        activity: 'Gondola to First Peak',
        description: 'Walk to the Grindelwald First gondola station and ride up to the peaks.',
        icon: 'gondola',
      },
      {
        time: '09:30 AM',
        activity: 'First Cliff Walk & Viewpoints',
        description: 'Walk the thrilling metal cliffside walkway. Relax, capture jaw-dropping photos of Swiss Alps.',
        icon: 'sightseeing',
      },
      {
        time: '12:30 PM',
        activity: 'Lunch in Grindelwald',
        description: 'Traditional Swiss Rösti or cheese platters in a beautiful local restaurant.',
        icon: 'meal',
      },
      {
        time: '01:30 PM',
        activity: 'Train to Lauterbrunnen',
        description: 'Scenic train transit down from Grindelwald and into the vertical-cliff valley.',
        icon: 'train',
      },
      {
        time: '02:15 PM',
        activity: 'Explore Lauterbrunnen Valley',
        description: 'Discover the valley of 72 waterfalls. Walk right up behind Staubbach Falls.',
        icon: 'hiking',
      },
      {
        time: '04:30 PM',
        activity: 'Coffee Break & Scenic Relax',
        description: 'Sit in a cozy alpine cafe, admiring the dramatic waterfalls and cliffs.',
        icon: 'coffee',
      },
      {
        time: '07:00 PM',
        activity: 'Dinner in Lauterbrunnen',
        description: 'Hearty Alpine dinner before heading back.',
        icon: 'meal',
      },
      {
        time: '08:00 PM',
        activity: 'Return Train to Zurich',
        description: 'Hop on the evening train to return to Zurich HB.',
        icon: 'train',
      },
      {
        time: '10:15 PM',
        activity: 'Arrive in Zurich & Transit',
        description: 'Retrieve luggage and begin overnight journey/transit towards Bolzano.',
        icon: 'car',
      }
    ],
    waypoints: [
      { name: 'Zurich HB Station', coordinates: [47.3779, 8.5402], type: 'transit' },
      { name: 'Grindelwald First Gondola', coordinates: [46.6242, 8.0414], type: 'gondola', description: 'Gondola to Cliff Walk' },
      { name: 'First Cliff Walk', coordinates: [46.6611, 8.0531], type: 'sightseeing', description: 'Cliff walk views' },
      { name: 'Lauterbrunnen Valley', coordinates: [46.5935, 7.9090], type: 'hiking', description: '72 Waterfalls Valley' },
      { name: 'Staubbach Falls', coordinates: [46.5898, 7.9103], type: 'sightseeing', description: 'Enormous waterfall' }
    ],
    tickets: [
      { name: 'Gondola Tickets - Grindelwald First', url: 'https://www.jungfrau.ch/en-gb/grindelwaldfirst/?utm_source=chatgpt.com' },
      { name: 'SBB Train Tickets - Lauterbrunnen to Zurich', url: 'https://www.sbb.ch/en?stops=Lauterbrunnen_I8507384~Z%C3%BCrich+HB_I8503000&day=2026-07-12&time=20_05&moment=dep&reduction=none' }
    ]
  },
  {
    id: 12,
    date: 'July 12',
    title: 'Bolzano',
    hotel: 'Bolzano',
    travel: 'Bolzano',
    timeline: [
      {
        time: '09:00 AM',
        activity: 'Arrive in Bolzano',
        description: 'Welcome to the gateway of the Dolomites! Check in to your hotel.',
        icon: 'hotel',
      },
      {
        time: '11:00 AM',
        activity: 'Bolzano Old Town Walk',
        description: 'Stroll through the Piazza Walther, explore pastel buildings, and enjoy the bilingual Tyrolean-Italian culture.',
        icon: 'sightseeing',
      },
      {
        time: '02:00 PM',
        activity: 'South Tyrol Archaeology Museum',
        description: 'Visit Ötzi the Iceman, a remarkably preserved 5,300-year-old natural glacier mummy.',
        icon: 'sightseeing',
      },
      {
        time: '07:00 PM',
        activity: 'South Tyrolean Dinner',
        description: 'Dine on dumplings (Knödel) and local wines like Lagrein in an old-world tavern.',
        icon: 'meal',
      }
    ],
    waypoints: [
      { name: 'Bolzano Center', coordinates: [46.4983, 11.3548], type: 'hotel', description: 'Base in Bolzano' },
      { name: 'Piazza Walther', coordinates: [46.4981, 11.3545], type: 'sightseeing' },
      { name: 'Ötzi Museum', coordinates: [46.4998, 11.3491], type: 'sightseeing', description: 'Museum of Archaeology' }
    ]
  },
  {
    id: 13,
    date: 'July 13',
    title: 'Ortisei - Seceda Ridge Hike',
    hotel: 'Ortisei',
    travel: 'Morning leave for Ortisei',
    timeline: [
      {
        time: '07:00 AM',
        activity: 'Breakfast in Bolzano',
        description: 'Fuel up for the premier hiking day.',
        icon: 'meal',
      },
      {
        time: '08:00 AM',
        activity: 'Morning Leave for Ortisei',
        description: 'Travel from Bolzano into Val Gardena to reach Ortisei.',
        icon: 'car',
      },
      {
        time: '08:30 AM',
        activity: 'Cable Car to Seceda',
        description: 'Take the cable car up from Ortisei to the dramatic Seceda summit (2518m).',
        icon: 'gondola',
      },
      {
        time: '09:00 AM',
        activity: 'Seceda Ridgeline Walk',
        description: 'Stroll along the world-famous jagged Ridgeline. Stand directly under the sheer Nordend peaks.',
        icon: 'hiking',
      },
      {
        time: '09:30 AM',
        activity: 'Hike to Pieralongia',
        description: 'Hike the dirt path past the iconic twin giant boulders of Pieralongia.',
        icon: 'hiking',
      },
      {
        time: '11:00 AM',
        activity: 'Reach Rifugio Firenze',
        description: 'Arrive at the beautiful, historic stone refuge nestled in the pastures.',
        icon: 'sightseeing',
      },
      {
        time: '11:30 AM',
        activity: 'Lunch at Rifugio Firenze',
        description: 'Authentic German-Tyrolean alpine house (must-try: Kaiserschmarrn or dumplings!).',
        icon: 'meal',
      },
      {
        time: '12:30 PM',
        activity: 'Descend through Odle Meadows',
        description: 'Traverse the peaceful green Odles pastures beneath the majestic Odle Peaks.',
        icon: 'hiking',
      },
      {
        time: '01:30 PM',
        activity: 'Reach Col Raiser',
        description: 'Walk across the plateau to the Col Raiser cable car station.',
        icon: 'hiking',
      },
      {
        time: '03:00 PM',
        activity: 'Cable Car to Santa Cristina',
        description: 'Ride the Col Raiser gondola down to Santa Cristina village.',
        icon: 'gondola',
      },
      {
        time: '05:00 PM',
        activity: 'Return to Ortisei',
        description: 'Take the quick bus back to your hotel base in Ortisei.',
        icon: 'hotel',
      }
    ],
    waypoints: [
      { name: 'Ortisei Base', coordinates: [46.5743, 11.6742], type: 'hotel', description: 'Your base town' },
      { name: 'Seceda Peak', coordinates: [46.5983, 11.7242], type: 'hiking', description: 'Dramatic ridgeline' },
      { name: 'Pieralongia Boulders', coordinates: [46.5933, 11.7456], type: 'hiking', description: 'Giant rock towers' },
      { name: 'Rifugio Firenze', coordinates: [46.5772, 11.7419], type: 'meal', description: 'Tyrolean lunch spot' },
      { name: 'Col Raiser', coordinates: [46.5694, 11.7375], type: 'gondola', description: 'Gondola station' },
      { name: 'Santa Cristina', coordinates: [46.5590, 11.7142], type: 'transit', description: 'Descent village' }
    ],
    tickets: [
      { name: 'Seceda Cable Car Official Hiking Routes', url: 'https://www.seceda.it/en/hiking' }
    ]
  },
  {
    id: 14,
    date: 'July 14',
    title: 'Ortisei - Sassolungo Circuit',
    hotel: 'Ortisei',
    travel: 'N/A',
    timeline: [
      {
        time: '06:30 AM',
        activity: 'Early Breakfast',
        description: 'Eat early to prepare for a strenuous Sassolungo loop.',
        icon: 'meal',
      },
      {
        time: '07:30 AM',
        activity: 'Bus to Monte Pana',
        description: 'Take a quick local bus to Santa Cristina, and head up to Monte Pana plateau.',
        icon: 'car',
      },
      {
        time: '08:15 AM',
        activity: 'Mont de Sëura Chairlift',
        description: 'Ride up the chairlift directly to the base of the colossal Sassolungo rock walls.',
        icon: 'gondola',
      },
      {
        time: '08:45 AM',
        activity: 'Hike to Passo Sella',
        description: 'Begin the dramatic under-the-wall traverse towards Passo Sella.',
        icon: 'hiking',
      },
      {
        time: '10:30 AM',
        activity: 'Passo Sella to Forcella Sassolungo',
        description: 'Hike the steep, switchback gravel canyon up into the gap of the giant Sassolungo peaks.',
        icon: 'hiking',
      },
      {
        time: '12:30 PM',
        activity: 'Lunch at Forcella Sassolungo',
        description: 'Spectacular lunch at Rifugio Toni Demetz, wedged inside the rocky mountain cleft.',
        icon: 'meal',
      },
      {
        time: '01:30 PM',
        activity: 'Descend to Rifugio Vicenza',
        description: 'Hike down into the rocky, moon-like heart of the Sassolungo basin to Rifugio Vicenza.',
        icon: 'hiking',
      },
      {
        time: '03:00 PM',
        activity: 'Break at Rifugio Vicenza',
        description: 'Rest, hydrate, and take in the colossal amphitheater of stone.',
        icon: 'coffee',
      },
      {
        time: '03:30 PM',
        activity: 'Return to Mont de Sëura',
        description: 'Traverse the foothills of the mountain back to the chairlift station.',
        icon: 'hiking',
      },
      {
        time: '05:00 PM',
        activity: 'Descend to Monte Pana',
        description: 'Ride down the chairlift with views of Alpe di Siusi across the valley.',
        icon: 'gondola',
      },
      {
        time: '06:00 PM',
        activity: 'Return to Ortisei',
        description: 'Head back to Ortisei village for a relaxing evening and dinner.',
        icon: 'hotel',
      }
    ],
    waypoints: [
      { name: 'Ortisei', coordinates: [46.5743, 11.6742], type: 'hotel' },
      { name: 'Monte Pana', coordinates: [46.5492, 11.7183], type: 'transit' },
      { name: 'Mont de Sëura', coordinates: [46.5367, 11.7278], type: 'gondola' },
      { name: 'Passo Sella', coordinates: [46.5087, 11.7580], type: 'hiking', description: 'High pass' },
      { name: 'Forcella Sassolungo', coordinates: [46.5167, 11.7278], type: 'hiking', description: 'Steep rocky cleft (Rifugio Demetz)' },
      { name: 'Rifugio Vicenza', coordinates: [46.5211, 11.7139], type: 'hiking', description: 'Stony refuge' }
    ],
    tickets: [
      { name: 'Sassolungo Circuit Trail details', url: 'https://suedtirol.live/en/tour/sassolungo-circuit-t20154' }
    ]
  },
  {
    id: 15,
    date: 'July 15',
    title: 'Ortisei - Alpe di Siusi Meadows',
    hotel: 'Ortisei',
    travel: 'N/A',
    timeline: [
      {
        time: '07:00 AM',
        activity: 'Leisurely Breakfast',
        description: 'Enjoy breakfast in Ortisei.',
        icon: 'meal',
      },
      {
        time: '08:00 AM',
        activity: 'Cable Car to Mont Sëuc',
        description: 'Ride up the Ortisei-Alpe di Siusi gondola to the highest mountain pasture in Europe.',
        icon: 'gondola',
      },
      {
        time: '09:00 AM',
        activity: 'Walk to Compatsch',
        description: 'Stroll across rolling alpine meadows with the Langkofel mountain framing the views.',
        icon: 'hiking',
      },
      {
        time: '10:00 AM',
        activity: 'Compatsch to Saltria',
        description: 'Hike the peaceful, famous Panorama Trail descending towards Saltria.',
        icon: 'hiking',
      },
      {
        time: '12:00 PM',
        activity: 'Lunch at Malga Sanon',
        description: 'Enjoy a legendary Alpine lunch in a beautiful wooden cabin with views of the Sassolungo.',
        icon: 'meal',
      },
      {
        time: '01:30 PM',
        activity: 'Malga Sanon Panorama Loop',
        description: 'Discover the classic Alpe di Siusi viewpoints, photography wooden huts, and hay barns.',
        icon: 'sightseeing',
      },
      {
        time: '03:30 PM',
        activity: 'Return to Compatsch',
        description: 'Loop back across the green hills up to the Compatsch center.',
        icon: 'hiking',
      },
      {
        time: '04:30 PM',
        activity: 'Cable Car back to Ortisei',
        description: 'Glided down back to Ortisei. Evening free to wander the pedestrian streets.',
        icon: 'hotel',
      }
    ],
    waypoints: [
      { name: 'Ortisei', coordinates: [46.5743, 11.6742], type: 'hotel' },
      { name: 'Mont Sëuc', coordinates: [46.5597, 11.6575], type: 'gondola', description: 'Cable car top station' },
      { name: 'Compatsch', coordinates: [46.5414, 11.6161], type: 'hiking', description: 'Meadows village hub' },
      { name: 'Malga Sanon', coordinates: [46.5392, 11.6319], type: 'meal', description: 'Scenic traditional cabin' },
      { name: 'Saltria', coordinates: [46.5275, 11.6375], type: 'hiking' }
    ]
  },
  {
    id: 16,
    date: 'July 16',
    title: 'Ortisei - Val di Funes (To Venice/Bolzano)',
    hotel: 'Bolzano (to leave for Venice)',
    travel: 'Leave for Bolzano (to leave for Venice)',
    timeline: [
      {
        time: '07:00 AM',
        activity: 'Breakfast & Checkout',
        description: 'Check out of Ortisei and load your day bags.',
        icon: 'hotel',
      },
      {
        time: '08:00 AM',
        activity: 'Travel to Val di Funes',
        description: 'Take the bus out of Gardena towards Brixen, then change for Val di Funes (Santa Maddalena).',
        icon: 'car',
      },
      {
        time: '10:00 AM',
        activity: 'Santa Maddalena Village',
        description: 'Explore the picture-perfect village. Stand at the famous viewpoint of St. Magdalena Church with Odle Peaks.',
        icon: 'sightseeing',
      },
      {
        time: '11:00 AM',
        activity: 'Val di Funes Panorama Trail',
        description: 'Hike the easy, sunny panorama loop above the quiet pastures.',
        icon: 'hiking',
      },
      {
        time: '01:00 PM',
        activity: 'Tyrolean Valley Lunch',
        description: 'Have a delicious lunch in Santa Maddalena village.',
        icon: 'meal',
      },
      {
        time: '02:00 PM',
        activity: 'St. Johann in Ranui Church',
        description: 'Walk to the small, famous baroque church sitting solitary in the green forest clearing.',
        icon: 'sightseeing',
      },
      {
        time: '03:00 PM',
        activity: 'Return to Ortisei / Bags',
        description: 'Transit back to retrieve luggage or proceed directly to Bolzano.',
        icon: 'train',
      },
      {
        time: '05:00 PM',
        activity: 'Travel to Bolzano',
        description: 'Arrive in Bolzano to check in for the night and prepare for Venice high-speed rail tomorrow.',
        icon: 'hotel',
      }
    ],
    waypoints: [
      { name: 'Santa Maddalena', coordinates: [46.6433, 11.7153], type: 'sightseeing', description: 'Val di Funes village' },
      { name: 'St. Magdalena Church', coordinates: [46.6469, 11.7194], type: 'sightseeing', description: 'Famous viewpoint church' },
      { name: 'St. Johann in Ranui', coordinates: [46.6358, 11.7247], type: 'sightseeing', description: 'Isolated clearing church' },
      { name: 'Bolzano', coordinates: [46.4983, 11.3548], type: 'hotel', description: 'Overnight transit base' }
    ]
  },
  {
    id: 17,
    date: 'July 17',
    title: 'Venice (Car Pickup & Evening in Venice)',
    hotel: 'Venice',
    travel: 'Venice',
    timeline: [
      {
        time: '08:15 AM',
        activity: 'Arrive Venice S. Lucia',
        description: 'Reach Venice via train. Walk out into the stunning view of the Grand Canal.',
        icon: 'train',
      },
      {
        time: '09:00 AM',
        activity: 'Check in - Mascare Hotel',
        description: 'Walk to Venice Mascare Hotel to drop off your bags and freshen up.',
        icon: 'hotel',
      },
      {
        time: '10:00 AM',
        activity: 'Venice Canals Exploration',
        description: 'Discover St. Marks, Rialto Bridge, hidden alleyways and gorgeous bridges.',
        icon: 'sightseeing',
      },
      {
        time: '01:00 PM',
        activity: 'Cicchetti Lunch',
        description: 'Try the traditional Venetian small tapas plate appetizers at a local Bacaro.',
        icon: 'meal',
      },
      {
        time: '04:00 PM',
        activity: 'Rental Car Pickup!',
        description: 'Pick up your rental vehicle in Venice (Piazzale Roma). Ready to drive to the high Dolomites tomorrow!',
        icon: 'car',
      },
      {
        time: '07:00 PM',
        activity: 'Sunset Canal dinner',
        description: 'Dine by the canals as gondolas drift past.',
        icon: 'meal',
      }
    ],
    waypoints: [
      { name: 'Venice S. Lucia Station', coordinates: [45.4411, 12.3211], type: 'transit' },
      { name: 'Mascare Hotel', coordinates: [45.4442, 12.3256], type: 'hotel', description: 'Your Venice hotel' },
      { name: 'Car Rental Pickup', coordinates: [45.4372, 12.3189], type: 'car', description: 'Piazzale Roma pickup (4:00 PM)' }
    ],
    alerts: [
      '🚗 CAR PICKUP AT 4:00 PM! Ensure you have: International Driving Permit (IDP), credit card under main driver name, and booking confirmation.'
    ]
  },
  {
    id: 18,
    date: 'July 18',
    title: 'Cortina - Passo Giau & Cinque Torri Loop',
    hotel: 'Venas di Cadore (Airbnb)',
    travel: 'Leave for Cortina',
    timeline: [
      {
        time: '03:15 AM',
        activity: 'Depart Venice early',
        description: 'Start the early morning drive from Venice to beat the sunrise.',
        icon: 'car',
      },
      {
        time: '05:45 AM',
        activity: 'Passo Giau Sunrise',
        description: 'Reach Passo Giau (2236m) for sunrise. Watch golden light strike Mt. Ra Gusela.',
        icon: 'sunrise',
      },
      {
        time: '06:45 AM',
        activity: 'Drive to Bai de Dones',
        description: 'Brief drive down to Bai de Dones parking lot to begin the hike.',
        icon: 'car',
      },
      {
        time: '07:30 AM',
        activity: 'Cinque Torri Loop Hike',
        description: 'Start hike on Trail 425 to Rifugio Cinque Torri, explore WWI trenches, visit Rifugio Scoiattoli & Rifugio Averau.',
        icon: 'hiking',
      },
      {
        time: '11:00 AM',
        activity: 'Rifugio Nuvolau peak climb',
        description: 'Hike up the rocky ridge to Rifugio Nuvolau (2575m) for a 360-degree Dolomites panorama.',
        icon: 'hiking',
      },
      {
        time: '12:00 PM',
        activity: 'Lunch at Rifugio Averau/Nuvolau',
        description: 'Hearty Alpine meal with unmatched birds-eye views.',
        icon: 'meal',
      },
      {
        time: '01:00 PM',
        activity: '🚠 Chairlift down to Bai de Dones',
        description: 'Ride the 5 Torri chairlift down from Scoiattoli to save legs.',
        icon: 'gondola',
      },
      {
        time: '02:00 PM',
        activity: 'Drive to Lago Limides',
        description: 'Drive a short distance to Falzarego pass area.',
        icon: 'car',
      },
      {
        time: '03:15 PM',
        activity: 'Lago Limides Walk',
        description: 'Take a short, easy walk to Lago Limides, an elegant small green lake.',
        icon: 'hiking',
      },
      {
        time: '04:15 PM',
        activity: 'Drive to Lago Ghedina',
        description: 'Drive along beautiful forest roads towards Lake Ghedina.',
        icon: 'car',
      },
      {
        time: '05:30 PM',
        activity: 'Lago Ghedina Exploration',
        description: 'Walk around the tranquil emerald lake hidden in deep pine woods.',
        icon: 'sightseeing',
      },
      {
        time: '06:30 PM',
        activity: 'Travel to Airbnb',
        description: 'Drive to Venas di Cadore, check in to your Airbnb base, and enjoy dinner.',
        icon: 'hotel',
      }
    ],
    waypoints: [
      { name: 'Venice', coordinates: [45.4408, 12.3155], type: 'transit' },
      { name: 'Passo Giau', coordinates: [46.4825, 12.0531], type: 'sightseeing', description: 'Sunrise viewpoint' },
      { name: 'Bai de Dones', coordinates: [46.5186, 12.0378], type: 'transit', description: 'Trailhead' },
      { name: 'Cinque Torri Rocks', coordinates: [46.5085, 12.0553], type: 'hiking', description: 'Five rock towers' },
      { name: 'Rifugio Scoiattoli', coordinates: [46.5081, 12.0461], type: 'gondola' },
      { name: 'Rifugio Averau', coordinates: [46.5003, 12.0400], type: 'hiking' },
      { name: 'Rifugio Nuvolau Peak', coordinates: [46.4950, 12.0461], type: 'hiking', description: '360° Peak' },
      { name: 'Lago Limides', coordinates: [46.5181, 12.0169], type: 'hiking', description: 'Small alpine lake' },
      { name: 'Lago Ghedina', coordinates: [46.5617, 12.1156], type: 'sightseeing', description: 'Emerald forest lake' },
      { name: 'Venas di Cadore Airbnb', coordinates: [46.4132, 12.2828], type: 'hotel', description: 'Your base Airbnb' }
    ],
    alerts: [
      '⏰ Sunrise at Passo Giau is extremely cold! Bring windbreakers, beanies, and warm jackets.',
      '🥾 Chairlift DOWN from Scoiattoli starts operating by July. It saves a steep downhill descent!'
    ]
  },
  {
    id: 19,
    date: 'July 19',
    title: 'Cortina - Tre Cime di Lavaredo Loop',
    hotel: 'Venas di Cadore (Airbnb)',
    travel: 'N/A',
    timeline: [
      {
        time: '04:00 AM',
        activity: 'Drive to Rifugio Auronzo',
        description: 'Wake up early and drive through Misurina up the toll road to Rifugio Auronzo. Arrive early to beat the parking block!',
        icon: 'car',
      },
      {
        time: '05:15 AM',
        activity: 'Cadini di Misurina Sunrise',
        description: 'Hike Trail 117 to the "Punto Panoramico" Cadini view. Stand on the epic rocky dagger spine over the peaks.',
        icon: 'sunrise',
      },
      {
        time: '06:00 AM',
        activity: 'Packed Breakfast',
        description: 'Eat packed breakfast at Cadini or see if Rifugio Auronzo is opening.',
        icon: 'coffee',
      },
      {
        time: '06:30 AM',
        activity: 'Tre Cime Circuit Hike',
        description: 'Hike the iconic loop: Rifugio Auronzo → Rifugio Lavaredo → Forcella Lavaredo (view of the three monoliths) → Rifugio Locatelli.',
        icon: 'hiking',
      },
      {
        time: '10:00 AM',
        activity: 'Rifugio Locatelli Rest',
        description: 'Explore caves, enjoy classic views of the giant North faces of Tre Cime.',
        icon: 'sightseeing',
      },
      {
        time: '11:30 AM',
        activity: 'Lakes & Malga Langalm',
        description: 'Descend to Sorgenti del Rienza, climb up to Malga Langalm cabin alongside alpine pools.',
        icon: 'hiking',
      },
      {
        time: '01:00 PM',
        activity: 'Forcella Col di Mezzo',
        description: 'Complete the loop around the western face back to Rifugio Auronzo.',
        icon: 'hiking',
      },
      {
        time: '02:00 PM',
        activity: 'Drive to Lago Antorno',
        description: 'Drive down the toll road to Lake Antorno.',
        icon: 'car',
      },
      {
        time: '02:30 PM',
        activity: 'Lago Antorno Chill',
        description: 'Sit by the serene lake reflecting the Cadini peaks. Grab a warm drink.',
        icon: 'coffee',
      },
      {
        time: '04:00 PM',
        activity: 'Lago di Misurina Sunset Prep',
        description: 'Walk, eat gelato, rent a paddle boat, and view the iconic yellow Grand Hotel Misurina with Sorapis behind.',
        icon: 'sightseeing',
      },
      {
        time: '07:30 PM',
        activity: 'Return to Airbnb',
        description: 'Head back to Venas di Cadore for a well-deserved dinner.',
        icon: 'hotel',
      }
    ],
    waypoints: [
      { name: 'Venas di Cadore Airbnb', coordinates: [46.4132, 12.2828], type: 'hotel' },
      { name: 'Rifugio Auronzo', coordinates: [46.6125, 12.2944], type: 'transit', description: 'Toll road parking & start' },
      { name: 'Cadini di Misurina Point', coordinates: [46.5997, 12.3022], type: 'hiking', description: 'Spire dagger viewpoint' },
      { name: 'Rifugio Locatelli', coordinates: [46.6382, 12.3094], type: 'hiking', description: 'Perfect Tre Cime front view' },
      { name: 'Malga Langalm', coordinates: [46.6231, 12.2783], type: 'meal', description: 'Alpine snack stop' },
      { name: 'Lago Antorno', coordinates: [46.5958, 12.2639], type: 'sightseeing', description: 'Reflecting lake' },
      { name: 'Lago di Misurina', coordinates: [46.5822, 12.2547], type: 'sightseeing', description: 'Large lake with boats' }
    ],
    alerts: [
      '🚗 PARKING LIMIT: The Tre Cime toll road (€30) closes as soon as the upper parking lot fills (often by 7:30 AM!). Arrive by 5:00 AM to guarantee entry.',
      '💳 Bring cash or credit card for the toll booth.'
    ]
  },
  {
    id: 20,
    date: 'July 20',
    title: 'Cortina - Lago di Sorapis Hike & Lake Landro',
    hotel: 'Venas di Cadore (Airbnb)',
    travel: 'N/A',
    timeline: [
      {
        time: '06:00 AM',
        activity: 'Drive to Passo Tre Croci',
        description: 'Drive from Venas di Cadore to the trailhead parking at Tre Croci Pass.',
        icon: 'car',
      },
      {
        time: '07:00 AM',
        activity: 'Hike Trail 215',
        description: 'Walk through pine forests, climbing up stairs and rocky shelves. Navigate the secure steel cable ledge.',
        icon: 'hiking',
      },
      {
        time: '10:00 AM',
        activity: 'Sorapis Turquoise Waters',
        description: 'Arrive at Lago di Sorapis. Marvel at the surreal milky-turquoise water framed by Mt. Sorapis finger.',
        icon: 'sightseeing',
      },
      {
        time: '11:00 AM',
        activity: 'Lunch at Rifugio Vandelli',
        description: 'Dine on fresh pasta and soup right next to the lake at Vandelli refuge.',
        icon: 'meal',
      },
      {
        time: '12:00 PM',
        activity: 'Hike back to Pass',
        description: 'Descend Trail 215 back down to Passo Tre Croci.',
        icon: 'hiking',
      },
      {
        time: '02:00 PM',
        activity: 'Drive to Rio Gere',
        description: 'Drive a brief distance towards Rio Gere valley station.',
        icon: 'car',
      },
      {
        time: '02:30 PM',
        activity: 'Coffee at Rio Gere',
        description: 'Sip delicious espresso and relax on the mountain terrace.',
        icon: 'coffee',
      },
      {
        time: '03:30 PM',
        activity: 'Drive to Lake Landro',
        description: 'Head north past Dobbiaco towards Lake Landro (Lago di Landro).',
        icon: 'car',
      },
      {
        time: '04:00 PM',
        activity: 'Lake Landro Sunset',
        description: 'Stroll on the gravel shores, gaze at the Cristallo mountain reflection, and enjoy the sunset.',
        icon: 'sightseeing',
      },
      {
        time: '07:30 PM',
        activity: 'Return to Airbnb',
        description: 'Drive back to Venas di Cadore for your evening rest.',
        icon: 'hotel',
      }
    ],
    waypoints: [
      { name: 'Venas di Cadore Airbnb', coordinates: [46.4132, 12.2828], type: 'hotel' },
      { name: 'Passo Tre Croci', coordinates: [46.5561, 12.2031], type: 'transit', description: 'Sorapis trailhead' },
      { name: 'Lago di Sorapis', coordinates: [46.5161, 12.2106], type: 'sightseeing', description: 'Turquoise glacier lake' },
      { name: 'Rifugio Vandelli', coordinates: [46.5169, 12.2128], type: 'meal' },
      { name: 'Rio Gere', coordinates: [46.5539, 12.1764], type: 'transit' },
      { name: 'Lake Landro', coordinates: [46.6328, 12.2281], type: 'sightseeing', description: 'Scenic valley lake' }
    ],
    alerts: [
      '⚠️ Vertigo Warning: Trail 215 has stairs and exposed sections with cables. Safe but requires focus!',
      '👟 Wear shoes with solid grip. Wet limestone can be extremely slippery.'
    ]
  },
  {
    id: 21,
    date: 'July 21',
    title: 'Cortina - Lago di Braies & Prato Piazza',
    hotel: 'Venas di Cadore (Airbnb)',
    travel: 'N/A',
    timeline: [
      {
        time: '04:00 AM',
        activity: 'Early Drive to Lago di Braies',
        description: 'Drive early to reach Lago di Braies before the 9:00 AM road closure restricts all vehicles.',
        icon: 'car',
      },
      {
        time: '05:00 AM',
        activity: 'Braies Sunrise Walk',
        description: 'Walk around the pristine loop of the world-famous emerald lake before the crowds arrive. Rent iconic wooden rowboats.',
        icon: 'sunrise',
      },
      {
        time: '07:45 AM',
        activity: 'Drive to Prato Piazza',
        description: 'Drive to the Prato Piazza (Plätzwiese) high mountain pastures (arrive before 9:00 AM).',
        icon: 'car',
      },
      {
        time: '08:30 AM',
        activity: 'Strudelkopf Trail Hike',
        description: 'Begin hike from Prato Piazza to Strudelkopf peak (2307m) for epic views of Tre Cime and Vallandro.',
        icon: 'hiking',
      },
      {
        time: '11:30 AM',
        activity: 'Lunch at Prato Piazza',
        description: 'Dine at Alpengasthof Plätzwiese on traditional dumplings and Tyrolean ham.',
        icon: 'meal',
      },
      {
        time: '12:30 PM',
        activity: 'Explore High Plateau',
        description: 'Rest and walk among wildflowers. (Vehicle driving down is strictly blocked until 4:00 PM).',
        icon: 'sightseeing',
      },
      {
        time: '04:30 PM',
        activity: 'Prato Piazza Sunset View',
        description: 'Watch the mountains change colors as sunset approaches, then begin driving down.',
        icon: 'sunset',
      },
      {
        time: '07:00 PM',
        activity: 'Return to Airbnb',
        description: 'Head back to Venas di Cadore for a delicious dinner.',
        icon: 'hotel',
      }
    ],
    waypoints: [
      { name: 'Venas di Cadore', coordinates: [46.4132, 12.2828], type: 'hotel' },
      { name: 'Lago di Braies', coordinates: [46.6997, 12.0850], type: 'sightseeing', description: 'Famous Alpine emerald lake' },
      { name: 'Prato Piazza', coordinates: [46.6428, 12.1972], type: 'hiking', description: 'Wildflower high plateau' },
      { name: 'Strudelkopf Peak', coordinates: [46.6481, 12.2131], type: 'hiking', description: 'Summit panorama' }
    ],
    alerts: [
      '🚫 ROAD CLOSED 9:00 AM - 4:00 PM: The roads to Lago di Braies and Prato Piazza are completely closed to non-permitted vehicles. If you enter before 9:00 AM, you cannot drive back out until after 4:00 PM!'
    ]
  },
  {
    id: 22,
    date: 'July 22',
    title: 'Cortina - Lagazuoi WW1 Tunnels & Valparola',
    hotel: 'Venas di Cadore (Airbnb)',
    travel: 'N/A',
    timeline: [
      {
        time: '04:30 AM',
        activity: 'Drive to Passo Falzarego',
        description: 'Early scenic drive up to the Falzarego Pass.',
        icon: 'car',
      },
      {
        time: '05:30 AM',
        activity: 'Falzarego Explorations',
        description: 'Walk around the mountain passes and capture cold morning fog and views.',
        icon: 'sightseeing',
      },
      {
        time: '08:30 AM',
        activity: 'Lagazuoi Cable Car UP',
        description: 'Board the first cable car up to Rifugio Lagazuoi peak (2752m) for incredible vertical vistas.',
        icon: 'gondola',
      },
      {
        time: '09:15 AM',
        activity: 'WW1 Tunnel Descent Hike',
        description: 'Descend through the steep, dark, historic hand-carved tunnels inside Mount Lagazuoi. (Helmet and headlamp mandatory!)',
        icon: 'hiking',
      },
      {
        time: '12:15 PM',
        activity: 'Lunch at Rifugio Col Gallina',
        description: 'Traditional lunch at the pass in Col Gallina refuge.',
        icon: 'meal',
      },
      {
        time: '01:45 PM',
        activity: 'Forte Tre Sassi WW1 Museum',
        description: 'Short drive to Passo Valparola to explore the fascinating stone-walled WW1 fortress museum.',
        icon: 'sightseeing',
      },
      {
        time: '02:30 PM',
        activity: 'Drive to Armentarola',
        description: 'Cross into the Badia valley towards Armentarola.',
        icon: 'car',
      },
      {
        time: '03:00 PM',
        activity: 'Chill around Armentarola',
        description: 'Walk and relax around the quiet mountain meadows of Badia.',
        icon: 'coffee',
      },
      {
        time: '05:00 PM',
        activity: 'San Cassiano Village Walk',
        description: 'Dine on espresso and gelato in San Cassiano village, admiring the classic Ladin architecture.',
        icon: 'coffee',
      },
      {
        time: '06:00 PM',
        activity: 'Return to Airbnb',
        description: 'Scenic evening drive over the passes back to Venas di Cadore.',
        icon: 'hotel',
      }
    ],
    waypoints: [
      { name: 'Venas di Cadore', coordinates: [46.4132, 12.2828], type: 'hotel' },
      { name: 'Passo Falzarego', coordinates: [46.5189, 12.0094], type: 'transit' },
      { name: 'Lagazuoi Peak', coordinates: [46.5273, 12.0083], type: 'hiking', description: 'Rifugio Lagazuoi Peak' },
      { name: 'Passo Valparola', coordinates: [46.5283, 11.9950], type: 'transit' },
      { name: 'Forte Tre Sassi', coordinates: [46.5272, 11.9903], type: 'sightseeing', description: 'Stone fort museum' },
      { name: 'Armentarola', coordinates: [46.5611, 11.9542], type: 'sightseeing' },
      { name: 'San Cassiano', coordinates: [46.5714, 11.9333], type: 'coffee', description: 'Charming village' }
    ],
    alerts: [
      '🪖 HEADLAMP & HELMET REQUIRED: The WW1 tunnel descent is completely dark, wet, steep, and has low rock ceilings. Do not attempt without proper lighting and head protection!',
      '🎟️ Lagazuoi Cable Car opens around 8:30 AM.'
    ]
  },
  {
    id: 23,
    date: 'July 23',
    title: 'Venice (Return Drive & Venice Evening)',
    hotel: 'Venice',
    travel: 'Leave for Venice',
    timeline: [
      {
        time: '09:00 AM',
        activity: 'Check out & Venice Drive',
        description: 'Check out of Venas di Cadore Airbnb. Drive back down the mountains to Venice.',
        icon: 'car',
      },
      {
        time: '12:00 PM',
        activity: 'Return Rental Car',
        description: 'Drop off the rental car in Piazzale Roma, Venice.',
        icon: 'car',
      },
      {
        time: '01:00 PM',
        activity: 'Check in Venice Hotel',
        description: 'Check back into your Venice hotel and enjoy your final evening on the lagoons.',
        icon: 'hotel',
      },
      {
        time: '04:00 PM',
        activity: 'Canals & Gelato walk',
        description: 'Explore quieter neighborhoods like Cannaregio or Dorsoduro.',
        icon: 'sightseeing',
      },
      {
        time: '07:30 PM',
        activity: 'Venetian Seafood Dinner',
        description: 'Feast on spaghetti al nero di seppia (squid ink pasta) or fresh seafood risotto.',
        icon: 'meal',
      }
    ],
    waypoints: [
      { name: 'Venas di Cadore', coordinates: [46.4132, 12.2828], type: 'hotel' },
      { name: 'Venice Piazzale Roma', coordinates: [45.4372, 12.3189], type: 'car' },
      { name: 'Venice Hotel', coordinates: [45.4408, 12.3155], type: 'hotel' }
    ]
  },
  {
    id: 24,
    date: 'July 24',
    title: 'Milan',
    hotel: 'Milan',
    travel: 'Leave for Milan',
    timeline: [
      {
        time: '09:00 AM',
        activity: 'High-Speed Train to Milan',
        description: 'Board the comfortable Frecciarossa high-speed train from Venice to Milan.',
        icon: 'train',
      },
      {
        time: '11:30 AM',
        activity: 'Arrive Milan Centrale',
        description: 'Arrive at the majestic Milan Centrale station. Take metro to hotel.',
        icon: 'train',
      },
      {
        time: '12:30 PM',
        activity: 'Check in Milan',
        description: 'Drop bags at Milan hotel and freshen up.',
        icon: 'hotel',
      },
      {
        time: '02:00 PM',
        activity: 'Duomo di Milano',
        description: 'Visit the magnificent Gothic Duomo. Climb to the rooftop terraces for views of the spires.',
        icon: 'sightseeing',
      },
      {
        time: '04:30 PM',
        activity: 'Galleria Vittorio Emanuele II',
        description: 'Walk through the grand 19th-century glass-vaulted shopping arcade adjacent to Duomo.',
        icon: 'sightseeing',
      },
      {
        time: '07:30 PM',
        activity: 'Milanese Aperitivo & Dinner',
        description: 'Indulge in Aperol Spritz, buffet style bites, followed by Risotto alla Milanese and Ossobuco.',
        icon: 'meal',
      }
    ],
    waypoints: [
      { name: 'Milan Centrale', coordinates: [45.4858, 9.2038], type: 'transit' },
      { name: 'Duomo di Milano', coordinates: [45.4641, 9.1919], type: 'sightseeing', description: 'Gothic Cathedral' },
      { name: 'Galleria Vittorio Emanuele II', coordinates: [45.4654, 9.1899], type: 'sightseeing', description: 'High-end arcade' }
    ]
  },
  {
    id: 25,
    date: 'July 25',
    title: 'Milan & Night Flight Back',
    hotel: 'Milan (Night Flight)',
    travel: 'Milan, Leave for BLR',
    timeline: [
      {
        time: '10:00 AM',
        activity: 'Sforzesco Castle & Park',
        description: 'Walk through the grounds of the grand 15th-century castle and Sempione Park.',
        icon: 'sightseeing',
      },
      {
        time: '01:00 PM',
        activity: 'Last-minute Italian Lunch',
        description: 'Savor your final wood-fired pizza and fresh tiramisu.',
        icon: 'meal',
      },
      {
        time: '03:00 PM',
        activity: 'Souvenir & Fashion Shopping',
        description: 'Wander Brera or the Quadrilatero della Moda for souvenirs, leather goods, and local treats.',
        icon: 'coffee',
      },
      {
        time: '06:00 PM',
        activity: 'Transit to Malpensa Airport',
        description: 'Take the Malpensa Express train from Milan Cadorna or Centrale to Malpensa Airport (MXP).',
        icon: 'train',
      },
      {
        time: '07:30 PM',
        activity: 'Airport Check-In',
        description: 'Check in for your overnight flight back to India (BLR).',
        icon: 'flight',
      },
      {
        time: '10:00 PM',
        activity: 'Board Flight back',
        description: 'Board your flight, bid farewell to Europe!',
        icon: 'flight',
      }
    ],
    waypoints: [
      { name: 'Sforzesco Castle', coordinates: [45.4705, 9.1793], type: 'sightseeing' },
      { name: 'Milano Malpensa Airport (MXP)', coordinates: [45.6301, 8.7231], type: 'airport', description: 'Departure airport' }
    ]
  },
  {
    id: 26,
    date: 'July 26',
    title: 'Arrive Bengaluru (BLR)',
    hotel: 'Home',
    travel: 'Reach BLR',
    timeline: [
      {
        time: '02:00 PM',
        activity: 'Arrive at BLR Airport',
        description: 'Touch down at Kempegowda International Airport, Bengaluru.',
        icon: 'flight',
      },
      {
        time: '03:30 PM',
        activity: 'Journey Complete',
        description: 'Head home, unpack your bags, and begin sorting through hundreds of gorgeous Dolomites photos!',
        icon: 'hotel',
      }
    ],
    waypoints: [
      { name: 'Kempegowda International Airport (BLR)', coordinates: [13.1986, 77.7066], type: 'airport', description: 'Welcome back home!' }
    ]
  }
];

export const INITIAL_PACKING_LIST: PackingItem[] = [
  { name: 'Hiking Boots (broken in)', category: 'Gear', requiredForDay: 'July 13 (Seceda)', checked: false },
  { name: 'WW1 Tunnel Helmet', category: 'Gear', requiredForDay: 'July 22 (Lagazuoi WW1)', checked: false },
  { name: 'Headlamp / Flashlight', category: 'Gear', requiredForDay: 'July 22 (Lagazuoi WW1)', checked: false },
  { name: 'International Driving Permit (IDP)', category: 'Documents', requiredForDay: 'July 17 (Car Pickup)', checked: false },
  { name: 'Physical Credit Card (under main driver)', category: 'Documents', requiredForDay: 'July 17 (Car Pickup)', checked: false },
  { name: 'Passport & Schengen Visa', category: 'Documents', requiredForDay: 'July 10 (Zurich Flight)', checked: false },
  { name: 'Pre-booked Gondola Tickets (Swiss First)', category: 'Documents', requiredForDay: 'July 11 (Grindelwald)', checked: false },
  { name: 'Tre Cime Toll Road Cash (€30)', category: 'Other', requiredForDay: 'July 19 (Tre Cime)', checked: false },
  { name: 'Windbreaker / Rain jacket', category: 'Clothing', requiredForDay: 'July 18 (Passo Giau Sunrise)', checked: false },
  { name: 'Warm Fleece / Beanie', category: 'Clothing', requiredForDay: 'July 18 (Passo Giau Sunrise)', checked: false },
  { name: 'Refillable Water Bottle', category: 'Gear', requiredForDay: 'Daily', checked: false },
  { name: 'Offline Map Downloads', category: 'Electronics', requiredForDay: 'Daily (Dolomites has spotty cell signal)', checked: false },
  { name: 'Camera & Charger', category: 'Electronics', requiredForDay: 'Daily', checked: false },
  { name: 'Universal Travel Adapter', category: 'Electronics', requiredForDay: 'Daily', checked: false }
];
