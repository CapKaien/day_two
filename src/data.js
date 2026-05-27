// Stable Unsplash photo IDs — coffee + roastery imagery
const img = (id, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const heroImage = img('photo-1509042239860-f550ce710b93', 1600)
export const heroImageSecondary = img('photo-1442975631115-c4f7b05b8a2c', 900)

export const products = [
  {
    n: '01',
    name: 'Cortado',
    notes: 'Equal parts espresso & steamed milk.',
    origin: 'Ethiopia · Yirgacheffe',
    price: '4.50',
    image: img('photo-1517959105821-eaf2591984ca', 900),
  },
  {
    n: '02',
    name: 'Slow Pour',
    notes: 'Hand-poured V60, bright and floral.',
    origin: 'Colombia · Huila',
    price: '5.25',
    image: img('photo-1495474472287-4d71bcdd2085', 900),
  },
  {
    n: '03',
    name: 'Honey Latte',
    notes: 'Espresso, raw clover honey, oat milk.',
    origin: 'House blend',
    price: '5.75',
    image: img('photo-1461023058943-07fcbe16d735', 900),
  },
  {
    n: '04',
    name: 'Iced Mocha',
    notes: 'Single-origin chocolate, slow-stirred.',
    origin: 'Guatemala · Antigua',
    price: '5.50',
    image: img('photo-1517701604599-bb29b565090c', 900),
  },
  {
    n: '05',
    name: 'Flat White',
    notes: 'Velvet microfoam, double ristretto.',
    origin: 'Brazil · Cerrado',
    price: '4.75',
    image: img('photo-1572442388796-11668a67e53d', 900),
  },
  {
    n: '06',
    name: 'Cold Brew',
    notes: 'Steeped sixteen hours. Smooth, quiet.',
    origin: 'Kenya · Nyeri',
    price: '4.25',
    image: img('photo-1517256064527-09c73fc73e38', 900),
  },
]

export const beans = [
  {
    label: 'Light',
    name: 'Morning Bloom',
    origin: 'Ethiopia',
    notes: ['Jasmine', 'Bergamot', 'Honey'],
    image: img('photo-1559056199-641a0ac8b55e', 900),
  },
  {
    label: 'Medium',
    name: 'Hearth & Home',
    origin: 'Colombia',
    notes: ['Almond', 'Caramel', 'Orange peel'],
    image: img('photo-1587734195503-904fca47e0e9', 900),
  },
  {
    label: 'Dark',
    name: 'Slow Burn',
    origin: 'Sumatra',
    notes: ['Cocoa', 'Cedar', 'Brown sugar'],
    image: img('photo-1610889556528-9a770e32642f', 900),
  },
]

export const storyImage = img('photo-1554118811-1e0d58224f24', 1400)
export const baristaImage = img('photo-1511920170033-f8396924c348', 1200)
export const interiorImage = img('photo-1453614512568-c4024d13c247', 1600)
