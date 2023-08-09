
import Header from '../../components/Header/Header';
import LocationList from '../../components/LocationsList/LocationList';
import Cities from '../../components/Cities/Cities';

import { setCity } from '../../store/action';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';

function Main(): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedCity = useAppSelector((state) => state.selectedCity);

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

        {/* top-citie-list */}
        <div className="tabs">
          <section className="locations container">
            <LocationList 
              selectedCity={selectedCity}
              handleChangeCity={handleChangeCity}
            />
          </section>
        </div>

        {/* cities */}
        <Cities selectedCity={selectedCity} />
      </main>
    </div>
  );
}

export default Main;
