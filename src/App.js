import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";

function App() {
  return (
    <BrowserRouter basename="/4x4R-US">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/services" element={<Services/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
