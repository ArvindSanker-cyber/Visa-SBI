import { Box, IconButton, ChevronLeftIcon, ChevronRightIcon } from '@razorpay/blade/components';

interface RestaurantImageCarouselProps {
  images: string[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
}

export default function RestaurantImageCarousel({
  images,
  currentIndex,
  onIndexChange,
}: RestaurantImageCarouselProps) {
  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    onIndexChange(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    onIndexChange(newIndex);
  };

  // Create array of 5 slots (max images), fill with actual images or placeholders
  const maxSlots = 5;
  const displaySlots = Array.from({ length: maxSlots }, (_, index) =>
    index < images.length ? images[index] : null
  );

  return (
    <Box position="relative" borderRadius="large" overflow="hidden">
      {/* Image Display */}
      {images[currentIndex] ? (
        <img
          src={images[currentIndex]}
          alt="Restaurant"
          style={{
            width: '100%',
            height: '300px',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      ) : (
        <div
          style={{
            width: '100%',
            height: '300px',
            backgroundColor: 'rgba(159, 61, 251, 0.09)',
            border: '2px dashed #9f3dfb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '48px',
          }}
        >
          ⤵
        </div>
      )}

      {/* Navigation Arrows (only show if more than 1 image) */}
      {images.length > 1 && (
        <>
          <div
            style={{
              position: 'absolute',
              left: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
            }}
          >
            <IconButton
              icon={ChevronLeftIcon}
              onClick={goToPrevious}
              accessibilityLabel="Previous image"
              size="large"
              emphasis="subtle"
            />
          </div>

          <div
            style={{
              position: 'absolute',
              right: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
            }}
          >
            <IconButton
              icon={ChevronRightIcon}
              onClick={goToNext}
              accessibilityLabel="Next image"
              size="large"
              emphasis="subtle"
            />
          </div>
        </>
      )}

      {/* Dot Indicators - positioned at bottom center */}
      {images.length > 1 && (
        <div
          style={{
            position: 'absolute',
            bottom: '16px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '8px',
            zIndex: 10,
          }}
        >
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => onIndexChange(index)}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: currentIndex === index ? '#fff' : 'rgba(255, 255, 255, 0.5)',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.3s ease',
              }}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </Box>
  );
}
