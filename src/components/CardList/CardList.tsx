import Card from '../../components/Card/Card';
import { TOffer } from '../../types/offer';
import cn from 'classnames';

type CardListProps = {
  page: string
  offers: TOffer[];
  handleCardHover: (id: string) => void;
  handleCardLeave: () => void;
}

function CardList({offers, page, handleCardHover, handleCardLeave}: CardListProps) {
  const generateCards = (): Array<JSX.Element> => offers.map((offer) => (
    <Card
      key={offer.id}
      offer={offer}
      page={page}
      handleCardHover={handleCardHover}
      handleCardLeave={handleCardLeave}
    />
  ));

  const cardsClasses = cn({
    'places__list': true,
    'cities__places-list': page === 'main',
    'tabs__content': page === 'main',
    'near-places__list' : page === 'offer'
  })

  return (
    <div className={cardsClasses}>
      {generateCards()}
    </div>
  );
}

export default CardList;
