import FavoritesList from "../../components/FavoritesList/FavoritesList";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { TOffer } from "../../types/offer";

type FavoritesProps = {
  offers: TOffer[]
}

function Favorites({offers}: FavoritesProps) {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList offers={offers}/>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Favorites;
