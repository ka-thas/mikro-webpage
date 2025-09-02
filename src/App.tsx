import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage.jsx";
import AboutPage from "./pages/AboutPage.js";
import FamePage from "./pages/FamePage.js";


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/fame" element={<FamePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
