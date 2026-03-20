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

        {/* Powered by Razorpay */}
        <Box display="flex" alignItems="center" gap="spacing.2">
          <Text size="small" color="surface.text.gray.subtle">
            Powered by
          </Text>
          <img
            src="https://assets.poshvine.com/merchants/razorpay/common/icons/icon-light.svg"
            alt="Razorpay"
            style={{ height: '15px', width: 'auto' }}
          />
        </Box>
      </Box>
    </Box>
  );
}
