import { useParams } from 'react-router-dom';
import { Box } from '@razorpay/blade/components';
import { MOCK_RESTAURANTS } from '@/data/restaurants';
import BookingHero from '@/components/booking/BookingHero';
import BookingForm from '@/components/booking/BookingForm';

export default function Booking() {
  const { id } = useParams<{ id: string }>();
  const restaurant = MOCK_RESTAURANTS.find((r) => r.id === id);

  if (!restaurant) {
    return (
      <Box padding="spacing.8" maxWidth="1200px" margin="auto">
        Restaurant not found
      </Box>
    );
  }

  return (
    <>
      {/* Gradient Hero Background */}
      <BookingHero restaurantName={restaurant.name} />

      {/* Centered Booking Form Card */}
      <Box maxWidth="1440px" margin="auto" position="relative">
        <BookingForm restaurantId={restaurant.id} restaurantName={restaurant.name} />

        {/* Bottom spacing before footer */}
        <Box height="72px" />
      </Box>
    </>
  );
}
