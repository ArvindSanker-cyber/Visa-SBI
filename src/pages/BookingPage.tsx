import { useParams } from 'react-router-dom';
import { Box, Heading, Text } from '@razorpay/blade/components';

export default function BookingPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <Box padding="spacing.8" maxWidth="1200px" margin="auto">
      <Heading size="xlarge" marginBottom="spacing.4">
        Book a Table
      </Heading>
      <Text>Restaurant ID: {id}</Text>
      <Text color="surface.text.gray.subtle" marginTop="spacing.4">
        This page will contain the booking form with date, time, name, email fields.
      </Text>
    </Box>
  );
}
