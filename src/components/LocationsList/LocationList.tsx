import { defaultCities } from "../../const"

type LocationListProps = {
  selectedCity: string,
  handleChangeCity: (city: string) => void;
}

function LocationList({selectedCity, handleChangeCity}: LocationListProps) {
  const getCities = () => {
    return defaultCities.map((city) => {
      return (
        <li className="locations__item"
          key={city}
          onClick={() => handleChangeCity(city)}
        >
          <a className={`locations__item-link tabs__item${selectedCity === city ? ' tabs__item--active' : ''}`} href="#">
            <span>{city}</span>
          </a>
        </li>
      )
    });
  }

  return (
    <ul className="locations__list tabs__list">
      {getCities()}
    </ul>
  )
}

export default LocationList