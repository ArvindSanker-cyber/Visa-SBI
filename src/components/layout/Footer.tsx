import { Box, Link, Text } from '@razorpay/blade/components';

export default function Footer() {
  return (
    <Box
      backgroundColor="surface.background.gray.intense"
      padding={{ base: 'spacing.8', l: 'spacing.10' }}
      borderTopWidth="thin"
      borderTopColor="surface.border.gray.muted"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="spacing.5"
        maxWidth="1440px"
        margin="auto"
      >
        {/* SBI Logo */}
        <Box>
          <img
            src="/SBI Logo.svg"
            alt="SBI Card"
            style={{ width: '120px', height: 'auto' }}
          />
        </Box>

        {/* Links */}
        <Box display="flex" gap="spacing.6" flexWrap="wrap" justifyContent="center">
          <Link href="#" variant="anchor" color="neutral" size="small">
            Terms And Conditions
          </Link>
          <Link href="#" variant="anchor" color="neutral" size="small">
            Privacy Policy
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
