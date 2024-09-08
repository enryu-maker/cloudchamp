import logo from "./logo.svg";
import "./App.css";
import { Nav, NavbarDefault } from "./Components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./Screen/Home";
import { Foter } from "./Components/Footer";
import Services from "./Screen/Services";

function App() {
  return (
    <div className="overflow-hidden">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={"404"} />
      </Routes>
      <Foter />
    </div>
  );
}

export default App;
