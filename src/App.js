import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./component/Header/index";
import SignIn from "./component/Header/SignIn";
import Footer from "./component/Footer/index";
import PromotionBlock from "./component/PromotionBlock";
import ItemsHeader from "./component/ItemsHeader";
import Restaurants from "./component/Restaurants";
import SignUp from "./component/Header/SignUp";

function App() {
  return (
    <body>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Header />
              {/* <SignIn />
              <SignUp /> */}
              <PromotionBlock />
              <ItemsHeader />
              <Restaurants />
              <Footer />
            </div>
          }
        ></Route>
      </Routes>
    </body>
  );
}

export default App;
