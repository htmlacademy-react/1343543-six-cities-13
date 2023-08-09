import CardList from '../../components/CardList/CardList';
import {TOffer} from '../../types/offer';
import Header from '../../components/Header/Header';
import Map from '../../components/Map/Map';
import { AMSTERDAM } from '../../mocks/cities';
import LocationList from '../../components/LocationsList/LocationList';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setCity } from '../../store/action';

type MainQunatityProps = {
  quantity: number;
  offers: TOffer[];
}

function Main({quantity, offers}: MainQunatityProps): JSX.Element {
  const selectedCity = useAppSelector((state) => state.selectedCity);
  const offersList = useAppSelector((state) => state.offers);
  
  const dispatch = useAppDispatch();

  const offersByCity = offersList.filter((offer) => offer.city.name === selectedCity);


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
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width={7} height={4}>
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li
                    className="places__option places__option--active"
                    tabIndex={0}
                  >
                    Popular
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: low to high
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: high to low
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Top rated first
                  </li>
                </ul>
              </form>
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
