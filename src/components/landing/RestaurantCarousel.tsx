import { useState } from 'react';
import { Box, IconButton, ChevronLeftIcon, ChevronRightIcon } from '@razorpay/blade/components';
import RestaurantCard from './RestaurantCard';
import type { Restaurant } from '@/types/restaurant';

interface RestaurantCarouselProps {
  restaurants: Restaurant[];
}

export default function RestaurantCarousel({ restaurants }: RestaurantCarouselProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(restaurants.length / itemsPerPage);

  const currentRestaurants = restaurants.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const goToNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const goToPrevious = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Box position="relative" padding={{ base: 'spacing.4', l: 'spacing.8' }} maxWidth="1440px" margin="auto">
      {/* Navigation Arrows */}
      {totalPages > 1 && (
        <>
          <div
            style={{
              position: 'absolute',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
            }}
          >
            <IconButton
              icon={ChevronLeftIcon}
              onClick={goToPrevious}
              accessibilityLabel="Previous page"
              size="large"
              emphasis="subtle"
            />
          </div>

          <div
            style={{
              position: 'absolute',
              right: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
            }}
          >
            <IconButton
              icon={ChevronRightIcon}
              onClick={goToNext}
              accessibilityLabel="Next page"
              size="large"
              emphasis="subtle"
            />
          </div>
        </>
      )}

      {/* Restaurant Grid */}
      <Box
        display="grid"
        gridTemplateColumns={{
          base: 'repeat(2, 1fr)',
          m: 'repeat(2, 1fr)',
          l: 'repeat(4, 1fr)',
        }}
        gap={{
          base: 'spacing.4',
          m: 'spacing.5',
          l: 'spacing.6',
        }}
      >
        {currentRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </Box>

      {/* Carousel Indicators (Dots) */}
      {totalPages > 1 && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="spacing.3"
          marginTop="spacing.8"
        >
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              style={{
                width: index === currentPage ? '24px' : '8px',
                height: '8px',
                borderRadius: index === currentPage ? '4px' : '50%',
                backgroundColor: index === currentPage ? '#2C2C2C' : '#D1D5DB',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                padding: 0,
              }}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </Box>
      )}
    </Box>
  );
}
