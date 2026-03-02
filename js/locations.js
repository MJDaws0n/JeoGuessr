const LOCATIONS = [
  // ── Europe ──────────────────────────────────────
  {
    lat: 48.8588,
    lng: 2.2970,
    name: "Eiffel Tower area",
    city: "Paris",
    country: "France"
  },
  {
    lat: 48.8606,
    lng: 2.3376,
    name: "Louvre area",
    city: "Paris",
    country: "France"
  },
  {
    lat: 48.8530,
    lng: 2.3499,
    name: "Notre-Dame area",
    city: "Paris",
    country: "France"
  },
  {
    lat: 40.4168,
    lng: -3.7038,
    name: "Puerta del Sol area",
    city: "Madrid",
    country: "Spain"
  },
  {
    lat: 41.3851,
    lng: 2.1734,
    name: "La Rambla",
    city: "Barcelona",
    country: "Spain"
  },
  {
    lat: 37.1773,
    lng: -3.5986,
    name: "Alhambra area",
    city: "Granada",
    country: "Spain"
  },
  {
    lat: 41.9029,
    lng: 12.4964,
    name: "Colosseum area",
    city: "Rome",
    country: "Italy"
  },
  {
    lat: 43.7230,
    lng: 10.3966,
    name: "Leaning Tower area",
    city: "Pisa",
    country: "Italy"
  },
  {
    lat: 43.7710,
    lng: 11.2536,
    name: "Florence Cathedral area",
    city: "Florence",
    country: "Italy"
  },
  {
    lat: 45.4341,
    lng: 12.3388,
    name: "Rialto Bridge area",
    city: "Venice",
    country: "Italy"
  },
  {
    lat: 40.8518,
    lng: 14.2681,
    name: "Naples waterfront",
    city: "Naples",
    country: "Italy"
  },
  {
    lat: 51.5007,
    lng: -0.1246,
    name: "Big Ben area",
    city: "London",
    country: "United Kingdom"
  },
  {
    lat: 51.5081,
    lng: -0.0759,
    name: "Tower Bridge area",
    city: "London",
    country: "United Kingdom"
  },
  {
    lat: 55.9533,
    lng: -3.1883,
    name: "Royal Mile",
    city: "Edinburgh",
    country: "United Kingdom"
  },
  {
    lat: 52.5163,
    lng: 13.3777,
    name: "Brandenburg Gate area",
    city: "Berlin",
    country: "Germany"
  },
  {
    lat: 48.1351,
    lng: 11.5820,
    name: "Marienplatz area",
    city: "Munich",
    country: "Germany"
  },
  {
    lat: 50.9375,
    lng: 6.9603,
    name: "Cologne Cathedral area",
    city: "Cologne",
    country: "Germany"
  },
  {
    lat: 52.3676,
    lng: 4.9041,
    name: "Dam Square area",
    city: "Amsterdam",
    country: "Netherlands"
  },
  {
    lat: 50.8467,
    lng: 4.3525,
    name: "Grand Place area",
    city: "Brussels",
    country: "Belgium"
  },
  {
    lat: 59.3275,
    lng: 18.0675,
    name: "Gamla Stan",
    city: "Stockholm",
    country: "Sweden"
  },
  {
    lat: 60.1699,
    lng: 24.9384,
    name: "Senate Square area",
    city: "Helsinki",
    country: "Finland"
  },
  {
    lat: 55.6761,
    lng: 12.5683,
    name: "Nyhavn area",
    city: "Copenhagen",
    country: "Denmark"
  },
  {
    lat: 59.9139,
    lng: 10.7522,
    name: "Karl Johans gate",
    city: "Oslo",
    country: "Norway"
  },
  {
    lat: 50.0755,
    lng: 14.4378,
    name: "Old Town Square",
    city: "Prague",
    country: "Czech Republic"
  },
  {
    lat: 47.4979,
    lng: 19.0402,
    name: "Parliament area",
    city: "Budapest",
    country: "Hungary"
  },
  {
    lat: 48.2082,
    lng: 16.3738,
    name: "St. Stephen's Cathedral area",
    city: "Vienna",
    country: "Austria"
  },
  {
    lat: 46.9480,
    lng: 7.4474,
    name: "Bern Old Town",
    city: "Bern",
    country: "Switzerland"
  },
  {
    lat: 47.3769,
    lng: 8.5417,
    name: "Bahnhofstrasse",
    city: "Zurich",
    country: "Switzerland"
  },
  {
    lat: 38.7223,
    lng: -9.1393,
    name: "Belém Tower area",
    city: "Lisbon",
    country: "Portugal"
  },
  {
    lat: 41.1579,
    lng: -8.6291,
    name: "Ribeira area",
    city: "Porto",
    country: "Portugal"
  },
  {
    lat: 37.9715,
    lng: 23.7267,
    name: "Acropolis area",
    city: "Athens",
    country: "Greece"
  },
  {
    lat: 55.7558,
    lng: 37.6176,
    name: "Red Square area",
    city: "Moscow",
    country: "Russia"
  },
  {
    lat: 59.9343,
    lng: 30.3351,
    name: "Nevsky Prospekt",
    city: "Saint Petersburg",
    country: "Russia"
  },
  {
    lat: 64.1466,
    lng: -21.9426,
    name: "Hallgrímskirkja area",
    city: "Reykjavik",
    country: "Iceland"
  },
  {
    lat: 53.3498,
    lng: -6.2603,
    name: "O'Connell Street area",
    city: "Dublin",
    country: "Ireland"
  },
  {
    lat: 50.0647,
    lng: 19.9450,
    name: "Main Square area",
    city: "Krakow",
    country: "Poland"
  },
  {
    lat: 52.2297,
    lng: 21.0122,
    name: "Warsaw Old Town",
    city: "Warsaw",
    country: "Poland"
  },
  {
    lat: 44.4268,
    lng: 26.1025,
    name: "Bucharest Old Town",
    city: "Bucharest",
    country: "Romania"
  },
  {
    lat: 42.6977,
    lng: 23.3219,
    name: "Vitosha Boulevard",
    city: "Sofia",
    country: "Bulgaria"
  },
  {
    lat: 45.8150,
    lng: 15.9819,
    name: "Ban Jelačić Square area",
    city: "Zagreb",
    country: "Croatia"
  },
  {
    lat: 43.5081,
    lng: 16.4402,
    name: "Riva waterfront",
    city: "Split",
    country: "Croatia"
  },

  // ── Asia ────────────────────────────────────────
  {
    lat: 35.6595,
    lng: 139.7004,
    name: "Shibuya Crossing area",
    city: "Tokyo",
    country: "Japan"
  },
  {
    lat: 35.7101,
    lng: 139.8107,
    name: "Asakusa area",
    city: "Tokyo",
    country: "Japan"
  },
  {
    lat: 35.0116,
    lng: 135.7681,
    name: "Fushimi Inari area",
    city: "Kyoto",
    country: "Japan"
  },
  {
    lat: 34.6937,
    lng: 135.5023,
    name: "Dotonbori area",
    city: "Osaka",
    country: "Japan"
  },
  {
    lat: 37.5665,
    lng: 126.9780,
    name: "Gwanghwamun area",
    city: "Seoul",
    country: "South Korea"
  },
  {
    lat: 37.5796,
    lng: 126.9770,
    name: "Gyeongbokgung area",
    city: "Seoul",
    country: "South Korea"
  },
  {
    lat: 1.2838,
    lng: 103.8591,
    name: "Marina Bay area",
    city: "Singapore",
    country: "Singapore"
  },
  {
    lat: 13.7563,
    lng: 100.5018,
    name: "Grand Palace area",
    city: "Bangkok",
    country: "Thailand"
  },
  {
    lat: 21.0285,
    lng: 105.8542,
    name: "Old Quarter area",
    city: "Hanoi",
    country: "Vietnam"
  },
  {
    lat: 10.7769,
    lng: 106.7009,
    name: "Notre-Dame Cathedral area",
    city: "Ho Chi Minh City",
    country: "Vietnam"
  },
  {
    lat: 3.1390,
    lng: 101.6869,
    name: "Petronas Towers area",
    city: "Kuala Lumpur",
    country: "Malaysia"
  },
  {
    lat: 22.3193,
    lng: 114.1694,
    name: "Victoria Harbour area",
    city: "Hong Kong",
    country: "China"
  },
  {
    lat: 25.0343,
    lng: 121.5645,
    name: "Taipei 101 area",
    city: "Taipei",
    country: "Taiwan"
  },
  {
    lat: 14.5995,
    lng: 120.9842,
    name: "Intramuros area",
    city: "Manila",
    country: "Philippines"
  },
  {
    lat: 28.6139,
    lng: 77.2090,
    name: "India Gate area",
    city: "New Delhi",
    country: "India"
  },
  {
    lat: 19.0760,
    lng: 72.8777,
    name: "Gateway of India area",
    city: "Mumbai",
    country: "India"
  },
  {
    lat: 41.0082,
    lng: 28.9784,
    name: "Hagia Sophia area",
    city: "Istanbul",
    country: "Turkey"
  },
  {
    lat: 39.9334,
    lng: 32.8597,
    name: "Kızılay Square area",
    city: "Ankara",
    country: "Turkey"
  },
  {
    lat: 31.7683,
    lng: 35.2137,
    name: "Old City area",
    city: "Jerusalem",
    country: "Israel"
  },
  {
    lat: 32.0853,
    lng: 34.7818,
    name: "Rothschild Boulevard",
    city: "Tel Aviv",
    country: "Israel"
  },
  {
    lat: 25.1972,
    lng: 55.2744,
    name: "Burj Khalifa area",
    city: "Dubai",
    country: "UAE"
  },

  // ── Americas ────────────────────────────────────
  {
    lat: 40.7580,
    lng: -73.9855,
    name: "Times Square",
    city: "New York",
    country: "United States"
  },
  {
    lat: 40.7484,
    lng: -73.9857,
    name: "Empire State Building area",
    city: "New York",
    country: "United States"
  },
  {
    lat: 37.7749,
    lng: -122.4194,
    name: "Golden Gate area",
    city: "San Francisco",
    country: "United States"
  },
  {
    lat: 34.0522,
    lng: -118.2437,
    name: "Hollywood Boulevard area",
    city: "Los Angeles",
    country: "United States"
  },
  {
    lat: 41.8827,
    lng: -87.6233,
    name: "Millennium Park area",
    city: "Chicago",
    country: "United States"
  },
  {
    lat: 38.8977,
    lng: -77.0365,
    name: "White House area",
    city: "Washington D.C.",
    country: "United States"
  },
  {
    lat: 36.1699,
    lng: -115.1398,
    name: "The Strip area",
    city: "Las Vegas",
    country: "United States"
  },
  {
    lat: 25.7617,
    lng: -80.1918,
    name: "South Beach area",
    city: "Miami",
    country: "United States"
  },
  {
    lat: 47.6062,
    lng: -122.3321,
    name: "Pike Place Market area",
    city: "Seattle",
    country: "United States"
  },
  {
    lat: 29.9511,
    lng: -90.0715,
    name: "French Quarter",
    city: "New Orleans",
    country: "United States"
  },
  {
    lat: 43.6532,
    lng: -79.3832,
    name: "CN Tower area",
    city: "Toronto",
    country: "Canada"
  },
  {
    lat: 49.2827,
    lng: -123.1207,
    name: "Gastown area",
    city: "Vancouver",
    country: "Canada"
  },
  {
    lat: 45.5017,
    lng: -73.5673,
    name: "Old Montreal area",
    city: "Montreal",
    country: "Canada"
  },
  {
    lat: 19.4326,
    lng: -99.1332,
    name: "Zócalo area",
    city: "Mexico City",
    country: "Mexico"
  },
  {
    lat: 20.6296,
    lng: -87.0739,
    name: "Hotel Zone area",
    city: "Cancún",
    country: "Mexico"
  },
  {
    lat: -22.9068,
    lng: -43.1729,
    name: "Copacabana Beach area",
    city: "Rio de Janeiro",
    country: "Brazil"
  },
  {
    lat: -23.5505,
    lng: -46.6333,
    name: "Paulista Avenue area",
    city: "São Paulo",
    country: "Brazil"
  },
  {
    lat: -34.6037,
    lng: -58.3816,
    name: "Obelisco area",
    city: "Buenos Aires",
    country: "Argentina"
  },
  {
    lat: -33.4489,
    lng: -70.6693,
    name: "Plaza de Armas area",
    city: "Santiago",
    country: "Chile"
  },
  {
    lat: -12.0464,
    lng: -77.0428,
    name: "Plaza Mayor area",
    city: "Lima",
    country: "Peru"
  },
  {
    lat: 4.7110,
    lng: -74.0721,
    name: "La Candelaria area",
    city: "Bogotá",
    country: "Colombia"
  },
  {
    lat: -0.1807,
    lng: -78.4678,
    name: "Historic Centre area",
    city: "Quito",
    country: "Ecuador"
  },
  {
    lat: 18.4655,
    lng: -66.1057,
    name: "Old San Juan area",
    city: "San Juan",
    country: "Puerto Rico"
  },
  {
    lat: 23.1136,
    lng: -82.3666,
    name: "Malecón area",
    city: "Havana",
    country: "Cuba"
  },

  // ── Africa ──────────────────────────────────────
  {
    lat: 30.0444,
    lng: 31.2357,
    name: "Cairo Tower area",
    city: "Cairo",
    country: "Egypt"
  },
  {
    lat: -33.9249,
    lng: 18.4241,
    name: "V&A Waterfront area",
    city: "Cape Town",
    country: "South Africa"
  },
  {
    lat: -1.2921,
    lng: 36.8219,
    name: "City Centre area",
    city: "Nairobi",
    country: "Kenya"
  },
  {
    lat: 33.9716,
    lng: -6.8498,
    name: "Hassan Tower area",
    city: "Rabat",
    country: "Morocco"
  },
  {
    lat: 36.8065,
    lng: 10.1815,
    name: "Medina area",
    city: "Tunis",
    country: "Tunisia"
  },
  {
    lat: 6.5244,
    lng: 3.3792,
    name: "Lagos Island area",
    city: "Lagos",
    country: "Nigeria"
  },

  // ── Oceania ─────────────────────────────────────
  {
    lat: -33.8568,
    lng: 151.2153,
    name: "Sydney Opera House area",
    city: "Sydney",
    country: "Australia"
  },
  {
    lat: -37.8136,
    lng: 144.9631,
    name: "Federation Square area",
    city: "Melbourne",
    country: "Australia"
  },
  {
    lat: -36.8485,
    lng: 174.7633,
    name: "Queen Street area",
    city: "Auckland",
    country: "New Zealand"
  },
  {
    lat: -41.2865,
    lng: 174.7762,
    name: "Lambton Quay area",
    city: "Wellington",
    country: "New Zealand"
  }
];
