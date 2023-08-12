import { TOffer } from '../../types/offer';
import { Link } from 'react-router-dom'
import cn from 'classnames';
import { preview } from 'vite';

type CardProps = {
  offer: TOffer;
  page: string;
  handleCardHover: (id: string) => void;
  handleCardLeave: () => void;
}

function Card({offer, page, handleCardHover, handleCardLeave}: CardProps): JSX.Element{
  const {
    id,
    title,
    type,
    price,
    previewImage,
    rating,
    isPremium,
    isFavorite,
  } = offer;

  const articleClasses = cn({
    'place-card': true,
    'cities__card': page === 'main',
    'near-places__card': page === 'offer',
  });

  const imageWrapperClasses = cn({
    'place-card__image-wrapper': true,
    'cities__image-wrapper': page === 'main',
    'near-places__image-wrapper': page === 'offer',
  });

  return (
    <article className={articleClasses} onMouseEnter={() => handleCardHover(offer.id)} onMouseLeave={() => handleCardLeave()}>
      {
        isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }

      <div className={imageWrapperClasses}>
        <Link to={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            alt="Place image"
            width={260}
            height={200}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * 20 }%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
