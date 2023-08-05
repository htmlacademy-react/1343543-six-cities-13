import { TOffer } from '../../types/offer';

type FavoriteCardProps = {
  offer: TOffer;
}

function FavoriteCard({offer}: FavoriteCardProps) {
  const {
    title,
    type,
    price,
    images,
    rating,
    isPremium,
    isFavorite,
  } = offer;

  return (
    <article className="favorites__card place-card">
      {
        isPremium
          ? (
            <div className="place-card__mark">
              <span>Premium</span>
            </div>
          )
          : null
      }
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={images[0]}
            alt="Place image"
            width={150}
            height={110}
          />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">
              /&nbsp;night
            </span>
          </div>
          <button
            className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * 20 }%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default FavoriteCard;
