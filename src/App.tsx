import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BladeProvider } from '@razorpay/blade/components';
import { bladeTheme } from '@razorpay/blade/tokens';
import Layout from './components/layout/Layout';
import LandingPage from './pages/LandingPage';
import RestaurantDetail from './pages/RestaurantDetail';
import Booking from './pages/Booking';
import BookingConfirmation from './pages/BookingConfirmation';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <>
      {/* Global button styling */}
      <style>
        {`
          /* Primary button custom color - SBI Brand #2E3180 */
          button[data-variant="primary"],
          button[data-variant="primary"] *,
          [class*="StyledBaseButton"],
          [data-blade-component="button"],
          button[class*="primary"] {
            background: #2E3180 !important;
            background-color: #2E3180 !important;
            border-color: #2E3180 !important;
          }

          /* Hover state */
          button[data-variant="primary"]:hover:not(:disabled),
          button[data-variant="primary"]:hover:not(:disabled) *,
          [class*="StyledBaseButton"]:hover:not(:disabled),
          button[class*="primary"]:hover:not(:disabled) {
            background: #242861 !important;
            background-color: #242861 !important;
            border-color: #242861 !important;
          }

          /* Active/pressed state */
          button[data-variant="primary"]:active:not(:disabled),
          button[data-variant="primary"]:active:not(:disabled) *,
          [class*="StyledBaseButton"]:active:not(:disabled),
          button[class*="primary"]:active:not(:disabled) {
            background: #1a1d45 !important;
            background-color: #1a1d45 !important;
            border-color: #1a1d45 !important;
          }

          /* Focus state */
          button[data-variant="primary"]:focus-visible {
            box-shadow: 0 0 0 3px rgba(46, 49, 128, 0.3) !important;
          }
        `}
      </style>
      <BladeProvider themeTokens={bladeTheme} colorScheme="light">
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {/* Confirmation page without layout (no header/footer) */}
            <Route path="/confirmation" element={<BookingConfirmation />} />

            {/* All other pages with layout (header/footer) */}
            <Route element={<Layout />}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/restaurant/:id" element={<RestaurantDetail />} />
              <Route path="/booking/:id" element={<Booking />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BladeProvider>
    </>
  );
}
