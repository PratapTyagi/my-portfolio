import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, About, Education, Experience, Projects } from "./index";
import { Navbar } from "../components";

// HOC which returns new component along with navbar
const withNavbar = (component) => {
  return (
    <>
      <Navbar />
      {component}
    </>
  );
};

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<>Hello splash</>} />
        <Route path="/home" exact element={withNavbar(<Home />)} />
        <Route path="/about" exact element={withNavbar(<About />)} />
        <Route path="/education" exact element={withNavbar(<Education />)} />
        <Route path="/experience" exact element={withNavbar(<Experience />)} />
        <Route path="/projects" exact element={withNavbar(<Projects />)} />
      </Routes>
    </Router>
  );
};

export default Main;
