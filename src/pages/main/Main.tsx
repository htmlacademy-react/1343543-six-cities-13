import CardList from '../../components/CardList/CardList';
import {TOffer} from '../../types/offer';
import {useState} from 'react';
import Header from '../../components/Header/Header';
import Map from '../../components/Map/Map';
import { AMSTERDAM } from '../../mocks/cities';
import LocationList from '../../components/LocationsList/LocationList';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setCity } from '../../store/action';
import Filter from '../../components/Filter/Filter';
import { Filters } from '../../components/Filter/Filter';
import { filterOffers, sortOffers } from '../../core/filterCities';

function Main(): JSX.Element {
  const selectedCity = useAppSelector((state) => state.selectedCity);
  const offersList = useAppSelector((state) => state.offers);
  const [selectedFilter, setSelectedFilter] = useState<string>(Filters['popular'])
  
  const dispatch = useAppDispatch();

  let offersByCity = filterOffers(offersList, selectedCity);
  offersByCity = sortOffers(offersByCity, selectedFilter);

  const handleChangeCity = (city: string) => {
    dispatch(setCity({selectedCity: city}));
  }
  
  
  return (
    <div className="page page--gray page--main">
      {/* header */}
      <Header />

      {/* main */}
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        {/* tabs */}
        <div className="tabs">
          <section className="locations container">
            <LocationList 
              selectedCity={selectedCity}
              handleChangeCity={handleChangeCity}
            />
          </section>
        </div>
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
      </main>
    </div>
  );
}

export default Main;
