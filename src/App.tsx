import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage.jsx";
import AboutPage from "./pages/AboutPage.js";


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
