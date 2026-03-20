import type { Restaurant } from '@/types/restaurant';

// Standard Terms & Conditions for all restaurants
const STANDARD_TERMS = `The Cardmember has to present his/her valid Card to the Outlet and state the intention to use the offer before the bill generation.

This offer has no monetary value, is not transferable, is not for sale or re-sale nor redeemable for cash.

Any complaints regarding the quality of the offer/or product/services availed under this offer must be addressed in writing, by the cardholder directly at info@tiealliances.com. Visa SBI will not be liable for the same.

All statutory taxes etc. Any taxes or liabilities or charges payable to the Government or any other authority or body, if any, shall be borne directly by the cardholder and/or billed to the account of the cardholder.

Visa SBI reserves the right to modify these terms and conditions or to replace, wholly or in part, this offer by another offer, whether similar or not, or to withdraw it altogether at any point in time, without any prior notice.

Cardholders understand, acknowledge and agree that the Offer is purely on a best effort basis and Visa SBI does not assume any liability whatsoever regarding the Offer, the delivery of services or any incidental matters.

The Two Offers can not be clubbed together.`;

export const MOCK_RESTAURANTS: Restaurant[] = [
  {
    id: 'rest-001',
    name: "Narin's Bombay Brasserie",
    description: 'Best Indian Food in Houston Your Ultimate Destination for Authentic Indian Cuisine.',
    country: 'united-states',
    city: 'Houston',
    cuisine: 'Indian',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600',
    images: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800',
    ],
    hasGiftCard: false,
    address: '3005 W Loop S, Houston, TX 77027, United States',
    location: 'Houston',
    offer: {
      title: 'Flat 15% off on Food & Soft Bevarages',
      description: '',
      color: '#006c3f',
    },
    hours: {
      lunch: '11:00 AM to 2:30 PM',
      dinner: '5:30 PM to 9:00 PM',
    },
    menus: [
      {
        id: 'bar',
        title: 'Bar Menu',
        pages: 8,
      },
      {
        id: 'food',
        title: 'Food Menu',
        pages: 12,
      },
    ],
    about: `Elegant, warm, and inviting setting ideal for all occasions. Authentic Indian cuisine with rich flavors and award-winning dishes. Visually appealing, thoughtfully plated dishes. Comfortable, welcoming atmosphere with attentive service and quality dining experience.`,
    termsAndConditions: STANDARD_TERMS,
  },
  {
    id: 'rest-002',
    name: 'Spice of India Restaurant',
    description: 'The Spice of India highlights authentic regional flavors and rich culinary traditions celebrated worldwide.',
    country: 'dubai',
    city: 'Sharjah',
    cuisine: 'Indian',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600',
    images: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
    ],
    hasGiftCard: false,
    address: 'Buhaira Tower, Al Buhaira Towers - Shop no. 8 - Al Nahda St - Hay Al Nahda - Al Qusais Industrial Area - Sharjah - United Arab Emirates',
    location: 'Sharjah',
    offer: {
      title: 'Flat 10% off on the Total Bill on a minimum billing of AED 50 and above.',
      description: '',
      color: '#006c3f',
    },
    hours: {
      allDay: '11:30 AM to 11:30 PM',
    },
    menus: [
      {
        id: 'bar',
        title: 'Bar Menu',
        pages: 6,
      },
      {
        id: 'food',
        title: 'Food Menu',
        pages: 10,
      },
    ],
    about: `Reflects traditional North Indian heritage with a refined and cultural setting. Balanced use of spices and herbs for rich flavor and aroma. Clean, well-maintained, and quality-driven dining atmosphere. Energetic yet comforting atmosphere appealing to food lovers.`,
    termsAndConditions: STANDARD_TERMS,
  },
  {
    id: 'rest-003',
    name: 'Jashn',
    description: 'Jashn brings alive a royal celebration of feasts, where heritage, and sensory indulgence unite in every bite.',
    country: 'thailand',
    city: 'Bangkok',
    cuisine: 'Indian',
    imageUrl: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600',
    images: [
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
    ],
    hasGiftCard: false,
    address: 'Level B, President Tower Arcade, 973 Phloen Chit Road, Khwaeng Lumphini, Pathum Wan, Bangkok 10330, Thailand',
    location: 'Bangkok',
    offer: {
      title: 'Flat 15% off on Food Bill',
      description: '',
      color: '#006c3f',
    },
    hours: {
      allDay: '12:00 PM to 11:45 PM',
    },
    menus: [
      {
        id: 'bar',
        title: 'Bar Menu',
        pages: 8,
      },
      {
        id: 'food',
        title: 'Food Menu',
        pages: 14,
      },
    ],
    about: `Royal, palace-inspired interiors reflecting heritage and grandeur. Artfully plated dishes with attention to detail and visual appeal. Balanced, wholesome cuisine with a focus on therapeutic qualities. Convivial and vibrant dining experience celebrating togetherness.`,
    termsAndConditions: STANDARD_TERMS,
  },
  {
    id: 'rest-004',
    name: 'Benaras Modern Indian Cuisine',
    description: 'Benares is all about providing you with a perfect sensation of unforgettable moments in a luxurious & comfortable set up.',
    country: 'thailand',
    city: 'Bangkok',
    cuisine: 'Indian',
    imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600',
    images: [
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800',
    ],
    hasGiftCard: false,
    address: 'Ground Floor, 15 Sukhumvit Residences, Soi Sukhumvit 13, Khlong Toei Nuea, Watthana, Bangkok 10110, Thailand',
    location: 'Bangkok',
    offer: {
      title: 'Flat 15% off on Food Bill',
      description: '',
      color: '#006c3f',
    },
    hours: {
      lunch: '11:00 AM to 3:00 PM',
      dinner: '5:30 PM to 11:00 PM',
    },
    menus: [
      {
        id: 'bar',
        title: 'Bar Menu',
        pages: 10,
      },
      {
        id: 'food',
        title: 'Food Menu',
        pages: 16,
      },
    ],
    about: `Benares is all about providing you with a perfect sensation of unforgettable moments in a luxurious & comfortable set up. The roof lighting depicts lit candles in the river Ganges of Varanasi. Blend of rustic décor with sophisticated, modern design. Advanced techniques including sous-vide and molecular gastronomy. Focus on exclusivity and memorable culinary moments. Designed for a relaxed yet high-end dining experience.`,
    termsAndConditions: STANDARD_TERMS,
  },
  {
    id: 'rest-005',
    name: 'Bangalore Express City',
    description: 'A refined fusion of South Indian tradition and modern innovation, delivering bold flavours with elegant sophistication.',
    country: 'united-kingdom',
    city: 'London',
    cuisine: 'Indian',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600',
    images: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
    ],
    hasGiftCard: false,
    address: '3-6 Gracechurch St, London EC3V 0AT, United Kingdom',
    location: 'London',
    offer: {
      title: 'Flat 15% off on Total Bill',
      description: '',
      color: '#006c3f',
    },
    hours: {
      allDay: '11:00 AM to 11:00 PM',
    },
    menus: [
      {
        id: 'bar',
        title: 'Bar Menu',
        pages: 6,
      },
      {
        id: 'food',
        title: 'Food Menu',
        pages: 12,
      },
    ],
    about: `Well-suited for both business meetings and relaxed dining. Diverse South Indian offerings including tapas, dosas, tandoori, and thalis. Consistent focus on elevating the overall dining experience. Ideal for corporate gatherings, casual dining, and evening experiences.`,
    termsAndConditions: STANDARD_TERMS,
  },
];
