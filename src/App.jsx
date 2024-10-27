import "./App.scss";

import { Header } from "./Components/indexCom";
import Home from "./Pages/Home/Home";
import AboutMePage from "./Pages/AboutMePage/AboutMe";
import PortfolioPage from "./Pages/PortfolioPage/PortfolioPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import ServicesPage from "./Pages/ServicesPage/ServicesPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutMe" element={<AboutMePage />} />
          <Route path="/Projects" element={<PortfolioPage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/Services" element={<ServicesPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
