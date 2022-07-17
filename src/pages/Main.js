import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./index";

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </Router>
  );
};

export default Main;
