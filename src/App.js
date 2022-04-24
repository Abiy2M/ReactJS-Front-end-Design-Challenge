import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Page2 from "./pages/page2/Page2";
import Page3 from "./pages/page3/Page3";
import Page4 from "./pages/page4/Page4";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Landing />} />
            <Route path="page2" element={<page2 />} />
            <Route path="page3" element={<page3 />} />
            <Route path="page4" element={<page4 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
