import Card from '../../components/Card/Card';
import { TOffer } from '../../types/offer';
import { useState } from 'react';
import cn from 'classnames';

type CardListProps = {
  page: string
  offers: TOffer[];
}

function CardList({offers, page}: CardListProps) {
  const [_activeCard, setActiveCard] = useState<string>('');

  const handleCardHover = (id: string) => {
    setActiveCard(id);
  };

  const generateCards = (): Array<JSX.Element> => offers.map((offer) => (
    <Card
      key={offer.id}
      offer={offer}
      page={page}
      handleCardHover={handleCardHover}
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
