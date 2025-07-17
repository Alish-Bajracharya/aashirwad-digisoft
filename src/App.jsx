import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from './pages/About';
import SuiteRoom from "./pages/Accommodatin/SuiteRoom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}


      </Routes>
    </Router>
  );
}

export default App;
