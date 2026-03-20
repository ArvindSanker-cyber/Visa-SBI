export default function RestaurantHero() {
  return (
    <>
      <style>
        {`
          .restaurant-hero {
            background: linear-gradient(180deg, #2e3180 0%, rgba(46, 49, 128, 0.8) 100%);
            min-height: 160px;
            width: 100%;
          }

          @media (min-width: 1024px) {
            .restaurant-hero {
              min-height: 305px;
            }
          }
        `}
      </style>
      <div className="restaurant-hero" />
    </>
  );
}
