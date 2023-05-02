import { Routes, Route } from "react-router-dom";

import Header from "./component/Header/index";
import MobileViewHeader from "./component/Header/MobileViewHeader";
import MobileFooter from "./component/Footer/MobileFooter";
import Footer from "./component/Footer/index";
import PromotionBlock from "./component/PromotionBlock";
import ItemsHeader from "./component/ItemsHeader";
import Restaurants from "./component/Restaurants";
import Restaurant from "./component/Restaurant";
import SearchRestaurants from "./component/SearchRestaurents";
import Cart from "./component/Cart";

import RouteNotFound from "./component/RouteNotFound/index";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className="Home-page">
              <Header />
              <MobileViewHeader />
              <PromotionBlock />
              <ItemsHeader />
              <Restaurants />
              <Footer />
              <MobileFooter />
            </div>
          }
        ></Route>
        <Route path="/restaurants/:name" element={<Restaurant />}></Route>
        <Route path="/checkout" element={<Cart />} />
        <Route path="/search" element={<SearchRestaurants />} />
        <Route path="*" element={<RouteNotFound />} />
      </Routes>
    </>
  );
}

export default App;
