import type { Country } from './restaurant';

export interface CountryFilter {
  id: string;
  label: string;
  value: Country | 'all';
  flag?: string; // Unicode flag emoji
}
