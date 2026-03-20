import { Box } from '@razorpay/blade/components';
import RestaurantCard from './RestaurantCard';
import type { Restaurant } from '@/types/restaurant';

interface RestaurantGridProps {
  restaurants: Restaurant[];
}

export default function RestaurantGrid({ restaurants }: RestaurantGridProps) {
  return (
    <Box
      padding={{ base: 'spacing.6', l: 'spacing.8' }}
      maxWidth="1440px"
      margin="auto"
    >
      <Box
        display="grid"
        gridTemplateColumns={{
          base: '1fr',
          m: 'repeat(2, 1fr)',
          l: 'repeat(4, 1fr)',
        }}
        gap="spacing.6"
      >
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </Box>
    </Box>
  );
}
