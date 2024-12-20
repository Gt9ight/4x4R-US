import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";
import Gallery from "./components/gallery/Gallery";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <BrowserRouter basename="/4x4R-US">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
