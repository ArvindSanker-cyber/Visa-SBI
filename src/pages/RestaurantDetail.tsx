import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Box, Text } from '@razorpay/blade/components';
import { MOCK_RESTAURANTS } from '@/data/restaurants';
import type { MenuSection as MenuSectionType } from '@/types/restaurant';
import RestaurantHero from '@/components/detail/RestaurantHero';
import RestaurantImageCarousel from '@/components/detail/RestaurantImageCarousel';
import RestaurantInfo from '@/components/detail/RestaurantInfo';
import RestaurantChips from '@/components/detail/RestaurantChips';
import RestaurantOffer from '@/components/detail/RestaurantOffer';
import RestaurantHours from '@/components/detail/RestaurantHours';
import BookingCTA from '@/components/detail/BookingCTA';
import DetailTabs from '@/components/detail/DetailTabs';
import MenuSection from '@/components/detail/MenuSection';
import MenuOverlay from '@/components/detail/MenuOverlay';
import ContentSection from '@/components/detail/ContentSection';

export default function RestaurantDetail() {
  const { id } = useParams<{ id: string }>();
  const restaurant = MOCK_RESTAURANTS.find((r) => r.id === id);

  const [selectedTab, setSelectedTab] = useState<'menu' | 'terms' | 'about'>('menu');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMenuOverlayOpen, setIsMenuOverlayOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState<MenuSectionType | null>(null);

  if (!restaurant) {
    return (
      <Box padding="spacing.8" maxWidth="1200px" margin="auto">
        <Text size="large" weight="semibold">
          Restaurant not found
        </Text>
      </Box>
    );
  }

  const images = restaurant.images || [restaurant.imageUrl];

  return (
    <>
      {/* Gradient Hero Background */}
      <RestaurantHero />

      {/* Centered Detail Card */}
      <Box maxWidth="1440px" margin="auto" position="relative">
        <Box
          backgroundColor="surface.background.gray.intense"
          borderRadius="large"
          elevation="highRaised"
          padding="spacing.5"
          maxWidth={{ base: '100%', l: '996px' }}
          margin="auto"
          marginTop={{ base: '-80px', l: '-140px' }}
          marginX={{ base: 'spacing.5', l: 'auto' }}
        >
          {/* Image Carousel */}
          <RestaurantImageCarousel
            images={images}
            currentIndex={currentImageIndex}
            onIndexChange={setCurrentImageIndex}
          />

          {/* Restaurant Info */}
          <Box marginTop="spacing.5" display="flex" flexDirection="column" gap="spacing.4">
            <RestaurantInfo restaurant={restaurant} />

            {/* Offer and Hours - centered on mobile */}
            <Box display="flex" flexDirection="column" gap="spacing.3" alignItems={{ base: 'center', l: 'flex-start' }}>
              {restaurant.offer && <RestaurantOffer offer={restaurant.offer} />}
              {restaurant.hours && <RestaurantHours hours={restaurant.hours} />}
            </Box>

            {/* Divider, Chips and CTA */}
            <Box display="flex" flexDirection="column" gap="spacing.3" paddingTop="spacing.3" borderTopWidth="thin" borderTopColor="surface.border.gray.muted">
              <Box display="flex" flexDirection={{ base: 'column', l: 'row' }} gap="spacing.4" justifyContent="space-between" alignItems={{ base: 'center', l: 'center' }}>
                <RestaurantChips location={restaurant.location} cuisine={restaurant.cuisine} />
                <Box width={{ base: '100%', l: 'auto' }}>
                  <BookingCTA restaurantId={restaurant.id} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Tabs */}
        <Box marginTop="spacing.8">
          <DetailTabs selectedTab={selectedTab} onTabChange={setSelectedTab} />
        </Box>

        {/* Tab Content */}
        {selectedTab === 'menu' && (
          <MenuSection
            menus={restaurant.menus}
            onMenuClick={(menu: MenuSectionType) => {
              setSelectedMenu(menu);
              setIsMenuOverlayOpen(true);
            }}
          />
        )}

        {selectedTab === 'terms' && (
          <ContentSection content={restaurant.termsAndConditions} />
        )}

        {selectedTab === 'about' && (
          <ContentSection content={restaurant.about} />
        )}

        {/* Bottom spacing before footer */}
        <Box height="72px" />
      </Box>

      {/* Menu Overlay */}
      <MenuOverlay
        isOpen={isMenuOverlayOpen}
        onClose={() => {
          setIsMenuOverlayOpen(false);
          setSelectedMenu(null);
        }}
        menu={selectedMenu}
      />
    </>
  );
}
