import { Outlet } from 'react-router-dom';
import { Box } from '@razorpay/blade/components';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Box flex="1">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
