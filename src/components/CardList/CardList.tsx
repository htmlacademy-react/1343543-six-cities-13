import Card from '../../components/Card/Card';
import { TOffer } from '../../types/offer';
import { useState } from 'react';


type CardListProps = {
  offers: TOffer[];
}

function CardList({offers}: CardListProps) {
  const [_activeCard, setActiveCard] = useState<string>('');

  const handleCardHover = (id: string) => {
    setActiveCard(id);
  }

  const generateCards = (): Array<JSX.Element> => {
    return offers.map((offer) => {
      return (
        <Card
          key={offer.id}
          offer={offer}
          handleCardHover={handleCardHover}
        />
      )
    });
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {generateCards()}
    </div>
  )
}

export default CardList