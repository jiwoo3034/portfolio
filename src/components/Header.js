import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    // Define lastScrollY inside the effect to preserve its value between renders
    let lastScrollY = window.scrollY; // Initialize with current scroll position
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Check if at top of page or scrolling up
      if (currentScrollY < 10) {
        setIsScrollingUp(true); // Always show header at top of page
      } else if (currentScrollY < lastScrollY) {
        setIsScrollingUp(true); // Show header when scrolling up
      } else if (currentScrollY > lastScrollY) {
        setIsScrollingUp(false); // Hide header when scrolling down
      }
      // Update the last scroll position
      lastScrollY = currentScrollY;
    };

    // Call once to set initial state
    handleScroll();
    
    // Add event listener with { passive: true } for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Only close if clicking on the overlay, not the menu itself or its children
      if (menuOpen && event.target.classList.contains('overlay')) {
        setMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);
  
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  // This function will be used to close the menu after navigation completes
  const closeMenuAfterNavigate = () => {
    // Only close menu after a slight delay to ensure navigation happens first
    setTimeout(() => {
      setMenuOpen(false);
    }, 100);
  };
  
  return (
    <>
      <div className={`overlay ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(false)}></div>
      <header className={isScrollingUp ? 'show' : 'hide'}>
        <Link to="/">
          <div className="header-left">
            <img src={process.env.PUBLIC_URL + '/images/my-logo.png'} alt="Logo" className="logo" />
            <p>Jiwoo Lee</p>
          </div>
        </Link>
        <button 
          className="mobile-menu-button" 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
        <nav className={`header-right ${menuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={closeMenuAfterNavigate}>About</Link>
          <Link to="/projects" onClick={closeMenuAfterNavigate}>Projects</Link>
          <Link to="/contact" onClick={closeMenuAfterNavigate}>Contact</Link>
        </nav>
      </header>
    </>
  );
}

export default Header;
