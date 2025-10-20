import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import MainLayout from "./layouts/MainLayout";
import Auditing from "./pages/Auditing";
import SpecialServices from "./pages/SpecialServices";
import CorporateCompliance from "./pages/CorporateCompliance";
import TaxConsultancy from "./pages/TaxConsultancy";
import Career from "./pages/Career";
import Knowledge from "./pages/Knowledge";
import Blog from "./pages/Blog";
import Budget from "./pages/Budget";
import Team from "./pages/Team";

function App() {
  return (
    <>
      <Router>
        <Routes>
           <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />\
          <Route path="/services/auditing" element={<Auditing/>}></Route>
          <Route path="/services/special" element={<SpecialServices/>}></Route>
          <Route path="/services/corporate" element={<CorporateCompliance/>}></Route>
          <Route path="/services/tax" element={<TaxConsultancy/>}></Route>
          <Route path="/knowledge/career" element={<Career/>}></Route>
          <Route path="/knowledge/events" element={<Knowledge/>}></Route>
          <Route path="/knowledge/blogs" element={<Blog/>}></Route>
          <Route path="/publications/budget" element={<Budget/>}></Route>
          <Route path="/company/team" element={<Team/>}></Route>
          
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
