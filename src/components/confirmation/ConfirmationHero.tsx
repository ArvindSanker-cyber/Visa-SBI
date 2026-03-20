import { motion } from 'framer-motion';
import { Box, Text, Button, CheckCircleIcon } from '@razorpay/blade/components';
import Confetti from 'react-confetti';
import { useState, useEffect } from 'react';

interface ConfirmationHeroProps {
  onBackToHome: () => void;
  bookingDetails: any;
}

export default function ConfirmationHero({ onBackToHome }: ConfirmationHeroProps) {
  const [showConfetti, setShowConfetti] = useState(true);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    // Stop confetti after 5 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const iconVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15,
      },
    },
  };

  const textVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <>
      {/* Confetti Effect */}
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={200}
          recycle={false}
          colors={['#2e3180', '#4a54d1', '#6c7aff', '#ffffff', '#a5b4fc']}
        />
      )}

      {/* Main Content */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        flex={1}
        paddingX="spacing.5"
        paddingY={{ base: 'spacing.10', l: 'spacing.12' }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '32px',
            maxWidth: '500px',
          }}
        >
          {/* Success Icon */}
          <motion.div variants={iconVariants}>
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <CheckCircleIcon size="xlarge" color="feedback.icon.positive.intense" />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div variants={textVariants}>
            <Text
              size="xlarge"
              weight="semibold"
              color="surface.text.staticWhite.normal"
              textAlign="center"
            >
              Booking initiated
            </Text>
          </motion.div>

          {/* Description */}
          <motion.div variants={textVariants}>
            <Text
              size="medium"
              color="surface.text.staticWhite.normal"
              textAlign="center"
              style={{ maxWidth: '400px' }}
            >
              The booking details have been shared with the concierge team. Book confirmation
              will happen in next 24 - 72 hours
            </Text>
          </motion.div>

          {/* Back to Home Button */}
          <motion.div variants={buttonVariants}>
            <Button
              variant="secondary"
              size="large"
              onClick={onBackToHome}
            >
              Back to home
            </Button>
          </motion.div>
        </motion.div>
      </Box>
    </>
  );
}
