import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./component/Header/index";
import SignIn from "./component/Header/SignIn";
import Footer from "./component/Footer/index";
import PromotionBlock from "./component/PromotionBlock";
import ItemsHeader from "./component/ItemsHeader";
import Restaurants from "./component/Restaurants";
import SignUp from "./component/Header/SignUp";
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
              <PromotionBlock />
              <ItemsHeader />
              <Restaurants />
              <Footer />
            </div>
          }
        ></Route>
        <Route path="*" element={<RouteNotFound />} />
      </Routes>
    </body>
  );
}

export default App;
