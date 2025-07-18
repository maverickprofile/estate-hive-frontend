import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import Navbar from './components/common/navbar';
import Footer from './components/common/footer';
import HomePage from './components/homepage';
import AIAgentEcosystem from './components/technologies/AIAgentEcosystem';
import Blog from './components/Blog';
import EHAccelerate from './components/services/EHAccelerate';
import EHDesign from './components/services/EHDesign';
import EHLiving from './components/services/EHLiving';
import EHRank from './components/services/EHRank';
import EHSignature from './components/services/EHSignature';
import EHStay from './components/services/EHStay';
import EHCommercial from './components/services/EHCommercial';
import EHGeoHeat from './components/technologies/EHGeoHeat';
import SmartMatchEngine from './components/technologies/SmartMatchEngine';
import Career from './components/careers';
import Autherization from './components/AuthPage';
import ContactUs from './components/ContactUs';

// ✅ Scroll to Top on Route Change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

// ✅ Main App Layout
const Layout = () => {
  const { pathname } = useLocation();
  const hideNavFooter = pathname === '/auth';

  return (
    <div className="flex flex-col min-h-screen">
      {!hideNavFooter && <Navbar />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ai-agent-ecosystem" element={<AIAgentEcosystem />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/eh-accelerate" element={<EHAccelerate />} />
          <Route path="/eh-design" element={<EHDesign />} />
          <Route path="/eh-living" element={<EHLiving />} />
          <Route path="/eh-rank" element={<EHRank />} />
          <Route path="/eh-signature" element={<EHSignature />} />
          <Route path="/eh-stay" element={<EHStay />} />
          <Route path="/eh-commercial" element={<EHCommercial />} />
          <Route path="/eh-geoheat" element={<EHGeoHeat />} />
          <Route path="/smart-match-engine" element={<SmartMatchEngine />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/auth" element={<Autherization />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </main>

      {!hideNavFooter && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout />
    </Router>
  );
}

export default App;
