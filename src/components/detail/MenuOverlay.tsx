import { useState, useEffect } from 'react';
import { Box, BottomSheet, Modal, Heading, Text } from '@razorpay/blade/components';
import type { MenuSection } from '@/types/restaurant';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  menu: MenuSection | null;
}

export default function MenuOverlay({ isOpen, onClose, menu }: MenuOverlayProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!menu) return null;

  const MenuContent = () => (
    <Box padding="spacing.6" display="flex" flexDirection="column" gap="spacing.5">
      <Heading size="large">{menu.title}</Heading>
      <Text size="medium" color="surface.text.gray.subtle">
        {menu.pages} Pages
      </Text>

      {/* Placeholder for PDF viewer */}
      <div
        style={{
          backgroundColor: 'rgba(159, 61, 251, 0.09)',
          borderRadius: '8px',
          padding: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '400px',
          border: '2px dashed #9f3dfb',
        }}
      >
        <Box textAlign="center" display="flex" flexDirection="column" gap="spacing.3">
          <Text size="large">⤵</Text>
          <Text size="large" color="interactive.text.primary.normal">
            Menu Preview
          </Text>
          <Text size="small" color="surface.text.gray.muted">
            PDF viewer will be displayed here
          </Text>
        </Box>
      </div>
    </Box>
  );

  if (isMobile) {
    return (
      <BottomSheet isOpen={isOpen} onDismiss={onClose}>
        <MenuContent />
      </BottomSheet>
    );
  }

  return (
    <Modal isOpen={isOpen} onDismiss={onClose} size="large">
      <MenuContent />
    </Modal>
  );
}
