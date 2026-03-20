import { Box, Tabs, TabList, TabItem } from '@razorpay/blade/components';
import { COUNTRIES } from '@/data/countries';
import type { Country } from '@/types/restaurant';

interface CountryTabsProps {
  selectedCountry: Country | 'all';
  onCountryChange: (country: Country | 'all') => void;
}

export default function CountryTabs({ selectedCountry, onCountryChange }: CountryTabsProps) {
  return (
    <Box
      padding={{ base: 'spacing.4', l: 'spacing.0' }}
      backgroundColor="surface.background.gray.intense"
    >
      <Box maxWidth="1440px" width="100%" margin="auto" padding={{ base: 'spacing.0', l: 'spacing.8' }}>
        <Tabs value={selectedCountry} onChange={(value) => onCountryChange(value as Country | 'all')}>
          <TabList>
            {COUNTRIES.map((country) => (
              <TabItem key={country.id} value={country.value}>
                <Box display="flex" alignItems="center" gap="spacing.2">
                  {country.flag && (
                    <span style={{ fontSize: '16px', lineHeight: '20px' }}>
                      {country.flag}
                    </span>
                  )}
                  <span>{country.label}</span>
                </Box>
              </TabItem>
            ))}
          </TabList>
        </Tabs>
      </Box>
    </Box>
  );
}
