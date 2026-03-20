import { Box, Chip, ChipGroup, MapPinIcon } from '@razorpay/blade/components';

interface RestaurantChipsProps {
  location?: string;
  cuisine?: string;
}

export default function RestaurantChips({ location, cuisine }: RestaurantChipsProps) {
  if (!location && !cuisine) return null;

  const handleLocationClick = () => {
    if (location) {
      // Opens Google Maps with the location
      // On mobile: Opens in Google Maps app if installed
      // On desktop: Opens in new tab
      window.open(`https://maps.google.com/?q=${encodeURIComponent(location)}`, '_blank');
    }
  };

  return (
    <Box marginTop="spacing.3">
      <ChipGroup accessibilityLabel="Restaurant information">
        {location && (
          <button
            type="button"
            onClick={handleLocationClick}
            style={{
              background: 'transparent',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
            }}
          >
            <Chip icon={MapPinIcon}>{location}</Chip>
          </button>
        )}
        {cuisine && (
          <Chip>{cuisine}</Chip>
        )}
      </ChipGroup>
    </Box>
  );
}
