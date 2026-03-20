import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Text,
  TextInput,
  Button,
  DatePicker,
  TimePicker,
  CounterInput,
} from '@razorpay/blade/components';

interface BookingFormProps {
  restaurantId: string;
  restaurantName: string;
}

export default function BookingForm({ restaurantId, restaurantName }: BookingFormProps) {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [date, setDate] = useState<Date | null>(null);
  const [dateError, setDateError] = useState('');
  const [time, setTime] = useState<Date | null>(null);
  const [passengers, setPassengers] = useState(1);

  // Standard email validation (RFC 5322 compliant)
  const validateEmail = (value: string) => {
    if (!value) {
      setEmailError('');
      return;
    }
    // Standard email regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  // Validate that booking is at least 72 hours in advance
  const validate72HoursAdvance = (selectedDate: Date | null, selectedTime: Date | null) => {
    if (!selectedDate) {
      setDateError('');
      return;
    }

    // Combine date and time
    let bookingDateTime: Date;
    if (selectedTime) {
      bookingDateTime = new Date(selectedDate);
      bookingDateTime.setHours(selectedTime.getHours());
      bookingDateTime.setMinutes(selectedTime.getMinutes());
    } else {
      bookingDateTime = new Date(selectedDate);
      bookingDateTime.setHours(12, 0, 0, 0); // Default to noon if no time selected
    }

    // Calculate 72 hours from now
    const now = new Date();
    const minBookingTime = new Date(now.getTime() + 72 * 60 * 60 * 1000);

    if (bookingDateTime < minBookingTime) {
      setDateError('Booking must be at least 72 hours in advance');
    } else {
      setDateError('');
    }
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    validateEmail(value);
  };

  const handleDateChange = (selectedDate: Date | null) => {
    setDate(selectedDate);
    validate72HoursAdvance(selectedDate, time);
  };

  const handleTimeChange = (selectedTime: Date | null) => {
    setTime(selectedTime);
    validate72HoursAdvance(date, selectedTime);
  };

  // Re-validate when both date and time change
  useEffect(() => {
    if (date || time) {
      validate72HoursAdvance(date, time);
    }
  }, [date, time]);

  const isFormValid =
    fullName.trim() !== '' &&
    email.trim() !== '' &&
    !emailError &&
    date !== null &&
    !dateError;

  const handleBooking = () => {
    if (isFormValid) {
      // Navigate to confirmation page with booking details
      navigate('/confirmation', {
        state: {
          bookingDetails: {
            restaurantId,
            restaurantName,
            fullName,
            email,
            date,
            time,
            passengers,
          },
        },
      });
    }
  };

  return (
    <Box
      maxWidth={{ base: '100%', l: '509px' }}
      margin="auto"
      marginTop={{ base: 'spacing.6', l: 'spacing.10' }}
      marginX={{ base: 'spacing.5', l: 'auto' }}
    >
      {/* Booking Details Heading */}
      <Box marginBottom="spacing.5">
        <Text size="large" weight="semibold" color="surface.text.gray.normal" textAlign="center">
          Booking Details
        </Text>
      </Box>

      {/* Form Card */}
      <Box
        backgroundColor="surface.background.gray.intense"
        borderRadius="medium"
        elevation="midRaised"
        padding="spacing.5"
        borderWidth="thin"
        borderColor="surface.border.gray.muted"
      >
        <Box display="flex" flexDirection="column" gap="spacing.6">
          {/* Full Name */}
          <TextInput
            label="Full Name"
            placeholder="Enter your full name"
            value={fullName}
            onChange={({ value }) => setFullName(value || '')}
          />

          {/* Email */}
          <TextInput
            label="Email"
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={({ value }) => handleEmailChange(value || '')}
            validationState={emailError ? 'error' : 'none'}
            errorText={emailError}
          />

          {/* Date and Time Row */}
          <Box
            display="flex"
            flexDirection={{ base: 'column', l: 'row' }}
            gap="spacing.5"
          >
            {/* Date */}
            <Box flex={{ base: 1, l: 1 }}>
              <DatePicker
                selectionType="single"
                label="Select Date"
                value={date}
                onChange={handleDateChange}
                size="medium"
                showFooterActions={true}
                minDate={new Date()}
                validationState={dateError ? 'error' : 'none'}
                errorText={dateError}
              />
            </Box>

            {/* Time */}
            <Box flex={{ base: 1, l: 1 }}>
              <TimePicker
                label="Time"
                value={time}
                onChange={({ value }) => handleTimeChange(value)}
                timeFormat="12h"
                minuteStep={15}
                size="medium"
                showFooterActions={false}
              />
            </Box>
          </Box>

          {/* No. of Passengers */}
          <CounterInput
            label="No. of Passengers"
            value={passengers}
            onChange={({ value }) => setPassengers(value)}
            min={1}
            max={20}
            size="medium"
          />
        </Box>
      </Box>

      {/* Book Now Button and Secured by Razorpay */}
      <Box marginTop="spacing.8" display="flex" flexDirection="column" gap="spacing.3">
        <Button
          variant="primary"
          size="large"
          isFullWidth
          isDisabled={!isFormValid}
          onClick={handleBooking}
        >
          Book Now
        </Button>

        {/* Secured by Razorpay */}
        <Box display="flex" gap="spacing.2" alignItems="center" justifyContent="center" paddingTop="spacing.2">
          <Text size="small" color="surface.text.gray.muted">
            Secured by
          </Text>
          <img
            src="https://assets.poshvine.com/merchants/razorpay/common/icons/icon-light.svg"
            alt="Razorpay"
            style={{ height: '15px', width: 'auto' }}
          />
        </Box>
      </Box>
    </Box>
  );
}
