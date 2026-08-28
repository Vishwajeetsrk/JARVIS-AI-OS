export interface SuggestionChip {
  id: string;
  label: string;
  prompt: string;
  description: string;
}

export interface MediaSelection {
  id: string;
  source: 'suggestion' | 'upload';
  images: string[];    // asset URLs or data URLs
  description: string;
}

export const MAX_PRODUCT_IMAGES = 1; // Since we are generating single images

export const PRODUCTS: SuggestionChip[] = [
  {
    id: 'mug',
    label: 'Artisan Mug',
    prompt: 'An elegant artisan ceramic mug with a gradient glaze and a large perfectly round handle, studio product photography',
    description: 'Artisan ceramic mug with a gradient glaze featuring a large, perfectly round, thick handle.'
  },
  {
    id: 'colorful_mug',
    label: 'Colorful Mug',
    prompt: 'A vibrant colorful hand-painted ceramic coffee mug on a clean surface, studio product photography',
    description: 'A vibrant colorful hand-painted ceramic coffee mug.'
  },
  {
    id: 'perfume',
    label: 'Perfume Bottle',
    prompt: 'A luxury ornate glass perfume bottle with sodalite and malachite minerals, studio product photography',
    description: "A bottle of perfume called 'Nerelle'. The ornate bottle features real stone minerals, sodalite, and malachite."
  },
  {
    id: 'sneaker',
    label: 'Running Sneaker',
    prompt: 'A premium luxury running sneaker with a sculptural modular sole, suede and mesh panels, studio product photography',
    description: 'Premium luxury running sneakers. Sculptural modular sole and an upper made out of suede nubuck leather and mesh sculptural panels.'
  }
];

export const ATMOSPHERES: SuggestionChip[] = [
  {
    id: 'marble_plinth',
    label: 'Marble Plinth',
    prompt: 'A pristine Carrara marble plinth resting against a soft sage green backdrop, warm directional sunlight with soft shadows',
    description: 'Minimalist craft luxury. A pristine Carrara marble plinth rests against a soft sage backdrop. Crisp directional sunlight casts soft shadows, creating an earthy yet elevated aesthetic. The {product_id} is seen in perfect detail, conveying texture, calm, and sophisticated gradients.'
  },
  {
    id: 'travertine_blocks',
    label: 'Travertine Blocks',
    prompt: 'Warm porous travertine blocks creating a structured geometric podium under a brilliant azure sky, soft dappled leaf shadows',
    description: 'Mediterranean, modern luxury. Warm, porous travertine blocks create a structured geometric podium beneath a brilliant azure sky, presenting the {product_id} perfectly. Soft dappled leaf shadows contrast the sharp architectural lines, evoking a serene, sun-drenched coastal escape.'
  },
  {
    id: 'plaster_palm',
    label: 'Plaster & Palm',
    prompt: 'A warm sun-drenched polished plaster corner with a soft rose-tinted floor and crisp palm frond silhouettes casting dramatic shadows',
    description: 'Mediterranean minimalism utilizing a warm sun-drenched, polished plaster corner with a soft rose-tinted floor. Crisp palm frond silhouettes cast dramatic yet serene shadows evoking a premium organic golden-hour mood.'
  },
  {
    id: 'concrete_wall',
    label: 'Concrete Wall',
    prompt: 'A minimalist scene with a clean raw concrete wall background and subtle industrial textures, dramatic side-lighting',
    description: 'A minimalist scene with a clean raw concrete wall background and subtle industrial textures, dramatic side-lighting.'
  }
];
