export type Product = {
  id: string
  name: string
  brand: string
  price: number
  category: "Watches" | "Necklaces" | "Rings" | "Earrings" | "Bracelets"
  description: string
  detail: string
  spec: string
  image: string
  material: string
  condition: "New" | "Pre-owned" | "Vintage"
}

const naira = (n: number) => n

export const products: Product[] = [
  {
    id: "geneve-1",
    name: "Geneve Tourbillon",
    brand: "Atelier Geneve",
    price: naira(48_500_000),
    category: "Watches",
    description: "A hand-wound tourbillon in 18k rose gold, the movement visible through a sapphire caseback. One of forty made.",
    detail: "Bought from a private collector in Geneva. Papers and original box included.",
    spec: "39mm · 18k rose gold · sapphire caseback · alligator strap",
    image: "https://images.pexels.com/photos/19810831/pexels-photo-19810831.jpeg?auto=compress&cs=tinysrgb&h=1200",
    material: "18k Rose Gold",
    condition: "Pre-owned",
  },
  {
    id: "heritage-1",
    name: "Heritage Chronograph",
    brand: "Maison Heritage",
    price: naira(22_900_000),
    category: "Watches",
    description: "A vintage chronograph with a panda dial, restored to working order by our master watchmaker in Ibadan.",
    detail: "Acquired at auction, London 2025. Service records available on request.",
    spec: "40mm · stainless steel · manual wind · leather strap",
    image: "https://images.pexels.com/photos/29638625/pexels-photo-29638625.jpeg?auto=compress&cs=tinysrgb&h=1200",
    material: "Stainless Steel",
    condition: "Vintage",
  },
  {
    id: "monaco-1",
    name: "Monaco Automatic",
    brand: "Atelier Geneve",
    price: naira(14_300_000),
    category: "Watches",
    description: "A dress automatic with a silvered dial and blued hands, sized for the wrist that prefers not to announce itself.",
    detail: "New, sealed, with full manufacturer warranty.",
    spec: "38mm · stainless steel · automatic · 50m water resistance",
    image: "https://images.pexels.com/photos/16093252/pexels-photo-16093252.jpeg?auto=compress&cs=tinysrgb&h=1200",
    material: "Stainless Steel",
    condition: "New",
  },
  {
    id: "solitaire-1",
    name: "Solitaire Pendant",
    brand: "Luxuria Atelier",
    price: naira(8_700_000),
    category: "Necklaces",
    description: "A single brilliant-cut diamond on a fine 18k gold chain. The diamond is set so the light enters from every angle.",
    detail: "Stone certified GIA, VS1 clarity, D colour.",
    spec: "1.2ct diamond · 18k gold chain 45cm · lobster clasp",
    image: "https://images.pexels.com/photos/19564918/pexels-photo-19564918.jpeg?auto=compress&cs=tinysrgb&h=1200",
    material: "18k Gold · Diamond",
    condition: "New",
  },
  {
    id: "cascade-1",
    name: "Cascade Necklace",
    brand: "Luxuria Atelier",
    price: naira(11_200_000),
    category: "Necklaces",
    description: "A layered gold chain that falls in three lengths, each finer than the last. Worn alone or stacked.",
    detail: "Handmade in our Ibadan atelier. Each link shaped and soldered by hand.",
    spec: "18k gold · three tiers · adjustable length",
    image: "https://images.pexels.com/photos/13924051/pexels-photo-13924051.jpeg?auto=compress&cs=tinysrgb&h=1200",
    material: "18k Gold",
    condition: "New",
  },
  {
    id: "eternity-1",
    name: "Eternity Band",
    brand: "Luxuria Atelier",
    price: naira(6_400_000),
    category: "Rings",
    description: "A full eternity ring set with pavé diamonds, the stones running unbroken around the band.",
    detail: "Available in half sizes. Resizing within one size included.",
    spec: "0.85ct total diamond weight · 18k gold · pavé set",
    image: "https://images.pexels.com/photos/2849742/pexels-photo-2849742.jpeg?auto=compress&cs=tinysrgb&h=1200",
    material: "18k Gold · Diamond",
    condition: "New",
  },
  {
    id: "signet-1",
    name: "Signet Ring",
    brand: "Maison Heritage",
    price: naira(3_900_000),
    category: "Rings",
    description: "A vintage signet in yellow gold, flat-faced, engraved with a crest that has worn soft at the edges.",
    detail: "Estate piece, circa 1970s. Engraving original, untouched.",
    spec: "18k yellow gold · 20mm face · vintage engraving",
    image: "https://images.pexels.com/photos/2732096/pexels-photo-2732096.jpeg?auto=compress&cs=tinysrgb&h=1200",
    material: "18k Yellow Gold",
    condition: "Vintage",
  },
  {
    id: "teardrop-1",
    name: "Teardrop Earrings",
    brand: "Luxuria Atelier",
    price: naira(5_100_000),
    category: "Earrings",
    description: "Diamond and rose gold teardrops that sit close to the lobe. Quiet enough for the day, present enough for the evening.",
    detail: "Post and butterfly fitting. Stones matched by hand.",
    spec: "0.6ct diamonds · 18k rose gold · teardrop setting",
    image: "https://images.pexels.com/photos/40179572/pexels-photo-40179572.jpeg?auto=compress&cs=tinysrgb&h=1200",
    material: "18k Rose Gold · Diamond",
    condition: "New",
  },
  {
    id: "manacle-1",
    name: "Gold Manacle",
    brand: "Luxuria Atelier",
    price: naira(7_800_000),
    category: "Bracelets",
    description: "A rigid gold bangle with a single diamond at the opening. The weight is the luxury; the closure is the engineering.",
    detail: "Hinged opening with a concealed safety clasp.",
    spec: "18k gold · 0.15ct diamond · hinged bangle",
    image: "https://images.pexels.com/photos/11476471/pexels-photo-11476471.jpeg?auto=compress&cs=tinysrgb&h=1200",
    material: "18k Gold · Diamond",
    condition: "New",
  },
]

export const categories = [
  "All",
  "Watches",
  "Necklaces",
  "Rings",
  "Earrings",
  "Bracelets",
] as const
