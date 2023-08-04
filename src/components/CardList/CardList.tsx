import Card from '../../components/Card/Card';

function CardList() {
  const generateCard = (quantity: number): Array<JSX.Element> => {
    const cards = [];
    for (let i = 0; i < quantity; i++) {
      cards.push(<Card />);
    }
  
    return cards;
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {generateCard(5)}
    </div>
  )
}

export default CardList