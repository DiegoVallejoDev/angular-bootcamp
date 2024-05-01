export interface prices {
  usd: number;
  eur: number;
  gbp: number;
}
export interface Item {
  id: string;
  title: string;
  prices: prices;
  photos: string[];
  description: string;
  offerDiscount?: number;
}

const sampleImages = [
  'https://api.slingacademy.com/public/sample-photos/1.jpeg',
  'https://api.slingacademy.com/public/sample-photos/2.jpeg',
  'https://api.slingacademy.com/public/sample-photos/3.jpeg',
  'https://api.slingacademy.com/public/sample-photos/4.jpeg',
  'https://api.slingacademy.com/public/sample-photos/5.jpeg',
  'https://api.slingacademy.com/public/sample-photos/6.jpeg',
  'https://api.slingacademy.com/public/sample-photos/7.jpeg',
  'https://api.slingacademy.com/public/sample-photos/8.jpeg',
  'https://api.slingacademy.com/public/sample-photos/9.jpeg',
  'https://api.slingacademy.com/public/sample-photos/10.jpeg',
];
//20 items
export const items: Item[] = [
  {
    id: '1',
    title: 'Item 1',
    prices: {
      usd: 100,
      eur: 90,
      gbp: 80,
    },
    photos: sampleImages.slice(0, 3),
    description: 'Description for item 1',
    offerDiscount: 10,
  },
  {
    id: '2',
    title: 'Item 2',
    prices: {
      usd: 200,
      eur: 180,
      gbp: 160,
    },
    photos: sampleImages.slice(3, 6),
    description: 'Description for item 2',
  },
  {
    id: '3',
    title: 'Item 3',
    prices: {
      usd: 300,
      eur: 270,
      gbp: 240,
    },
    photos: sampleImages.slice(6, 9),
    description: 'Description for item 3',
    offerDiscount: 10,
  },
  {
    id: '4',
    title: 'Item 4',
    prices: {
      usd: 400,
      eur: 360,
      gbp: 320,
    },
    photos: sampleImages.slice(9, 10),
    description: 'Description for item 4',
  },
  {
    id: '5',
    title: 'Item 5',
    prices: {
      usd: 500,
      eur: 450,
      gbp: 400,
    },
    photos: sampleImages.slice(0, 3),
    description: 'Description for item 5',
  },
  {
    id: '6',
    title: 'Item 6',
    prices: {
      usd: 600,
      eur: 540,
      gbp: 480,
    },
    photos: sampleImages.slice(3, 6),
    description: 'Description for item 6',
  },
  {
    id: '7',
    title: 'Item 7',
    prices: {
      usd: 700,
      eur: 630,
      gbp: 560,
    },
    photos: sampleImages.slice(6, 9),
    description: 'Description for item 7',
  },
  {
    id: '8',
    title: 'Item 8',
    prices: {
      usd: 800,
      eur: 720,
      gbp: 640,
    },
    photos: sampleImages.slice(9, 10),
    description: 'Description for item 8',
  },
  {
    id: '9',
    title: 'Item 9',
    prices: {
      usd: 900,
      eur: 810,
      gbp: 720,
    },
    photos: sampleImages.slice(0, 3),
    description: 'Description for item 9',
    offerDiscount: 20,
  },
  {
    id: '10',
    title: 'Item 10',
    prices: {
      usd: 1000,
      eur: 900,
      gbp: 800,
    },
    photos: sampleImages.slice(3, 6),
    description: 'Description for item 10',
    offerDiscount: 10,
  },
  {
    id: '11',
    title: 'Item 11',
    prices: {
      usd: 1100,
      eur: 990,
      gbp: 880,
    },
    photos: sampleImages.slice(6, 9),
    description: 'Description for item 11',
  },
  {
    id: '12',
    title: 'Item 12',
    prices: {
      usd: 1200,
      eur: 1080,
      gbp: 960,
    },
    photos: sampleImages.slice(9, 10),
    description: 'Description for item 12',
  },
  {
    id: '13',
    title: 'Item 13',
    prices: {
      usd: 1300,
      eur: 1170,
      gbp: 1040,
    },
    photos: sampleImages.slice(0, 3),
    description: 'Description for item 13',
    offerDiscount: 30,
  },
  {
    id: '14',
    title: 'Item 14',
    prices: {
      usd: 1400,
      eur: 1260,
      gbp: 1120,
    },
    photos: sampleImages.slice(3, 6),
    description: 'Description for item 14',
  },
  {
    id: '15',
    title: 'Item 15',
    prices: {
      usd: 1500,
      eur: 1350,
      gbp: 1200,
    },
    photos: sampleImages.slice(6, 9),
    description: 'Description for item 15',
  },
  {
    id: '16',
    title: 'Item 16',
    prices: {
      usd: 1600,
      eur: 1440,
      gbp: 1280,
    },
    photos: sampleImages.slice(9, 10),
    description: 'Description for item 16',
  },
  {
    id: '17',
    title: 'Item 17',
    prices: {
      usd: 1700,
      eur: 1530,
      gbp: 1360,
    },
    photos: sampleImages.slice(0, 3),
    description: 'Description for item 17',
  },
  {
    id: '18',
    title: 'Item 18',
    prices: {
      usd: 1800,
      eur: 1620,
      gbp: 1440,
    },
    photos: sampleImages.slice(3, 6),
    description: 'Description for item 18',
  },
  {
    id: '19',
    title: 'Item 19',
    prices: {
      usd: 1900,
      eur: 1710,
      gbp: 1520,
    },
    photos: sampleImages.slice(6, 9),
    description: 'Description for item 19',
  },
  {
    id: '20',
    title: 'Item 20',
    prices: {
      usd: 2000,
      eur: 1800,
      gbp: 1600,
    },
    photos: sampleImages.slice(9, 10),
    description: 'Description for item 20',
    offerDiscount: 40,
  },
];
