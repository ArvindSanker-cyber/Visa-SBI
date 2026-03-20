import { Text } from '@razorpay/blade/components';
import type { RestaurantOffer as RestaurantOfferType } from '@/types/restaurant';

interface RestaurantOfferProps {
  offer?: RestaurantOfferType;
}

export default function RestaurantOffer({ offer }: RestaurantOfferProps) {
  if (!offer) return null;

  return (
    <div style={{ color: offer.color || '#006c3f' }}>
      <Text size="large" weight="semibold">
        {offer.title}
      </Text>
    </div>
  );
}
