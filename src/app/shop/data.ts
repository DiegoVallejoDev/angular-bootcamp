export interface IPrices {
  usd: number;
  eur: number;
  gbp: number;
}

export interface ITag {
  name: string;
  price: IPrices;
}

export interface IItem {
  id: string;
  title: string;
  prices: ITag[];
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
export const items: IItem[] = [
  {
    id: '1',
    title: 'Item 1',
    prices: [
      {
        name: 'single color',
        price: {
          usd: 100,
          eur: 90,
          gbp: 80,
        },
      },
      {
        name: 'multi color',
        price: {
          usd: 150,
          eur: 135,
          gbp: 120,
        },
      },
      {
        name: 'no color',
        price: {
          usd: 150,
          eur: 135,
          gbp: 120,
        },
      },
    ],
    photos: sampleImages.slice(0, 3),
    description: 'Description for item 1',
    offerDiscount: 10,
  },
  {
    id: '2',
    title: 'Item 2',
    prices: [
      {
        name: 'single color',
        price: {
          usd: 200,
          eur: 180,
          gbp: 160,
        },
      },
      {
        name: 'multi color',
        price: {
          usd: 250,
          eur: 225,
          gbp: 200,
        },
      },
    ],
    photos: sampleImages.slice(3, 6),
    description: 'Description for item 2',
  },
  {
    id: '3',
    title: 'Item 3',
    prices: [
      {
        name: 'single color',
        price: {
          usd: 300,
          eur: 270,
          gbp: 240,
        },
      },
      {
        name: 'multi color',
        price: {
          usd: 350,
          eur: 315,
          gbp: 280,
        },
      },
    ],
    photos: sampleImages.slice(6, 9),
    description: 'Description for item 3',
    offerDiscount: 10,
  },
  {
    id: '4',
    title: 'Item 4',
    prices: [
      {
        name: 'single color',
        price: {
          usd: 400,
          eur: 360,
          gbp: 320,
        },
      },
      {
        name: 'multi color',
        price: {
          usd: 450,
          eur: 405,
          gbp: 360,
        },
      },
    ],
    photos: sampleImages.slice(9, 10),
    description: 'Description for item 4',
  },
  {
    id: '5',
    title: 'Item 5',
    prices: [
      {
        name: 'single color',
        price: {
          usd: 500,
          eur: 450,
          gbp: 400,
        },
      },
      {
        name: 'multi color',
        price: {
          usd: 550,
          eur: 495,
          gbp: 440,
        },
      },
    ],
    photos: sampleImages.slice(0, 3),
    description: 'Description for item 5',
  },
  {
    id: '6',
    title: 'Item 6',
    prices: [
      {
        name: 'single color',
        price: {
          usd: 600,
          eur: 540,
          gbp: 480,
        },
      },
    ],
    photos: sampleImages.slice(3, 6),
    description: 'Description for item 6',
  },
  {
    id: '7',
    title: 'Item 7',
    prices: [
      {
        name: 'single color',
        price: {
          usd: 700,
          eur: 630,
          gbp: 560,
        },
      },
    ],
    photos: sampleImages.slice(6, 9),
    description: 'Description for item 7',
  },
  {
    id: '8',
    title: 'Item 8',
    prices: [
      {
        name: 'single color',
        price: {
          usd: 800,
          eur: 720,
          gbp: 640,
        },
      },
    ],
    photos: sampleImages.slice(9, 10),
    description: 'Description for item 8',
  },
  {
    id: '9',
    title: 'Item 9',
    prices: [
      {
        name: 'single color',
        price: {
          usd: 900,
          eur: 810,
          gbp: 720,
        },
      },
    ],
    photos: sampleImages.slice(0, 3),
    description: 'Description for item 9',
    offerDiscount: 20,
  },
  {
    id: '10',
    title: 'Item 10',
    prices: [
      {
        name: 'single color',
        price: {
          usd: 1000,
          eur: 900,
          gbp: 800,
        },
      },
    ],
    photos: sampleImages.slice(3, 6),
    description: 'Description for item 10',
    offerDiscount: 10,
  },
  {
    id: '11',
    title: 'Item 11',
    prices: [
      {
        name: 'Red',
        price: {
          usd: 1100,
          eur: 990,
          gbp: 880,
        },
      },
    ],
    photos: sampleImages.slice(6, 9),
    description: 'Description for item 11',
  },
  {
    id: '12',
    title: 'Item 12',
    prices: [
      {
        name: 'red',
        price: {
          usd: 1200,
          eur: 1080,
          gbp: 960,
        },
      },
      {
        name: 'blue',
        price: {
          usd: 1250,
          eur: 1125,
          gbp: 1000,
        },
      },
    ],

    photos: sampleImages.slice(9, 10),
    description: 'Description for item 12',
  },
  {
    id: '13',
    title: 'Item 13',
    prices: [
      {
        name: 'red',
        price: {
          usd: 1300,
          eur: 1170,
          gbp: 1040,
        },
      },
      {
        name: 'blue',
        price: {
          usd: 1350,
          eur: 1215,
          gbp: 1080,
        },
      },
    ],
    photos: sampleImages.slice(0, 3),
    description: 'Description for item 13',
    offerDiscount: 30,
  },
  {
    id: '14',
    title: 'Item 14',
    prices: [
      {
        name: '10x20',
        price: {
          usd: 1400,
          eur: 1260,
          gbp: 1120,
        },
      },
      {
        name: '20x30',
        price: {
          usd: 1450,
          eur: 1305,
          gbp: 1160,
        },
      },
    ],

    photos: sampleImages.slice(3, 6),
    description: 'Description for item 14',
  },
  {
    id: '15',
    title: 'Item 15',
    prices: [
      {
        name: '10x20',
        price: {
          usd: 1500,
          eur: 1350,
          gbp: 1200,
        },
      },
      {
        name: '20x30',
        price: {
          usd: 1550,
          eur: 1395,
          gbp: 1240,
        },
      },
    ],
    photos: sampleImages.slice(6, 9),
    description: 'Description for item 15',
  },
  {
    id: '16',
    title: 'Item 16',
    prices: [
      {
        name: '2-pack',
        price: {
          usd: 1600,
          eur: 1440,
          gbp: 1280,
        },
      },
      {
        name: '4-pack',
        price: {
          usd: 1650,
          eur: 1485,
          gbp: 1320,
        },
      },
    ],
    photos: sampleImages.slice(9, 10),
    description: 'Description for item 16',
  },
  {
    id: '17',
    title: 'Item 17',
    prices: [
      {
        name: '5x5',
        price: {
          usd: 1700,
          eur: 1530,
          gbp: 1360,
        },
      },
      {
        name: '10x10',
        price: {
          usd: 1750,
          eur: 1575,
          gbp: 1400,
        },
      },
    ],
    photos: sampleImages.slice(0, 3),
    description: 'Description for item 17',
  },
  {
    id: '18',
    title: 'Item 18',
    prices: [
      {
        name: '5x5',
        price: {
          usd: 1800,
          eur: 1620,
          gbp: 1440,
        },
      },
      {
        name: '10x10',
        price: {
          usd: 1850,
          eur: 1665,
          gbp: 1480,
        },
      },
    ],
    photos: sampleImages.slice(3, 6),
    description: 'Description for item 18',
  },
  {
    id: '19',
    title: 'Item 19',
    prices: [
      {
        name: '5x5',
        price: {
          usd: 1900,
          eur: 1710,
          gbp: 1520,
        },
      },
      {
        name: '10x10',
        price: {
          usd: 1950,
          eur: 1755,
          gbp: 1560,
        },
      },
    ],
    photos: sampleImages.slice(6, 9),
    description: 'Description for item 19',
  },
  {
    id: '20',
    title: 'Item 20',
    prices: [
      {
        name: '1-pack',
        price: {
          usd: 2000,
          eur: 1800,
          gbp: 1600,
        },
      },
      {
        name: '2-pack',
        price: {
          usd: 2050,
          eur: 1845,
          gbp: 1640,
        },
      },
      {
        name: '4-pack',
        price: {
          usd: 2100,
          eur: 1890,
          gbp: 1680,
        },
      },
      {
        name: '6-pack',
        price: {
          usd: 2150,
          eur: 1935,
          gbp: 1720,
        },
      },
    ],
    photos: sampleImages.slice(9, 10),
    description: 'Description for item 20',
    offerDiscount: 40,
  },
];
