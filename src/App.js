import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./component/Header/index";
import MobileViewHeader from "./component/Header/MobileViewHeader";
import MobileFooter from "./component/Footer/MobileFooter";
import Footer from "./component/Footer/index";
import PromotionBlock from "./component/PromotionBlock";
import ItemsHeader from "./component/ItemsHeader";
import Restaurants from "./component/Restaurants";

import RouteNotFound from "./component/RouteNotFound/index";

function App() {
  return (
    <body>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
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
        <Route path="*" element={<RouteNotFound />} />
      </Routes>
    </body>
  );
}

export default App;
