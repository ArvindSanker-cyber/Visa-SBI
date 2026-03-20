import { Text } from '@razorpay/blade/components';

interface BookingHeroProps {
  restaurantName: string;
}

export default function BookingHero({ restaurantName }: BookingHeroProps) {
  return (
    <div
      style={{
        background: 'linear-gradient(180deg, #2e3180 0%, rgba(46, 49, 128, 0.8) 100%)',
        minHeight: '120px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '32px',
        paddingBottom: '32px',
      }}
    >
      {/* Restaurant Name */}
      <Text
        size="large"
        weight="semibold"
        color="surface.text.staticWhite.normal"
        textAlign="center"
      >
        Book {restaurantName}
      </Text>
    </div>
  );
}
