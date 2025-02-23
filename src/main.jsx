import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import Store from "./redux/Store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import ProductPage from "./pages/ProductPage.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Checkout from "./Checkout/Checkout.jsx";
import ProceedCheckout from "./pages/ProceedCheckout.jsx";
import Showsearch from "./pages/Showsearch.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path:"about",
        element : <About/>
      },
      {
        path:"contact",
        element : <Contact />
      },
      {
        path:"product/:category",
        element : <ProductPage />
      },
      {
        path:"productdetails/:id",
        element : <ProductDetails />
      },
      {
        path: "Checkout",
        element: <Checkout/>
      },
      {
        path: "proceedtocheckout",
        element: <ProceedCheckout/>
      },
      {
        path: "search",
        element: <Showsearch/>
      }
     
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}>
    <RouterProvider router={router}/>
    
    </Provider>
  </StrictMode>
);
