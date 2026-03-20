import { Box, Link } from '@razorpay/blade/components';

export default function Header() {
  return (
    <Box
      backgroundColor="surface.background.gray.intense"
      padding={{ base: 'spacing.5', l: 'spacing.6' }}
      borderBottomWidth="thin"
      borderBottomColor="surface.border.gray.muted"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        maxWidth="1284px"
        margin="auto"
      >
        {/* Logo */}
        <Link href='/'>
          <img
            src="/SBI Logo.svg"
            alt="SBI Card"
            style={{ height: '32px', width: 'auto' }}
          />
        </Link>
      </Box>
    </Box>
  );
}
