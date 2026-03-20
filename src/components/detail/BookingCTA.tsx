import { useNavigate } from 'react-router-dom';
import { Button, Box } from '@razorpay/blade/components';

interface BookingCTAProps {
  restaurantId: string;
}

export default function BookingCTA({ restaurantId }: BookingCTAProps) {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate(`/booking/${restaurantId}`);
  };

  return (
    <Button
      variant="primary"
      size="large"
      onClick={handleBooking}
      isFullWidth={{ base: true, l: false }}
    >
      Book Now
    </Button>
  );
}
