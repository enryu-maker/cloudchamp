import logo from "./logo.svg";
import "./App.css";
import { Nav, NavbarDefault } from "./Components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./Screen/Home";
import { Foter } from "./Components/Footer";
import Services from "./Screen/Services";
import Cource from "./Screen/Cource";
import Contact from "Screen/Contact";

function App() {
  return (
    <div className="overflow-hidden">
      <Nav />
      <div className="mt-14">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/cources" element={<Cource />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={"404"} />
        </Routes>
      </div>
      <Foter />
    </div>
  );
}

export default App;
