import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../../pages/main/Main';
import Offer from '../../pages/offer/Offer';
import Login from '../../pages/login/Login';
import Favorites from '../../pages/favorites/Favorites';
import NotFound from '../../pages/not-found/Not-Found';

type AppQunatityProps = {
  quantity: number;
}

function App({quantity}: AppQunatityProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main quantity={quantity}/>} />
        <Route path="/offer">
          <Route index element={<div>No page is selected.</div>}></Route>
          <Route path=":id" element={<Offer />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    
    // <Offer />
    // <Login />
    // <Favorites />
  );
}

export default App;
