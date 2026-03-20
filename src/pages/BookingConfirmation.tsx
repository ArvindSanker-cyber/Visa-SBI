import { useNavigate } from 'react-router-dom';
import { Box, Heading, Text, Button, CheckCircleIcon } from '@razorpay/blade/components';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function BookingConfirmation() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Responsive Styles */}
      <style>
        {`
          .confirmation-content {
            background: #2e3180;
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding-top: 60px;
            padding-bottom: 140px;
            position: relative;
          }

          @media (min-width: 1024px) {
            .confirmation-content {
              padding-top: 80px;
              padding-bottom: 160px;
            }
          }
        `}
      </style>

      {/* Header */}
      <Header />

      {/* Purple Content Section */}
      <div className="confirmation-content">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="spacing.4"
          maxWidth="500px"
          paddingX="spacing.6"
        >
          {/* Check Icon */}
          <CheckCircleIcon size="xlarge" color="surface.icon.staticWhite.normal" />

          {/* Heading */}
          <Heading
            size="2xlarge"
            color="surface.text.staticWhite.normal"
            textAlign="center"
          >
            Booking initiated
          </Heading>

          {/* Description */}
          <Text
            size="small"
            color="surface.text.staticWhite.normal"
            textAlign="center"
            weight="regular"
          >
            The booking details have been shared with the concierge team. Book confirmation will happen in next 24 - 72 hours
          </Text>

          {/* Back to Home Button */}
          <Box marginTop="spacing.4">
            <Button
              variant="secondary"
              size="large"
              onClick={handleBackToHome}
            >
              Back to home
            </Button>
          </Box>
        </Box>

        {/* Gradient Divider */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '120px',
            background: 'linear-gradient(180deg, #2e3180 0%, rgba(46, 49, 128, 0.8) 100%)',
          }}
        />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
