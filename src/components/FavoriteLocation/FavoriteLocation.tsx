import { TOffer } from '../../types/offer';
import FavoriteCard from '../FavoriteCard/FavoriteCard';

type FavoriteLocationProps = {
  city: string;
  offers: TOffer[];
}

function FavoriteLocation({city, offers}: FavoriteLocationProps) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => (<FavoriteCard offer={offer} key={offer.id}/>))}
      </div>
    </li>
  );
}

export default FavoriteLocation;
