import Filter, { Filters } from '../../components/Filter/Filter';
import CardList from '../../components/CardList/CardList';
import Map from '../../components/Map/Map';

import { useState } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';


import { filterOffers, sortOffers } from '../../core/filterCities';

import { AMSTERDAM } from '../../mocks/cities';


type CitiesProps = {
  selectedCity: string,
}

function Cities({selectedCity}: CitiesProps) {
  const offersList = useAppSelector((state) => state.offers);
  
  const [selectedFilter, setSelectedFilter] = useState<string>('popular')
  
  let offersByCity = filterOffers(offersList, selectedCity);
  offersByCity = sortOffers(offersByCity, selectedFilter);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offersByCity.length} places to stay in {selectedCity}</b>
          <Filter selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter}/>
          <CardList offers={offersByCity} page={'main'}/>
        </section>
        <div className="cities__right-section">
          <Map city={AMSTERDAM} offers={offersByCity} typeMap={'main'}/>
        </div>
      </div>
    </div>
  )
}

export default Cities