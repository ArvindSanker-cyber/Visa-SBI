import {
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionItemHeader,
  AccordionItemBody,
} from '@razorpay/blade/components';
import { FAQS } from '@/data/faqs';

export default function FAQSection() {
  return (
    <Box
      padding={{ base: 'spacing.8', l: 'spacing.11' }}
      backgroundColor="surface.background.gray.subtle"
      display="flex"
      justifyContent="center"
    >
      <Box maxWidth="1244px" width="100%">
        <Heading size="large" marginBottom="spacing.6" textAlign="center">
          FAQs
        </Heading>

        <Box display="flex" justifyContent="center">
          <Box width="100%" maxWidth="800px">
            <Accordion>
              {FAQS.map((faq) => (
                <AccordionItem key={faq.id}>
                  <AccordionItemHeader>{faq.question}</AccordionItemHeader>
                  <AccordionItemBody>{faq.answer}</AccordionItemBody>
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
