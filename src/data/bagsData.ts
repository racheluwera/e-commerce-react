export type BagProduct = {
  id: number;
  sku: string;
  name: string;
  price: number;
  originalPrice?: number;
  img: string;
  images: string[];
  description: string;
  category: string;
  brand: string;
  material: string;
  dimensions: string;
  weight: string;
  colors: string[];
  stock: number;
  rating: number;
  reviews: number;
  createdAt: string;
  updatedAt: string;
};

export const bagsData: BagProduct[] = [
  {
    id: 101,
    sku: "BAG-LBP-001",
    name: "Classic Leather Backpack",
    price: 129.99,
    originalPrice: 179.99,
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=600&q=80",
    ],
    description:
      "A timeless full-grain leather backpack built for everyday use. Features a padded laptop compartment (fits up to 15\"), multiple organizer pockets, and adjustable padded shoulder straps. The antique brass hardware and hand-stitched detailing give it a premium, heritage look that only gets better with age.",
    category: "Backpacks",
    brand: "Herschel Supply Co.",
    material: "Full-Grain Leather",
    dimensions: "18\" H × 12\" W × 6\" D",
    weight: "1.2 kg",
    colors: ["Tan", "Dark Brown", "Black"],
    stock: 18,
    rating: 4.8,
    reviews: 214,
    createdAt: "2024-01-15",
    updatedAt: "2024-12-10",
  },
  {
    id: 102,
    sku: "BAG-TTE-002",
    name: "Canvas Tote Bag",
    price: 49.99,
    img: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&q=80",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=600&q=80",
    ],
    description:
      "A spacious, eco-friendly canvas tote perfect for shopping, the beach, or daily errands. Made from 100% organic cotton canvas with reinforced handles and an interior zip pocket. Folds flat for easy storage.",
    category: "Handbags",
    brand: "Baggu",
    material: "100% Organic Cotton Canvas",
    dimensions: "15\" H × 14\" W × 4\" D",
    weight: "0.4 kg",
    colors: ["Natural", "Navy", "Olive", "Burgundy"],
    stock: 42,
    rating: 4.5,
    reviews: 389,
    createdAt: "2024-02-20",
    updatedAt: "2024-11-05",
  },
  {
    id: 103,
    sku: "BAG-CLT-003",
    name: "Leather Clutch Purse",
    price: 89.99,
    originalPrice: 110.0,
    img: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
    ],
    description:
      "An elegant evening clutch crafted from genuine pebbled leather. Features a magnetic snap closure, interior card slots, and a detachable wrist strap. Slim enough to carry to formal events yet roomy enough for your essentials.",
    category: "Clutches",
    brand: "Coach",
    material: "Genuine Pebbled Leather",
    dimensions: "9\" W × 5\" H × 1.5\" D",
    weight: "0.3 kg",
    colors: ["Black", "Nude", "Red", "Cobalt Blue"],
    stock: 9,
    rating: 4.6,
    reviews: 97,
    createdAt: "2024-03-08",
    updatedAt: "2024-10-22",
  },
  {
    id: 104,
    sku: "BAG-TRV-004",
    name: "Rolling Travel Duffel",
    price: 199.99,
    img: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=600&q=80",
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=600&q=80",
    ],
    description:
      "A versatile 40L travel duffel with a telescoping handle and inline skate wheels. Made from water-resistant 1680D ballistic nylon. Includes a separate shoe compartment, TSA-approved lock loops, and a padded laptop sleeve.",
    category: "Travel Bags",
    brand: "Samsonite",
    material: "1680D Ballistic Nylon",
    dimensions: "22\" L × 13\" W × 12\" H",
    weight: "2.1 kg",
    colors: ["Black", "Charcoal", "Navy"],
    stock: 5,
    rating: 4.7,
    reviews: 156,
    createdAt: "2024-04-01",
    updatedAt: "2024-12-01",
  },
  {
    id: 105,
    sku: "BAG-MSN-005",
    name: "Waxed Canvas Messenger Bag",
    price: 74.99,
    originalPrice: 95.0,
    img: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=600&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
    ],
    description:
      "A rugged waxed canvas messenger bag with a vintage military aesthetic. The main compartment fits a 13\" laptop, and the front flap pocket keeps your daily essentials organized. The adjustable cross-body strap distributes weight evenly for all-day comfort.",
    category: "Handbags",
    brand: "Filson",
    material: "Waxed Cotton Canvas",
    dimensions: "14\" W × 11\" H × 4\" D",
    weight: "0.9 kg",
    colors: ["Olive Drab", "Dark Navy", "Brown"],
    stock: 23,
    rating: 4.4,
    reviews: 78,
    createdAt: "2024-05-12",
    updatedAt: "2024-09-30",
  },
  {
    id: 106,
    sku: "BAG-BCK-006",
    name: "Mini Leather Bucket Bag",
    price: 115.0,
    img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&q=80",
    ],
    description:
      "A chic mini bucket bag made from soft genuine leather with a drawstring closure and a detachable flat pouch. The adjustable crossbody strap makes it perfect for a night out or a casual day look. Fits your phone, keys, cards, and a few essentials.",
    category: "Handbags",
    brand: "Madewell",
    material: "Genuine Leather",
    dimensions: "8\" H × 7\" W × 5\" D",
    weight: "0.5 kg",
    colors: ["Camel", "Black", "Cognac"],
    stock: 0,
    rating: 4.3,
    reviews: 62,
    createdAt: "2024-06-18",
    updatedAt: "2024-11-14",
  },
  {
    id: 107,
    sku: "BAG-BCK-007",
    name: "Urban Laptop Backpack",
    price: 89.0,
    originalPrice: 120.0,
    img: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
    ],
    description:
      "A sleek, minimalist backpack designed for the modern commuter. The padded 17\" laptop compartment, hidden back pocket, and USB charging port make it ideal for work or travel. Made from water-resistant recycled polyester.",
    category: "Backpacks",
    brand: "Incase",
    material: "Recycled Polyester",
    dimensions: "19\" H × 13\" W × 7\" D",
    weight: "1.0 kg",
    colors: ["Black", "Slate Gray", "Forest Green"],
    stock: 31,
    rating: 4.6,
    reviews: 305,
    createdAt: "2024-07-04",
    updatedAt: "2024-12-05",
  },
  {
    id: 108,
    sku: "BAG-SHL-008",
    name: "Quilted Shoulder Bag",
    price: 159.0,
    img: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80",
    ],
    description:
      "A luxurious quilted shoulder bag inspired by classic French fashion houses. Features a gold-tone chain strap, CC-style turn-lock closure, and a satin-lined interior with a zip pocket. Elevates any outfit from casual to couture.",
    category: "Handbags",
    brand: "Kate Spade",
    material: "Quilted Lambskin Leather",
    dimensions: "10\" W × 7\" H × 3\" D",
    weight: "0.6 kg",
    colors: ["Black", "Ivory", "Blush Pink"],
    stock: 7,
    rating: 4.9,
    reviews: 143,
    createdAt: "2024-08-22",
    updatedAt: "2024-12-08",
  },
];
