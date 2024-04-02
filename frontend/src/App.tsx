<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import CartPage from "./pages/CartPage";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
>>>>>>> 7278ad43881f566ac0973364802183f9c753dfae

function App() {
  return (
    <>
      <BrowserRouter>
<<<<<<< HEAD
        <Navbar/>
          <Routes>
            <Route/>
          </Routes>
=======
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutUs" element={<AboutUsPage />} />
          <Route path="/contactUs" element={<ContactUsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        {/* <Footer /> */}
>>>>>>> 7278ad43881f566ac0973364802183f9c753dfae
      </BrowserRouter>
    </>
  );
}

export default App;
