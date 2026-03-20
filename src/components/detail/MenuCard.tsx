import { Box, Text } from '@razorpay/blade/components';
import type { MenuSection } from '@/types/restaurant';

interface MenuCardProps {
  menu: MenuSection;
  onClick: (menu: MenuSection) => void;
}

export default function MenuCard({ menu, onClick }: MenuCardProps) {
  return (
    <button
      onClick={() => onClick(menu)}
      style={{
        cursor: 'pointer',
        background: 'transparent',
        border: 'none',
        padding: 0,
        width: '100%',
        textAlign: 'left',
      }}
    >
      <Box display="flex" flexDirection="column" gap="spacing.3">
        {/* Placeholder Slot */}
        <div
          style={{
            backgroundColor: 'rgba(159, 61, 251, 0.09)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '168px',
            width: '100%',
            border: '2px dashed #9f3dfb',
          }}
        >
          <Text size="xlarge" color="interactive.text.primary.normal" textAlign="center" weight="semibold">
            ⤵
          </Text>
        </div>

        {/* Menu Info */}
        <Box display="flex" flexDirection="column" gap="spacing.1">
          <Text size="medium" weight="semibold" color="surface.text.gray.normal">
            {menu.title}
          </Text>
          <Text size="small" color="surface.text.gray.subtle">
            {menu.pages} Pages
          </Text>
        </Box>
      </Box>
    </button>
  );
}
