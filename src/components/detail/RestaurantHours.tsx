import { Text } from '@razorpay/blade/components';
import type { OperatingHours } from '@/types/restaurant';

interface RestaurantHoursProps {
  hours?: OperatingHours;
}

export default function RestaurantHours({ hours }: RestaurantHoursProps) {
  if (!hours) return null;

  const formatHours = () => {
    if (hours.allDay) return hours.allDay;
    if (hours.lunch && hours.dinner) {
      return `${hours.lunch} | ${hours.dinner}`;
    }
    return hours.lunch || hours.dinner || '';
  };

  return (
    <Text size="small" weight="regular" color="surface.text.gray.subtle">
      {formatHours()}
    </Text>
  );
}
