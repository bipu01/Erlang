import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";
// import Footer from "./Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/aboutUs" element={<AboutUsPage />} />
          <Route path="/contactUs" element={<ContactUsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
