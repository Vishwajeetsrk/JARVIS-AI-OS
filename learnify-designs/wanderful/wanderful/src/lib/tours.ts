import { TRAVEL_IMAGES } from "./images";

export type Tour = {
  id: string;
  image: string;
  video?: string;
  images: string[];
  name: string;
  description: string;
  price: number;
  priceDisplay: string;
  friends: number;
  bestTime: string;
  visa: string;
  imgH: number;
  w: number;
};

const { img1, img2, img3, img4, img5, img6, img7, img8, img9, img10 } = TRAVEL_IMAGES;

export const tours: Tour[] = [
  {
    id: "cold-islands-norway",
    image: img1,
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_071134_9cc2f2d8-a599-4a73-8c89-6eb4af170352.mp4",
    images: [img4, img6, img9],
    name: "Cold Islands Norway",
    description:
      "Experience the raw beauty of Norway's remote arctic islands. From dramatic fjords to the magical northern lights, Norway offers a perfect blend of wilderness and Scandinavian culture.",
    price: 1800,
    priceDisplay: "$1,800",
    friends: 8,
    bestTime: "Jun - Sep",
    visa: "Schengen / EU",
    imgH: 230,
    w: 200,
  },
  {
    id: "serengeti-tanzania",
    image: img2,
    images: [img5, img7, img8],
    name: "Serengeti National Park, Tanzania",
    description:
      "Witness the greatest wildlife spectacle on Earth. The Serengeti offers unmatched safari experiences, from the Great Migration to close encounters with the Big Five across endless golden plains.",
    price: 2400,
    priceDisplay: "$2,400",
    friends: 14,
    bestTime: "Jul - Oct",
    visa: "Visa on arrival",
    imgH: 310,
    w: 340,
  },
  {
    id: "switzerland-alps",
    image: img3,
    images: [img1, img6, img10],
    name: "Switzerland",
    description:
      "Experience the pinnacle of alpine serenity. From the pristine peaks of the Jungfrau region to the crystal-clear waters of Lake Brienz, Switzerland offers a perfect blend of high-end comfort and untouched nature.",
    price: 3200,
    priceDisplay: "$3,200",
    friends: 12,
    bestTime: "May - Oct",
    visa: "Schengen / EU",
    imgH: 360,
    w: 250,
  },
  {
    id: "norway-coastal",
    image: img4,
    images: [img1, img9, img6],
    name: "Cold Islands Norway",
    description:
      "Sail through Norway's stunning coastal landscapes where turquoise waters meet towering cliffs. A journey through some of the most dramatic scenery on the planet.",
    price: 1800,
    priceDisplay: "$1,800",
    friends: 6,
    bestTime: "May - Aug",
    visa: "Schengen / EU",
    imgH: 215,
    w: 210,
  },
  {
    id: "mountain-valleys-iceland",
    image: img6,
    images: [img5, img3, img9],
    name: "Mountain Valleys, Iceland",
    description:
      "Explore Iceland's surreal volcanic landscapes, cascading waterfalls and geothermal wonders. A land of fire and ice unlike anywhere else on Earth.",
    price: 2100,
    priceDisplay: "$2,100",
    friends: 9,
    bestTime: "Jun - Aug",
    visa: "Schengen / EU",
    imgH: 250,
    w: 235,
  },
  {
    id: "hidden-coves-croatia",
    image: img7,
    images: [img8, img2, img5],
    name: "Hidden Coves, Croatia",
    description:
      "Discover Croatia's secluded Adriatic coastline — crystal clear waters, ancient walled cities and charming fishing villages tucked between dramatic limestone cliffs.",
    price: 1950,
    priceDisplay: "$1,950",
    friends: 11,
    bestTime: "May - Sep",
    visa: "Schengen / EU",
    imgH: 300,
    w: 220,
  },
  {
    id: "desert-dunes-morocco",
    image: img8,
    images: [img2, img7, img10],
    name: "Desert Dunes, Morocco",
    description:
      "Journey into the Sahara's vast golden dunes, ancient medinas and vibrant souks. Morocco blends Berber, Arab and French influences into one unforgettable sensory experience.",
    price: 1600,
    priceDisplay: "$1,600",
    friends: 7,
    bestTime: "Oct - Apr",
    visa: "Visa free / 90 days",
    imgH: 240,
    w: 215,
  },
];

export function getTourById(id: string): Tour | undefined {
  return tours.find((t) => t.id === id);
}

export function tourDetailPath(id: string): string {
  return `destinations/${id}`;
}
