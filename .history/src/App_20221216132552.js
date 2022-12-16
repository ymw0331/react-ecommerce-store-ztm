import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Spinner from './components/spinner/spinner.component'
import { checkUserSession } from './store/user/user.action'
import { GlobalStyle } from "./global.styles";
// import './App.css'

const Navigation = lazy(() => import("./routes/navigation/navigation.component"))
const Shop = lazy(() => import("./routes/shop/shop.component"))
const CheckOut = lazy(() => import("./routes/checkout/checkout.component"))
const Home = lazy(() => import('./routes/home/home.component'))
const Authentication = lazy(() => import("./routes/authentication/authentication.component"))

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession())
  }, []);

  return (

    <div>
      <Suspense fallback={<Spinner />}>
      <GlobalStyle>

        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="shop/*" element={<Shop />} />
            <Route path="auth" element={<Authentication />} />
            <Route path="checkout" element={<CheckOut />} />
          </Route>
        </Routes>
      </GlobalStyle>

      </Suspense>
    </div>
  );
};

export default App;
