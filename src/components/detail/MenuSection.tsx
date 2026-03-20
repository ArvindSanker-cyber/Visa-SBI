import { Box } from '@razorpay/blade/components';
import MenuCard from './MenuCard';
import type { MenuSection as MenuSectionType } from '@/types/restaurant';

interface MenuSectionProps {
  menus?: MenuSectionType[];
  onMenuClick: (menu: MenuSectionType) => void;
}

export default function MenuSection({ menus, onMenuClick }: MenuSectionProps) {
  if (!menus || menus.length === 0) return null;

  return (
    <Box
      maxWidth={{ base: '100%', l: '996px' }}
      margin="auto"
      marginX={{ base: 'spacing.5', l: 'auto' }}
      paddingTop="spacing.6"
      paddingBottom="spacing.6"
    >
      <Box
        display="grid"
        gridTemplateColumns={{
          base: 'repeat(2, 1fr)',
          m: 'repeat(2, 1fr)',
          l: 'repeat(2, 1fr)',
        }}
        gap={{ base: 'spacing.4', l: 'spacing.5' }}
        maxWidth={{ base: '100%', l: '440px' }}
      >
        {menus.map((menu) => (
          <MenuCard key={menu.id} menu={menu} onClick={onMenuClick} />
        ))}
      </Box>
    </Box>
  );
}
