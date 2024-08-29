import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import QueHacemos from "./components/QueHacemos";
import Servicios from "./components/Servicios";
import Contacto from "./components/Contacto";
function App() {
  return (
    <div className=" h-screen flex flex-col">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/QueHacemos" element={<QueHacemos />} />
          <Route path="/Servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
