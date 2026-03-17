export type Hotel = {
  slug: string;
  name: string;
  location: string;
  country: string;
  tags: string[];
  blurb: string;
  image: string;
};

export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  image: string;
};

export type Guide = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
};

export type Offer = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
};

export const hotels: Hotel[] = [
  {
    slug: "the-flat-iron-hotel",
    name: "The Grand Riviera",
    location: "Miami, Florida",
    country: "USA",
    tags: ["new", "beach", "luxury", "spa"],
    blurb:
      "A stunning oceanfront resort blending art deco charm with modern luxury in vibrant Miami.",
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=2400&q=80",
  },
  {
    slug: "noa-hotel-shenzhen",
    name: "Oasis Resort & Spa",
    location: "Maldives",
    country: "Maldives",
    tags: ["new", "island", "honeymoon"],
    blurb:
      "Overwater bungalows and crystal clear waters await at this private island paradise.",
    image:
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=2400&q=80",
  },
  {
    slug: "magia-de-uma",
    name: "Alpine Retreat Lodge",
    location: "Zermatt",
    country: "Switzerland",
    tags: ["new", "mountain", "ski", "cozy"],
    blurb:
      "A cozy, luxurious ski-in/ski-out lodge with breathtaking views of the Matterhorn.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2400&q=80",
  },
  {
    slug: "urban-loft",
    name: "The Urban Loft",
    location: "New York City",
    country: "USA",
    tags: ["city", "boutique", "design-led"],
    blurb:
      "Industrial chic meets modern comfort in the heart of Brooklyn.",
    image:
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=2400&q=80",
  },
];

export const offers: Offer[] = [
  {
    slug: "exclusive-community-deal",
    title: "Exclusive community deal",
    excerpt: "Members save up to 50% at selected hotels.",
    image:
      "https://images.unsplash.com/photo-1501117716987-c8e1ecb210ff?auto=format&fit=crop&w=2400&q=80",
  },
  {
    slug: "weekend-escape",
    title: "Weekend escape offers",
    excerpt: "Short stays designed for quick resets.",
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=2400&q=80",
  },
  {
    slug: "advance-purchase",
    title: "Advance purchase",
    excerpt: "Book early and enjoy better rates.",
    image:
      "https://images.unsplash.com/photo-1551887373-6b33e9dbe0b9?auto=format&fit=crop&w=2400&q=80",
  },
];

export const articles: Article[] = [
  {
    slug: "worlds-best-art-2026",
    title: "The World’s Best Art: 2026",
    category: "Design",
    excerpt:
      "From Amsterdam to Tokyo, where you’ll find this year’s greatest creative statements.",
    date: "2026-01-10",
    image:
      "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=2400&q=80",
  },
  {
    slug: "hot-tropical-modernism",
    title: "Hot Tropical Modernism",
    category: "Architecture",
    excerpt:
      "From Bali to Mexico, discover tropical modernism at its best.",
    date: "2026-02-03",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=2400&q=80",
  },
  {
    slug: "in-living-color",
    title: "In Living Color",
    category: "Originals",
    excerpt:
      "A conversation on aesthetics, hospitality, and the joy of maximalism.",
    date: "2026-02-18",
    image:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=2400&q=80",
  },
];

export const guides: Guide[] = [
  {
    slug: "paris",
    title: "Paris",
    excerpt:
      "Bistros, river walks, and neighborhoods that reward slow wandering.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=2400&q=80",
  },
  {
    slug: "london",
    title: "London",
    excerpt:
      "From museums to markets—culture and food on every corner.",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=2400&q=80",
  },
  {
    slug: "portugal",
    title: "Portugal",
    excerpt: "Colorful hillsides, sunlit beaches, and late-night dining.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2400&q=80",
  },
];

