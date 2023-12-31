import AddReview from '../../components/AddReview/AddReview';
import Header from '../../components/Header/Header';
import ReviewsList from '../../components/ReviewsList/ReviewsList';
import { TOffer } from '../../types/offer';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { TReview } from '../../types/review';
import Map from '../../components/Map/Map';
import { AMSTERDAM } from '../../mocks/cities';
import CardList from '../../components/CardList/CardList';

type OfferProps = {
  offers: TOffer[];
  reviews: TReview[];
}

function Offer({offers, reviews}: OfferProps): JSX.Element {
  const params = useParams();

  const [activeCard, setActiveCard] = useState<string>('');

  const handleCardHover = (id: string) => {
    setActiveCard(id);
  };

  const handleCardLeave = () => {
    setActiveCard('');
  };

  const offer = offers.find((item) => item.id === params.id);

  const {
    title,
    maxAdults,
    type,
    bedrooms,
    price,
    description,
    host,
    goods,
    rating,
    isPremium,
    isFavorite,
  } = offer as TOffer;
  return (

    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          {/* gallery */}
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              <div className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src="img/room.jpg"
                  alt="Photo studio"
                />
              </div>
              <div className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src="img/apartment-01.jpg"
                  alt="Photo studio"
                />
              </div>
              <div className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src="img/apartment-02.jpg"
                  alt="Photo studio"
                />
              </div>
              <div className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src="img/apartment-03.jpg"
                  alt="Photo studio"
                />
              </div>
              <div className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src="img/studio-01.jpg"
                  alt="Photo studio"
                />
              </div>
              <div className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src="img/apartment-01.jpg"
                  alt="Photo studio"
                />
              </div>
            </div>
          </div>

          {/* offer */}
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium
                ? (
                  <div className="offer__mark">
                    <span>Premium</span>
                  </div>
                )
                : null}
              {/* offerName */}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <button className={`offer__bookmark-button ${isFavorite ? 'offer__bookmark-button--active ' : ''}button`} type="button">
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>

              {/* offerRating */}
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${rating * 20 }%` }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>

              {/* offerFeatures */}
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">{type}</li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>

              {/* offerPrice */}
              <div className="offer__price">
                <b className="offer__price-value">€{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>

              {/* offerGoods */}
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {goods.map((good: string) => <li key={good} className="offer__inside-item">{good}</li>)}
                </ul>
              </div>

              {/* host */}
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={`offer__avatar-wrapper ${host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                    <img
                      className="offer__avatar user__avatar"
                      src={host.avatarUrl}
                      alt="Host avatar"
                      width={74}
                      height={74}
                    />
                  </div>
                  <span className="offer__user-name">{host.name}</span>
                  {host.isPro ? <span className="offer__user-status">Pro</span> : null}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {description}
                  </p>
                </div>
              </div>

              {/* reviews */}
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews · <span className="reviews__amount">{reviews.length}</span>
                </h2>
                <ReviewsList reviews={reviews} />
                <AddReview />
              </section>
            </div>
          </div>
          <Map city={AMSTERDAM} offers={offers} typeMap={'offers'} activeCard={activeCard}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <CardList offers={offers.slice(0, 3)} page={"offer"} handleCardHover={handleCardHover} handleCardLeave={handleCardLeave}/>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
