export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  category: 'Embroidered' | 'Canvas' | 'Everyday' | 'Statement';
  description: string;
  shortDesc: string;
  images: string[];
  materials: string[];
  care: string[];
  inStock: boolean;
  featured: boolean;
  bestSeller: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface NavLink {
  label: string;
  href: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'The Kind Soul',
    slug: 'the-kind-soul',
    price: 1850,
    category: 'Embroidered',
    description:
      'Some bags are made to carry things. This one is made to carry intention. The Kind Soul features a hand-embroidered portrait — soft curls, closed eyes, a face at rest — and below it, the word "kind" stitched in warm golden thread. It is a reminder you carry with you. A quiet philosophy made visible. Each line of the embroidery was placed by hand on undyed natural canvas, worked slowly, without rush. The face is not perfect. That is the point. Perfection was never the goal. Presence was.',
    shortDesc:
      'Hand-embroidered portrait with "kind" in golden thread. A quiet reminder, carried everywhere.',
    images: ['/products/kind-soul.png'],
    materials: [
      '100% undyed natural canvas',
      'Hand-spun cotton thread in cocoa and gold',
      'Cotton twill handles',
      'Interior pocket',
    ],
    care: [
      'Spot clean with cool damp cloth',
      'Air dry flat in shade',
      'Do not machine wash or tumble dry',
      'Store in the cotton dust bag provided',
    ],
    inStock: true,
    featured: true,
    bestSeller: true,
  },
  {
    id: '2',
    name: 'The Garden Song',
    slug: 'the-garden-song',
    price: 2100,
    category: 'Embroidered',
    description:
      'A garden does not rush. It grows in its own rhythm, branch by branch, berry by berry — and this bag was made the same way. The Garden Song is dense with life: hand-embroidered stems rise in muted sage, crowned with round berry clusters in terracotta and deep burgundy. Every stitch is a choice. Every cluster of leaves a decision made slowly, needle pulled through canvas over hours. The result is something that feels like a morning in a quiet garden — unhurried, alive, and full of small beautiful details.',
    shortDesc:
      'Dense botanical embroidery with sage stems and terracotta berry clusters. A garden you carry.',
    images: ['/products/garden-song.png'],
    materials: [
      '100% undyed natural canvas',
      'Premium cotton embroidery thread — sage, terracotta, burgundy',
      'Reinforced cotton handles',
      'Interior zip pocket',
    ],
    care: [
      'Spot clean with cool water only',
      'Lay flat to dry away from direct sunlight',
      'Do not iron over embroidery',
      'Store stuffed with tissue to hold shape',
    ],
    inStock: true,
    featured: true,
    bestSeller: true,
  },
  {
    id: '3',
    name: 'The Rose Petal',
    slug: 'the-rose-petal',
    price: 1950,
    category: 'Statement',
    description:
      'There is a softness to this bag that is hard to put into words. The Rose Petal carries a single large embroidered bloom — a peony or garden rose, depending on how you look at it — in layers of dusty pink and blush, with a gentle flush of sage at the leaves. It is not ornate. It is quiet. One flower, given the whole canvas. We spent weeks getting the petal shading right — the way light falls across a bloom, the way the edges curl just slightly. The result is a bag that makes people stop and look closely.',
    shortDesc:
      'A single embroidered bloom in dusty blush and sage. Quiet beauty, given all the space it deserves.',
    images: ['/products/rose-petal.png'],
    materials: [
      'Natural canvas with soft hand-feel',
      'Blush, dusty rose, and sage cotton thread',
      'Short carry handles',
      'Interior slip pocket',
    ],
    care: [
      'Spot clean only — blush threads are delicate',
      'Cool water, gentle dabbing motion',
      'Do not wring or twist',
      'Air dry away from heat',
    ],
    inStock: true,
    featured: false,
    bestSeller: true,
  },
  {
    id: '4',
    name: 'The Moon Garden',
    slug: 'the-moon-garden',
    price: 2400,
    category: 'Statement',
    description:
      'Night-blooming flowers. A crescent moon stitched from a thousand tiny floral clusters. The Moon Garden is the most poetic piece in our collection — a crescent shape filled entirely with hand-embroidered meadow flowers in ivory, blush, and soft lavender. It took longer to make than any other bag we have designed. The flowers are so small, each one complete in itself, and yet together they trace the arc of a moon. We think of this one as a piece of wearable art. You will be asked about it everywhere you go.',
    shortDesc:
      'A crescent moon filled with hand-embroidered meadow flowers. Wearable poetry.',
    images: ['/products/moon-garden.png'],
    materials: [
      'Heavyweight natural canvas',
      'Ivory, blush, and lavender cotton thread',
      'Long shoulder handles',
      'Magnetic snap closure',
      'Interior zip and slip pockets',
    ],
    care: [
      'Spot clean with damp cloth',
      'Handle with extra care — high embroidery density',
      'Do not machine wash',
      'Store flat or hanging to preserve shape',
    ],
    inStock: true,
    featured: true,
    bestSeller: false,
  },
  {
    id: '5',
    name: 'The Herb Keeper',
    slug: 'the-herb-keeper',
    price: 1750,
    category: 'Everyday',
    description:
      'For those who keep a kitchen garden, who know the names of plants, who believe that growing something is an act of care. The Herb Keeper features three hand-embroidered terracotta pots, each holding a different herb — basil, mint, and something that looks like it might be thyme. The pots are warm ochre, the leaves are varying shades of sage and forest green. It is the kind of bag that makes people smile when they see it. Practical and joyful — exactly what a daily bag should be.',
    shortDesc:
      'Three embroidered herb pots in terracotta and sage. For those who know how to tend things.',
    images: ['/products/herb-keeper.png'],
    materials: [
      'Medium-weight natural canvas',
      'Forest green, sage, and ochre cotton thread',
      'Reinforced base for daily use',
      'Interior pocket with zip',
    ],
    care: [
      'Spot clean with cool damp cloth',
      'Air dry completely before storing',
      'Do not soak or machine wash',
      'Canvas will soften beautifully with use',
    ],
    inStock: true,
    featured: false,
    bestSeller: true,
  },
  {
    id: '6',
    name: 'The Marigold',
    slug: 'the-marigold',
    price: 1900,
    category: 'Embroidered',
    description:
      'In India, marigolds are placed at thresholds. They welcome. They bless. They mark beginnings. The Marigold carries four hand-embroidered marigold blooms in warm saffron and deep amber, their petals layered and full. Between them, tiny leaves in forest green give the arrangement a garden-picked feeling. This bag is rooted in something older than fashion — it is connected to ritual, to celebration, to the idea that beauty serves a purpose. We make it slowly, with that history in mind.',
    shortDesc:
      'Four embroidered marigolds in saffron and amber. Rooted in ritual, made for the everyday.',
    images: ['/products/marigold-bloom.png'],
    materials: [
      '100% natural canvas',
      'Saffron, amber, and forest green cotton thread',
      'Traditional knotted handle ends',
      'Raw hem interior finish',
    ],
    care: [
      'Spot clean gently — amber threads are rich-dyed',
      'Avoid prolonged sun exposure to preserve thread colour',
      'Air dry naturally',
      'Do not bleach or dry clean',
    ],
    inStock: true,
    featured: false,
    bestSeller: true,
  },
  {
    id: '7',
    name: 'The Lavender Field',
    slug: 'the-lavender-field',
    price: 2050,
    category: 'Embroidered',
    description:
      'Hold it and something shifts. The Lavender Field carries a hand-embroidered bouquet of lavender — long stalks, tiny florets worked in violet and dusty purple, pale sage stems that breathe. It is the kind of bag that carries a feeling with it. Calm. Unhurried. A little dreamy. We make it for those who know that the right object can change the quality of a day. Carry it to the market. Carry it somewhere slow. Let the lavender do what lavender does.',
    shortDesc:
      'A hand-embroidered lavender bouquet in violet and sage. For slow days and quiet moments.',
    images: ['/products/lavender-field.png'],
    materials: [
      'Soft-washed natural canvas',
      'Violet, dusty purple, and sage cotton thread',
      'Dropped shoulder handles',
      'Interior slip pocket',
    ],
    care: [
      'Spot clean with cool water',
      'Air dry — do not wring',
      'Store away from direct sunlight to preserve purple tones',
      'Canvas softens beautifully with gentle use',
    ],
    inStock: true,
    featured: false,
    bestSeller: false,
  },
  {
    id: '8',
    name: 'The Melody',
    slug: 'the-melody',
    price: 1800,
    category: 'Everyday',
    description:
      'For those who move through the world with a song inside them. The Melody features a hand-embroidered treble clef — the opening symbol of written music — stitched in deep forest green, with a small golden note accent beside it. It hangs beautifully. It speaks without being loud. We made this one for the musicians, the listeners, the people who believe music is not background but foreground. Carry it to rehearsals. Carry it to concerts. Carry it because you have a song in you and you want the world to know.',
    shortDesc:
      'A hand-embroidered treble clef in forest green with a gold note. For those who carry music.',
    images: ['/products/the-melody.png'],
    materials: [
      'Natural canvas, medium weight',
      'Forest green and gold cotton thread',
      'Standard tote handles',
      'Clean interior with single pocket',
    ],
    care: [
      'Spot clean with damp cloth',
      'Air dry naturally',
      'Do not machine wash — gold thread is hand-applied',
      'Gentle pressing if needed, avoid embroidery area',
    ],
    inStock: true,
    featured: false,
    bestSeller: false,
  },
  {
    id: '9',
    name: 'The Mountain Path',
    slug: 'the-mountain-path',
    price: 2250,
    category: 'Statement',
    description:
      'A house at the foot of mountains. A crescent moon above the peaks. A path winding through wildflowers toward something quiet and good. The Mountain Path is our most scenic piece — a hand-embroidered landscape that tells a whole story on canvas. Sage mountain peaks, terracotta roof, tiny flowers in warm red and blush, a moon in ivory. It is the bag for the ones who feel most themselves in open spaces. The ones who hike, who wander, who believe the journey is the point. Made slowly, like a walk should be.',
    shortDesc:
      'An embroidered mountain landscape with house, moon, and wildflowers. For the ones who wander.',
    images: ['/products/mountain-path.png'],
    materials: [
      'Heavyweight natural canvas',
      'Sage, terracotta, ivory, and blush cotton thread',
      'Long shoulder handles',
      'Button-snap closure',
      'Interior zip pocket and two slip pockets',
    ],
    care: [
      'Spot clean only — layered embroidery',
      'Cool water and mild soap if needed',
      'Air dry flat',
      'Store folded with tissue paper padding',
    ],
    inStock: true,
    featured: true,
    bestSeller: false,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya R.',
    location: 'Bangalore',
    text: 'I ordered The Kind Soul and when it arrived I just sat with it for a while before using it. It is genuinely one of the most beautiful things I own. The embroidery is so detailed — you can feel the hours in it.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Ananya M.',
    location: 'Mumbai',
    text: 'The Garden Song is exactly what I wanted. I was tired of mass-produced bags that look the same everywhere. This feels like it was made for me. I carry it everywhere and get stopped every week.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Shreya T.',
    location: 'Delhi',
    text: 'The Moon Garden is breathtaking. I keep finding new details in the embroidery. My friends thought it was vintage. I told them it is brand new and handmade. The quality is extraordinary.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Kavitha N.',
    location: 'Chennai',
    text: 'Ordered The Marigold for my mother. She cried when she opened it. She said it reminded her of the flowers outside our old house. That is the power of something made with intention.',
    rating: 5,
  },
  {
    id: '5',
    name: 'Rhea S.',
    location: 'Pune',
    text: 'The Herb Keeper is my everyday bag now. It is sturdy, spacious, and the embroidery still looks perfect after three months of daily use. Dhara clearly uses excellent materials.',
    rating: 5,
  },
  {
    id: '6',
    name: 'Meera J.',
    location: 'Hyderabad',
    text: 'I bought The Lavender Field on a whim and it completely changed how I think about bags. I used to buy fast fashion accessories. Never again. When something is made this way, you feel it.',
    rating: 5,
  },
];

export const navLinks: NavLink[] = [
  { label: 'Collection', href: '/shop' },
  { label: 'Story', href: '/about' },
  { label: 'Journal', href: '#' },
  { label: 'Contact', href: '/contact' },
];
