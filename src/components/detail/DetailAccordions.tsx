import { Box, Accordion, AccordionItem, AccordionItemHeader, AccordionItemBody, Text } from '@razorpay/blade/components';

interface DetailAccordionsProps {
  termsAndConditions?: string;
  about?: string;
  expandedSection?: 'terms' | 'about';
}

export default function DetailAccordions({
  termsAndConditions,
  about,
  expandedSection,
}: DetailAccordionsProps) {
  if (!termsAndConditions && !about) return null;

  return (
    <Box
      maxWidth={{ base: '100%', l: '996px' }}
      margin="auto"
      marginX={{ base: 'spacing.5', l: 'auto' }}
      paddingTop="spacing.5"
      display="flex"
      flexDirection="column"
      gap="spacing.5"
    >
      {termsAndConditions && (
        <Accordion defaultExpandedIndex={expandedSection === 'terms' ? 0 : undefined}>
          <AccordionItem>
            <AccordionItemHeader>
              <Text>1. Terms & Conditions</Text>
            </AccordionItemHeader>
            <AccordionItemBody>
              <div style={{ whiteSpace: 'pre-line' }}>
                <Text size="medium" color="surface.text.gray.muted">
                  {termsAndConditions}
                </Text>
              </div>
            </AccordionItemBody>
          </AccordionItem>
        </Accordion>
      )}

      {about && (
        <Accordion defaultExpandedIndex={expandedSection === 'about' ? 0 : undefined}>
          <AccordionItem>
            <AccordionItemHeader>
              <Text>1. About {expandedSection === 'about' ? 'KOMA Singapore' : ''}</Text>
            </AccordionItemHeader>
            <AccordionItemBody>
              <div style={{ whiteSpace: 'pre-line' }}>
                <Text size="medium" color="surface.text.gray.muted">
                  {about}
                </Text>
              </div>
            </AccordionItemBody>
          </AccordionItem>
        </Accordion>
      )}
    </Box>
  );
}
