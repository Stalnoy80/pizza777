import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./scss/app.scss";
import EmptyCart from "./pages/EmptyCart";

function App() {
  // const MyContext = React.createContext();
  const [searchValue, setSearchValue] = React.useState("");

  return (
    // <MyContext.Provider value={(searchValue, setSearchValue)}>
    <div className="wrapper">
      <div className="block">
        <Router>
          <Header searchValue={searchValue} setSearchValue={setSearchValue} />
          <Routes>
            <Route path="/" element={<Home searchValue={searchValue} />} />
            <Route path="cart" element={<Cart />} />
            <Route path="404" element={<EmptyCart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </div>
    // </MyContext.Provider>
  );
}

export default App;
