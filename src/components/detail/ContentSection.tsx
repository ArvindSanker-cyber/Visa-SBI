import { Box, Text } from '@razorpay/blade/components';

interface ContentSectionProps {
  content?: string;
}

export default function ContentSection({ content }: ContentSectionProps) {
  if (!content) return null;

  return (
    <Box
      maxWidth={{ base: '100%', l: '996px' }}
      margin="auto"
      marginX={{ base: 'spacing.5', l: 'auto' }}
      paddingTop="spacing.5"
    >
      <div style={{ whiteSpace: 'pre-line' }}>
        <Text size="medium" color="surface.text.gray.muted">
          {content}
        </Text>
      </div>
    </Box>
  );
}
