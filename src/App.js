import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import OurWork from "./pages/OurWork";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ClauraCasestudy from "./pages/ClauraCasestudy";
import MrjaCasestudy from "./pages/MrjaCasestudy";
import MiriyamCasestudy from "./pages/MiriyamCasestudy";
import MasculinoCasestudy from "./pages/MasculinoCasestudy";
import Onboarding from "./pages/Onboarding";
import OutreachPolicy from "./pages/OutreachPolicy";
import ScrollToTop from "./components/ScrollToTop";

// The onboarding form is a standalone full-screen page (own logo, no site
// chrome), matching the Figma design.
const STANDALONE_ROUTES = ["/onboarding"];

function Shell() {
  const { pathname } = useLocation();
  const standalone = STANDALONE_ROUTES.includes(pathname.replace(/\/+$/, "") || "/");

  return (
    <>
      <ScrollToTop />
      {!standalone && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/claura-casestudy" element={<ClauraCasestudy />} />
        <Route path="/mrja-casestudy" element={<MrjaCasestudy />} />
        <Route path="/miriyam-casestudy" element={<MiriyamCasestudy />} />
        <Route path="/masculino-casestudy" element={<MasculinoCasestudy />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/outreach-policy" element={<OutreachPolicy />} />
      </Routes>
      {!standalone && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename="/">
      <Shell />
    </BrowserRouter>
  );
}

export default App;
