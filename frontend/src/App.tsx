
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import CartPage from "./pages/CartPage";
import HeroSegment from "./pages/HomePage/HeroSegment";
// import Footer from "./Footer";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSegment/>}/>
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
