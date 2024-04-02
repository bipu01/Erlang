import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroPage from "./pages/HomePage/HeroSegment";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/" element={<HeroPage />} />
          <Route path="/" element={<HeroPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
