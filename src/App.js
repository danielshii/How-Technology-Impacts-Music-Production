import "./App.css";
import PageOne from "./components/pages/PageOne";
import "./fonts/OldEnglish.ttf";
import { Route, Routes, useHref, useNavigate } from "react-router-dom";
import PageTwo from "./components/pages/PageTwo";
import { useState } from "react";
import PageThree from "./components/pages/PageThree";

const PAGES = 3;

function App() {
  const h = useHref();
  // console.log(h);
  const [currentPage, setCurrentPage] = useState(
    h === "/" ? 1 : parseInt(h.slice(-1))
  );

  const nav = useNavigate();

  function incrementPage() {
    if (currentPage < PAGES) {
      nav(`/page/${currentPage + 1}`);
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  }

  function decrementPage() {
    if (currentPage > 1) {
      nav(`/page/${currentPage - 1}`);
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  }

  return (
    <div>
      <div className="prev" onClick={decrementPage}>
        <b>◄</b>
      </div>
      <div className="next" onClick={incrementPage}>
        <b>►</b>
      </div>

      <Routes>
        <Route path="/" element={<PageOne />} />
        <Route path="/page/1" element={<PageOne />} />
        <Route path="/page/2" element={<PageTwo />} />
        <Route path="/page/3" element={<PageThree />} />
      </Routes>
    </div>
  );
}

export default App;
