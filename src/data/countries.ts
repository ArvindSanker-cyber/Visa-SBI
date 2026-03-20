import type { CountryFilter } from '@/types/country';

export const COUNTRIES: CountryFilter[] = [
  { id: 'all', label: 'All', value: 'all', flag: '🌍' },
  { id: 'thailand', label: 'Thailand', value: 'thailand', flag: '🇹🇭' },
  { id: 'singapore', label: 'Singapore', value: 'singapore', flag: '🇸🇬' },
  { id: 'dubai', label: 'Dubai', value: 'dubai', flag: '🇦🇪' },
  { id: 'united-kingdom', label: 'United Kingdom', value: 'united-kingdom', flag: '🇬🇧' },
  {
    id: 'united-states',
    label: 'United States of America',
    value: 'united-states',
    flag: '🇺🇸',
  },
  { id: 'vietnam', label: 'Vietnam', value: 'vietnam', flag: '🇻🇳' },
];
