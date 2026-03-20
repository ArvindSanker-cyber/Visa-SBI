import { Box, Tabs, TabList, TabItem } from '@razorpay/blade/components';

type TabValue = 'menu' | 'terms' | 'about';

interface DetailTabsProps {
  selectedTab: TabValue;
  onTabChange: (tab: TabValue) => void;
}

export default function DetailTabs({ selectedTab, onTabChange }: DetailTabsProps) {
  return (
    <Box
      maxWidth={{ base: '100%', l: '996px' }}
      margin="auto"
      marginX={{ base: 'spacing.5', l: 'auto' }}
    >
      <Tabs value={selectedTab} onChange={(value) => onTabChange(value as TabValue)}>
        <TabList>
          <TabItem value="menu">Menu</TabItem>
          <TabItem value="terms">Terms & Conditions</TabItem>
          <TabItem value="about">About</TabItem>
        </TabList>
      </Tabs>
    </Box>
  );
}
