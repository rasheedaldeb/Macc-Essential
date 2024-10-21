import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar.jsx/NavBar";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Checkout from "./Pages/Checkout";
import CartPage from "./Pages/CartPage";
import Register from "./Pages/Register";
import LogIn from "./Pages/LogIn";
import ProductDetailsSection from "./Components/ProductDetailsSection";
import ProtectedRoute from "./Components/ProtectedRoute";
function App() {
  return (
    <>
      <NavBar
        leftMenu={[
          {
            path: "/shop",
            element: "Shop",
          },
          {
            path: "/essentials",
            element: "ESSENTIALS",
          },
        ]}
        rightMenu={[
          {
            path: "/best-sellers",
            element: "BEST SELLERS",
          },
          {
            path: "/about-us",
            element: "ABOUT US",
          },
        ]}
      />
      <Routes>
        <Route path="/log-in" element={<LogIn />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/details/:id" element={<ProductDetailsSection />} />
          <Route path="/shop/cart" element={<CartPage />} />
          <Route path="/shop/checkout" element={<Checkout />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
      <Footer
        list1={[
          { path: "/", element: "Home" },
          {
            path: "/collection",
            element: "Collection",
          },
          {
            path: "/products",
            element: "Products",
          },
        ]}
        list2={[
          {
            path: "/about",
            element: "About",
          },
          {
            path: "/contact",
            element: "Contact",
          },
          {
            path: "/faq",
            element: "FAQ",
          },
        ]}
      />
    </>
  );
}

export default App;
