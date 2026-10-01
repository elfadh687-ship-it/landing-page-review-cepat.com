import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SmoothScroll } from "@/components/rc/SmoothScroll";
import { Navbar } from "@/components/rc/Navbar";
import { Footer } from "@/components/rc/Footer";
import ProductPage from "@/pages/ProductPage";
import BusinessPage from "@/pages/BusinessPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SmoothScroll>
          <Navbar />
          <Routes>
            <Route path="/" element={<ProductPage />} />
            <Route path="/business" element={<BusinessPage />} />
          </Routes>
          <Footer />
        </SmoothScroll>
      </BrowserRouter>
    </div>
  );
}

export default App;
