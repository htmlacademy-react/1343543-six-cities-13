import { TOffer } from "../types/offer"

const filterOffers = (offers: TOffer[], selectedCity: string): TOffer[] => {
  return offers
    .filter((offer) => offer.city.name === selectedCity)
}

const sortOffers = (offers: TOffer[], sortScheme: string): TOffer[] => {
  console.log(sortScheme);
  switch (sortScheme) {
    case 'popular':
      return offers;
    case 'high-to-low':
      return offers.sort((a, b) => b.price - a.price);
    case 'low-to-high':
      return offers.sort((a, b) => a.price - b.price);
    case 'top-rated':
      return offers.sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
}

export {filterOffers, sortOffers};