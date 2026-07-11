import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';
import IoTMobileApp from './components/ProjectDetails/IoTMobileApp';
import PurolatorMobileApp from './components/ProjectDetails/PurolatorMobileApp';
import PurolatorCouponPortal from './components/ProjectDetails/PurolatorCouponPortal';
import OSCARMobilePro from './components/ProjectDetails/OSCARMobilePro';
import ConstructionPage from './components/ProjectDetails/ConstructionPage';
import Contact from './components/Contact';
import ScrollToTop from './ScrollToTop';
import ScrollUpButton from './ScrollUpButton';
import { projectPaths } from './data/projects';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path={projectPaths.iotMobileApp} element={<IoTMobileApp />} />
        <Route path={projectPaths.salesManagementWebsite} element={<ConstructionPage />} />
        <Route path={projectPaths.brandingPackage} element={<ConstructionPage />} />
        <Route path={projectPaths.purolatorMobileAppRedesign} element={<PurolatorMobileApp />} />
        <Route path={projectPaths.purolatorEmployeeCouponPortal} element={<PurolatorCouponPortal />} />
        <Route path={projectPaths.oscarMobilePro} element={<OSCARMobilePro />} />
        <Route path="/projects/1" element={<Navigate replace to={projectPaths.iotMobileApp} />} />
        <Route path="/projects/2" element={<Navigate replace to={projectPaths.salesManagementWebsite} />} />
        <Route path="/projects/3" element={<Navigate replace to={projectPaths.brandingPackage} />} />
        <Route path="/projects/4" element={<Navigate replace to={projectPaths.purolatorMobileAppRedesign} />} />
        <Route path="/projects/5" element={<Navigate replace to={projectPaths.salesManagementWebsite} />} />
        <Route path="/projects/6" element={<Navigate replace to={projectPaths.purolatorEmployeeCouponPortal} />} />
        <Route path="/projects/7" element={<Navigate replace to={projectPaths.oscarMobilePro} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Ensure the page scrolls to the top on route change */}
      <div id="root">
        <Header />
        <AnimatedRoutes />
        <Footer />
        <ScrollUpButton /> {/* Add scroll-to-top button for better accessibility */}
      </div>
    </Router>
  );
}

export default App;
