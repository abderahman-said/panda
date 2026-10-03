export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "coffee" | "iced" | "bakery" | "special";
  tag?: string;
  badge?: string;
  calories?: string;
}

export const menuCategories = [
  { id: "all", label: "All Items" },
  { id: "coffee", label: "Hot Coffees" },
  { id: "iced", label: "Iced & Cold Brews" },
  { id: "bakery", label: "Artisan Bakery" },
  { id: "special", label: "Panda Specials" },
] as const;

export const fullMenuItems: MenuItem[] = [
  {
    id: "panda-special",
    name: "Panda Signature Latte",
    description: "Handcrafted espresso with velvety microfoam featuring our adorable panda foam art.",
    price: 5.25,
    image: "/images/panda-latte-art.jpg",
    category: "special",
    tag: "Signature",
    badge: "Most Loved",
    calories: "180 kcal",
  },
  {
    id: "cappuccino",
    name: "Artisan Cappuccino",
    description: "Rich double espresso poured with dense, creamy steamed milk and dusting of cocoa.",
    price: 4.25,
    image: "/images/cappuccino.jpg",
    category: "coffee",
    tag: "Barista Pick",
    badge: "100% Arabica",
    calories: "140 kcal",
  },
  {
    id: "iced-latte",
    name: "Classic Iced Latte",
    description: "Smooth espresso shots over chilled whole milk and crystal-clear ice cubes.",
    price: 4.50,
    image: "/images/iced-latte.jpg",
    category: "iced",
    tag: "Best Seller",
    badge: "Cold Refreshing",
    calories: "130 kcal",
  },
  {
    id: "mocha",
    name: "Artisan Iced Mocha",
    description: "Decadent dark chocolate melted into bold espresso, topped with whipped cream swirl.",
    price: 4.75,
    image: "/images/mocha.jpg",
    category: "coffee",
    tag: "Rich & Sweet",
    badge: "Belgian Cocoa",
    calories: "260 kcal",
  },
  {
    id: "cold-brew",
    name: "Nitro Cold Brew",
    description: "Steeped slowly for 18 hours, nitrogen-infused for a creamy cascading microfoam.",
    price: 4.80,
    image: "/images/cold-brew.jpg",
    category: "iced",
    tag: "Single Origin",
    badge: "Zero Sugar",
    calories: "5 kcal",
  },
  {
    id: "croissant",
    name: "Golden Butter Croissant",
    description: "Traditional French flaky pastry baked freshly every morning using pure butter.",
    price: 3.50,
    image: "/images/croissant.jpg",
    category: "bakery",
    tag: "Fresh Baked",
    badge: "Pure Butter",
    calories: "230 kcal",
  },
  {
    id: "morning-combo",
    name: "Morning Duet",
    description: "A steaming cup of artisan latte paired with a warm golden-baked butter croissant.",
    price: 6.95,
    image: "/images/coffee-pastry.jpg",
    category: "special",
    tag: "Special Combo",
    badge: "Breakfast Special",
    calories: "370 kcal",
  },
  {
    id: "baby-panda-treat",
    name: "Panda Fluffy Treat",
    description: "Sweet milk froth dusted with cinnamon and chocolate sprinkles, friendly for all ages.",
    price: 3.25,
    image: "/images/baby-panda.jpg",
    category: "special",
    tag: "House Special",
    badge: "Kid-Friendly",
    calories: "110 kcal",
  },
];
