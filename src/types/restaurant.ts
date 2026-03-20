export type Country =
  | 'thailand'
  | 'singapore'
  | 'dubai'
  | 'united-kingdom'
  | 'united-states'
  | 'vietnam';

export interface RestaurantOffer {
  title: string;
  description?: string;
  color?: string; // e.g., '#006c3f' for green
}

export interface OperatingHours {
  lunch?: string;
  dinner?: string;
  allDay?: string;
}

export interface MenuSection {
  id: string;
  title: string;
  pages: number;
  imageUrl?: string;
  pdfUrl?: string; // For future PDF integration
}

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  country: Country;
  city?: string; // City name (e.g., "Houston", "Bangkok", "London")
  imageUrl: string;
  images?: string[]; // Array for carousel
  hasGiftCard: boolean;
  cuisine?: string;
  address?: string;
  phone?: string;
  rating?: number;
  priceRange?: string;

  // Detail page fields
  location?: string; // e.g., "Marina Bay Sands"
  offer?: RestaurantOffer;
  hours?: OperatingHours;
  menus?: MenuSection[];
  termsAndConditions?: string;
  about?: string;
}
