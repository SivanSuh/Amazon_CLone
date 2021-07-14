import React from "react";
import Navbar from "./components/Navbar/Navbar";
import AltBar from "./components/AltBar/AltBar";
import Prime from "./components/Prime/Prime";
import Products from "./components/Products/Products";
import { BrowserRouter as Router, Route ,Switch } from "react-router-dom";
import List from "./components/List/List";
import Error from "./components/Error/Error";
import Account from "./components/Account/Account";

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
      <Switch>
      <Route path="/" exact>
          <AltBar />
          <Prime />
          <div className="productsAll">
            <Products  title="qcy T7" image="https://m.media-amazon.com/images/I/41vI2OtLPdL._AC_UL640_FMwebp_QL65_.jpg" price="125 TL" name="qcy T7" />
            <Products  title="İphone 11" image="https://m.media-amazon.com/images/I/61RjvoRnv9L._AC_UL480_FMwebp_QL65_.jpg" price="7.000 TL" name="İphone 11" />
            <Products title="macBook Pro" image="https://m.media-amazon.com/images/I/61a7SwnZgYL._AC_UL640_FMwebp_QL65_.jpg" price="12.000 TL" name="macBook Pro" />
            <Products title="iphone se" image="https://m.media-amazon.com/images/I/61ChqmW3eaL._AC_UL480_FMwebp_QL65_.jpg" price="5.200 TL" name="iphone se" />
            <Products title="xiaomi bileklik" image="https://m.media-amazon.com/images/I/61kwg1kCcoL._AC_UL640_FMwebp_QL65_.jpg" price="200 TL" name="xiaomi bileklik" />
            <Products title="gozluk" image="https://m.media-amazon.com/images/I/41i10qu0rIL._AC_UL640_QL65_.jpg" price="300 TL" name="gozluk" />
          </div>
        </Route>
        <Route path="/list" exact>
                <List /> 
        </Route>
        <Route path="/account" exact>
            <Account />
        </Route>
        <Route path="*" exact>
            <Error />
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
