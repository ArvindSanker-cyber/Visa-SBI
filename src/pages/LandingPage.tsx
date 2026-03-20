import Hero from '@/components/landing/Hero';
import SectionHeader from '@/components/landing/SectionHeader';
import CountryTabs from '@/components/landing/CountryTabs';
import RestaurantCarousel from '@/components/landing/RestaurantCarousel';
import FAQSection from '@/components/landing/FAQSection';
import { useCountryFilter } from '@/hooks/useCountryFilter';

export default function LandingPage() {
  const { selectedCountry, setSelectedCountry, filteredRestaurants } = useCountryFilter();

  return (
    <>
      <Hero />
      <SectionHeader />
      <CountryTabs
        selectedCountry={selectedCountry}
        onCountryChange={setSelectedCountry}
      />
      <RestaurantCarousel restaurants={filteredRestaurants} />
      <FAQSection />
    </>
  );
}
