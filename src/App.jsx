import React from "react";
import Navbar from "./component/Navbar";
import Sidecart from "./component/Sidecart";
import Home from "./pages/Home";
import Footer from "./component/Footer";
import ProductPage from "./pages/ProductPage";
import Checkout from "./Checkout/Checkout";
import Showsearch from "./pages/Showsearch";
 

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
      <Sidecart/>
      <ProductPage/>
      <Checkout/>
      <Showsearch/>
    </div>
  );
}

export default App;
