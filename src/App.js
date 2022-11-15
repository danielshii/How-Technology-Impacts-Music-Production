import "./App.css";
import PageOne from "./components/pages/PageOne";
import "./fonts/OldEnglish.ttf";
import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";
import PageTwo from "./components/pages/PageTwo";
import { Button } from "react-bootstrap";
import { useState } from "react";

const PAGES = 3;

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const nav = useNavigate();

  function incrementPage() {
    if (currentPage < PAGES) {
      setCurrentPage(currentPage + 1);
      nav(`/${currentPage}`);
    }
  }

  function decrementPage() {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      nav(`/${currentPage}`);
    }
  }

  return (
    <div>
      <div className="prev">
        <Button onClick={decrementPage}>PREV</Button>
      </div>

      <Routes>
        <Route path="/" element={<PageOne />} />
        <Route path="/2" element={<PageTwo />} />
      </Routes>
    </div>
  );
}

export default App;
