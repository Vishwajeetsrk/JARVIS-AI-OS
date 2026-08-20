export const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260503_144509_89e2d612-8af2-45c3-90f4-4831bc60715d.mp4";

export const HOW_IT_WORKS_IMAGE =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260503_150112_2b0e700f-7af4-4459-b326-7d9e2f468daa.png&w=1280&q=85";

export type PropertyListing = {
  title: string;
  price: string;
  location: string;
  area: number;
  floors: number;
  beds: number;
  baths: number;
  image: string;
};

export const PROPERTIES: PropertyListing[] = [
  {
    title: "Aether Heights",
    price: "$345,000",
    location: "USA/California/Malibu",
    area: 300,
    floors: 1,
    beds: 6,
    baths: 2,
    image:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260503_145701_de344c15-5eac-4c64-8bd6-19a2811bba4a.png&w=1280&q=85",
  },
  {
    title: "Azure Sanctuary",
    price: "$225,000",
    location: "Caribbean/Bahamas/Bimini",
    area: 250,
    floors: 1,
    beds: 4,
    baths: 1,
    image:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260503_145923_c1a9880c-0fab-4a76-8289-bd650d5e5dce.png&w=1280&q=85",
  },
  {
    title: "Summit Pavilion",
    price: "$510,000",
    location: "USA/Colorado/Vail",
    area: 400,
    floors: 3,
    beds: 6,
    baths: 3,
    image:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260503_150022_cdda0eaa-1c17-4f59-8188-4f98b328619f.png&w=1280&q=85",
  },
];

export const CHART_CARDS = [
  { title: "Annual growth", value: "19%", data: [35, 60, 45, 40, 55, 75, 60, 80, 55, 30] },
  { title: "Aggregate yield profit", value: "$820,000", data: [8, 12, 18, 28, 32, 38, 55, 70, 85] },
  { title: "Median returns", value: "14%", data: [10, 75, 20, 35, 30, 65, 55, 25, 40] },
] as const;
