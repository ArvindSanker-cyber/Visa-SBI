import { Box, Heading, Text } from '@razorpay/blade/components';

export default function SectionHeader() {
  return (
    <Box
      maxWidth="1440px"
      margin="auto"
      padding={{ base: 'spacing.6', l: 'spacing.8' }}
    >
      <Box
        display="flex"
        flexDirection="column"
        gap="spacing.2"
        alignItems="center"
        textAlign="center"
      >
        <Heading size="large" color="surface.text.gray.normal">
          Exclusive Dining Experience
        </Heading>
        <Text size="medium" color="surface.text.gray.normal">
          Have the experience of tasting authentic cuisine
        </Text>
      </Box>
    </Box>
  );
}
