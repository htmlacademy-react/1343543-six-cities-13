import Main from '../../pages/main/Main';
// import Offer from '../../pages/offer/Offer';
// import Login from '../../pages/login/Login';
// import Favorites from '../../pages/favorites/Favorites';

type AppQunatityProps = {
  quantity: number;
}

function App({quantity}: AppQunatityProps): JSX.Element {
  return (
    <Main quantity={quantity}/>
    // <Offer />
    // <Login />
    // <Favorites />
  );
}

export default App;
