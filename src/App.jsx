import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import PagePromo from "./components/pages/PagePromo";
import TempletePag from "./components/TemplatePag";
import Footer from "./components/Footer";
import BookSection from "./components/pages/BookSection";

function App() {
  return (
    <>
      <div>
        <Header />
        <Nav />
        <div>
          <BookSection />
        </div>
        <TempletePag />
        <Footer />
      </div>
    </>
  );
}

export default App;
