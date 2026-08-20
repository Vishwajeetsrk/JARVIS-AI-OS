export const HERO_IMAGE =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_101925_8e509c31-4e75-4ae1-b164-2605265b2d47.png&w=1280&q=85";

export const HERO_VIDEOS = [
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_112022_cddf2487-4ffe-45b6-ba4c-99ab79003cc5.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260518_175400_b46d1cd2-2050-45e2-9d13-b9c0bacb16b3.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260518_182440_671605c8-2ed8-4507-a4cb-a62a8f61316f.mp4",
] as const;

const IMG1 =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260518_193822_8c95f5ed-b142-454f-ab87-59ad1f09e758.png&w=1280&q=85";
const IMG2 =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260518_194048_278bf3cc-7d1f-43c1-9dc7-73d8fcd9949c.png&w=1280&q=85";
const IMG3 =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260518_194058_d89610de-05f8-45e4-8196-0680296c565a.png&w=1280&q=85";
const IMG4 =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260518_194112_1763cbb2-3171-4ad3-9f38-1b738b8f1bb6.png&w=1280&q=85";

export type Product = {
  category: string;
  subcategory?: string;
  name: string;
  price: string;
  oldPrice?: string;
  image: string;
  isSet?: boolean;
};

export const PRODUCTS: Product[] = [
  {
    category: "ILLUMINATE",
    name: "Illuminating cleansing gel",
    price: "€36,00",
    image: IMG1,
  },
  {
    category: "UNIFY",
    subcategory: "TIGHTEN PORES",
    name: "Unifying serum spray",
    price: "€34,00",
    image: IMG2,
  },
  {
    category: "NATURAL GLOW",
    name: "Super glow set",
    price: "€92,00",
    oldPrice: "€99,00",
    image: IMG3,
    isSet: true,
  },
  {
    category: "PROTECT",
    subcategory: "ILLUMINATE",
    name: "Radiance day oil",
    price: "€59,00",
    image: IMG4,
  },
  {
    category: "HYDRATE",
    subcategory: "NOURISH",
    name: "Deep moisture cream",
    price: "€48,00",
    image: IMG1,
  },
  {
    category: "RENEW",
    name: "Night repair elixir",
    price: "€72,00",
    oldPrice: "€79,00",
    image: IMG2,
    isSet: true,
  },
  {
    category: "SMOOTH",
    subcategory: "REFINE",
    name: "Gentle exfoliating toner",
    price: "€42,00",
    image: IMG3,
  },
];

export type Category = {
  name: string;
  slug: string;
  video: string;
};

export const CATEGORIES: Category[] = [
  {
    name: "face",
    slug: "face",
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260518_203023_87a26602-2898-4acc-a396-c7a2b5ad84fd.mp4",
  },
  {
    name: "beauty tools",
    slug: "beauty-tools",
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260518_203415_b86e3f19-2aec-46cd-9a86-b64c40118e38.mp4",
  },
  {
    name: "body",
    slug: "body",
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260518_203051_85fee398-ea01-4aa0-972b-137a74213be5.mp4",
  },
];

export const NAV_LINKS = [
  { label: "shop", section: "best-sellers" },
  { label: "learn", section: "hero" },
  { label: "journal", route: "journal" },
  { label: "theme", section: "categories" },
] as const;
