import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';
import BlogList from './pages/BlogList';
import Blog from './pages/Blog';

// Removed BlogList and BlogPost imports as blog pages are removed

import { useDocTitle } from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';

import { HelmetProvider } from 'react-helmet-async';

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("ChatWhole| Data Engineering and Data Science Service solutions");

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-demo" element={<DemoProduct />} />
            {/* Removed blog routes */}
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<Blog />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </HelmetProvider>
  );
}

export default App;
