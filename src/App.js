import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import EarthX from "./projects/EarthX";
import Hmi from "./projects/Hmi";
import Diageo from "./projects/Diageo";
import Cintra from "./projects/Cintra";
import Projects from "./pages/Projects";
import Esps from "./projects/Esps";
import Mwr from "./projects/Mwr";
import JohnnieWalker from "./projects/JohnnieWalker";
import Trinity from "./projects/Trinity";
import BrainStyles from "./projects/BrainStyles";
import WilsonsSeafood from "./projects/WilsonsSeafood";
import Baileys from "./projects/Baileys";
import CrownRoyal from "./projects/CrownRoyal";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/earthx" element={<EarthX />} />
          <Route path="/hmi" element={<Hmi />} />
          <Route path="/diageo" element={<Diageo />} />
          <Route path="/cintra" element={<Cintra />} />
          <Route path="/esps" element={<Esps />} />
          <Route path="/mwr" element={<Mwr />} />
          <Route path="/johnniewalker" element={<JohnnieWalker />} />
          <Route path="/trinityrail" element={<Trinity />} />
          <Route path="/brainstyles" element={<BrainStyles />} />
          <Route path="/wilsonsseafood" element={<WilsonsSeafood />} />
          <Route path="/crownroyal" element={<CrownRoyal />} />
          <Route path="/baileys" element={<Baileys />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
