import { Box, Heading, Text } from '@razorpay/blade/components';
import type { Restaurant } from '@/types/restaurant';
import { COUNTRIES } from '@/data/countries';

interface RestaurantInfoProps {
  restaurant: Restaurant;
}

export default function RestaurantInfo({ restaurant }: RestaurantInfoProps) {
  const countryData = COUNTRIES.find((c) => c.value === restaurant.country);

  return (
    <Box display="flex" flexDirection="column" gap="spacing.3">
      {/* Restaurant Name & Country */}
      <Box display="flex" alignItems="center" gap="spacing.3" flexWrap="wrap">
        <Heading size="xlarge">{restaurant.name}</Heading>

        {/* Country Flag & Name */}
        {countryData && (
          <Box display="flex" alignItems="center" gap="spacing.2">
            {countryData.flag && (
              <span style={{ fontSize: '16px', lineHeight: '20px' }}>
                {countryData.flag}
              </span>
            )}
            <Text size="small" weight="regular" color="surface.text.gray.subtle">
              {countryData.label}
            </Text>
          </Box>
        )}
      </Box>

      {/* Description */}
      <Text size="small" weight="regular" color="surface.text.gray.subtle">
        {restaurant.description}
      </Text>
    </Box>
  );
}
