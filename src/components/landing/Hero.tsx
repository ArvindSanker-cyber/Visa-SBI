import { Box, Heading, Text } from '@razorpay/blade/components';

export default function Hero() {
  return (
    <div
      style={{
        backgroundColor: '#292075',
        backgroundImage: 'url(/banner_Desktop.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '384px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
      }}
      className="hero-banner-container"
    >
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 1023px) {
            .hero-banner-container {
              background-image: url(/banner_Mobile.png) !important;
              background-size: cover !important;
              background-position: top center !important;
              min-height: auto !important;
              align-items: flex-start !important;
              padding-top: 252px !important;
              padding-bottom: 20px !important;
            }
            .hero-content-mobile {
              text-align: center !important;
              max-width: 100% !important;
              width: 100% !important;
              align-items: center !important;
            }
            .hero-content-mobile h1 {
              font-size: 40px !important;
              line-height: 46px !important;
              font-weight: 500 !important;
              text-align: center !important;
            }
            .hero-content-mobile p {
              font-size: 16px !important;
              line-height: 24px !important;
              text-align: center !important;
            }
          }
        `
      }} />

      <Box
        maxWidth="1284px"
        width="100%"
        margin="auto"
        padding={{ base: 'spacing.6', l: 'spacing.6' }}
      >
        <Box
          maxWidth={{ base: '100%', l: '718px' }}
          display="flex"
          flexDirection="column"
          gap={{ base: 'spacing.5', l: 'spacing.5' }}
          className="hero-content-mobile"
        >
          <Heading
            size="2xlarge"
            color="surface.text.staticWhite.normal"
            textAlign={{ base: 'center', l: 'left' }}
          >
            Indulge in exclusive experiences with SBI Cards
          </Heading>

          <Text
            size="medium"
            color="surface.text.staticWhite.normal"
            textAlign={{ base: 'center', l: 'left' }}
          >
            Exclusively on selected SBI Card BINs
          </Text>
        </Box>
      </Box>
    </div>
  );
}
