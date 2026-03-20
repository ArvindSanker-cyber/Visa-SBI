import { useNavigate } from 'react-router-dom';
import { Box, Heading, Text } from '@razorpay/blade/components';
import type { Restaurant } from '@/types/restaurant';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/restaurant/${restaurant.id}`)}
      style={{
        cursor: 'pointer',
        background: 'transparent',
        border: 'none',
        padding: 0,
        width: '100%',
        height: '100%',
        textAlign: 'left',
      }}
    >
      <Box
        backgroundColor="surface.background.gray.intense"
        borderRadius="medium"
        overflow="hidden"
        elevation="lowRaised"
        display="flex"
        flexDirection="column"
        height="100%"
        style={{ transition: 'all 0.2s' }}
      >
        <Box position="relative" flexShrink={0}>
          {/* Restaurant Image */}
          <img
            src={restaurant.imageUrl}
            alt={restaurant.name}
            style={{
              width: '100%',
              height: '160px',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </Box>

        {/* Restaurant Info */}
        <Box padding="spacing.5" display="flex" flexDirection="column" flex={1}>
          <Heading size="medium" marginBottom="spacing.3">
            {restaurant.name}
          </Heading>
          <Text
            size="small"
            color="surface.text.gray.subtle"
            truncateAfterLines={3}
          >
            {restaurant.description}
          </Text>
        </Box>
      </Box>
    </button>
  );
}
