import { useParams } from 'react-router-dom';
import { Box, Heading, Text, Button } from '@razorpay/blade/components';
import { useNavigate } from 'react-router-dom';

export default function ConfirmationPage() {
  const { bookingId } = useParams<{ bookingId: string }>();
  const navigate = useNavigate();

  return (
    <Box
      padding="spacing.8"
      maxWidth="800px"
      margin="auto"
      textAlign="center"
      minHeight="60vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Heading size="xlarge" marginBottom="spacing.4">
        Booking Confirmed!
      </Heading>
      <Text size="large" marginBottom="spacing.2">
        Confirmation ID: {bookingId}
      </Text>
      <Text color="surface.text.gray.subtle" marginBottom="spacing.8">
        Your reservation has been successfully confirmed. You will receive a confirmation email shortly.
      </Text>
      <Box>
        <Button onClick={() => navigate('/')}>Return to Home</Button>
      </Box>
    </Box>
  );
}
