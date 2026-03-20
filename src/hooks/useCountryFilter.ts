import { useState, useMemo } from 'react';
import type { Country } from '@/types/restaurant';
import { MOCK_RESTAURANTS } from '@/data/restaurants';

export const useCountryFilter = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country | 'all'>('all');

  const filteredRestaurants = useMemo(() => {
    if (selectedCountry === 'all') {
      return MOCK_RESTAURANTS;
    }
    return MOCK_RESTAURANTS.filter((r) => r.country === selectedCountry);
  }, [selectedCountry]);

  return { selectedCountry, setSelectedCountry, filteredRestaurants };
};
