import "./App.css";

import Header from "./components/Header";
import Nav from "./components/Nav";
import TempletePag from "./components/TemplatePag";
import Footer from "./components/Footer";
import BookSection from "./components/pages/BookSection";
import PagePromo from "../src/components/pages/PagePromo"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Nav />
        <div>
          <Routes>
            <Route path="/" element={<PagePromo/>} />
            <Route path="/book/:id" element={<BookSection />} />
          </Routes>
        </div>
        <TempletePag />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
