import { Routes, Route } from 'react-router-dom';
import Main from '../../pages/main/Main';
import Offer from '../../pages/offer/Offer';
import Login from '../../pages/login/Login';
import Favorites from '../../pages/favorites/Favorites';
import NotFound from '../../pages/not-found/Not-Found';
import PrivateRoute from '../Private-Route/Private-Route.tsx';
import {AuthorizationStatus} from '../../const.ts';
import { TOffer } from '../../types/offer.ts';
import { TReview } from '../../types/review.ts';
import Loader from '../../pages/loader/Loader';
import { useAppSelector } from '../../hooks/useAppSelector.ts';
import HistoryRouter from '../HistoryRoute/HistoryRoute.tsx';
import browserHistory from '../../browser-history.ts';



function App(): JSX.Element {
  const isOffersLoading = useAppSelector((state) => state.isOffersLoading)

  if (isOffersLoading) {
    return <Loader />;
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/offer">
          <Route index element={<div>No page is selected.</div>}></Route>
          <Route path=":id" element={<Offer />} />
        </Route>
        <Route path="/favorites" element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <Favorites />
          </PrivateRoute>
        }/>
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
      </HistoryRouter> 
  );
}

export default App;
