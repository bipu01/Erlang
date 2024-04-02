import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import CartPage from "./pages/CartPage";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutUs" element={<AboutUsPage />} />
          <Route path="/contactUs" element={<ContactUsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
