import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  const [headerState, setHeaderState] = useState({
    isFixed: false,
    canAnimate: false,
    isScrollUp: false
  });
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    let lastScroll = 0;
    let ticking = false;
    
    // Throttle scroll events for better performance
    const throttle = (callback, time = 100) => {
      if (!ticking) {
        ticking = true;
        setTimeout(() => {
          callback();
          ticking = false;
        }, time);
      }
    };
    
    const validateHeader = () => {
      const windowY = window.scrollY;
      const windowH = window.innerHeight * 0.3; // Show after 30% of window height
      const headerHeight = document.querySelector('header')?.offsetHeight || 80;
      
      if (windowY > windowH) {
        // We've scrolled past the threshold, enable fixed positioning
        setHeaderState(prev => {
          // Only add body padding when first setting to fixed
          if (!prev.isFixed) {
            document.body.style.paddingTop = `${headerHeight}px`;
          }
          return {...prev, isFixed: true};
        });
        
        // Check if we're far enough to add animation
        if (windowY > windowH + 40) {
          setHeaderState(prev => ({...prev, canAnimate: true}));
          
          // Determine scroll direction
          if (windowY < lastScroll) {
            // Scrolling up - show header
            setHeaderState(prev => ({...prev, isScrollUp: true}));
          } else {
            // Scrolling down - hide header
            setHeaderState(prev => ({...prev, isScrollUp: false}));
          }
        } else {
          setHeaderState(prev => ({...prev, isScrollUp: false}));
        }
      } else {
        // At top of page - default state
        setHeaderState(prev => {
          // Only remove body padding when switching from fixed to not fixed
          if (prev.isFixed) {
            document.body.style.paddingTop = '0px';
          }
          return {
            isFixed: false,
            canAnimate: false,
            isScrollUp: false
          };
        });
      }
      
      // Update last scroll position
      lastScroll = windowY;
    };
    
    const handleScroll = () => {
      throttle(validateHeader, 100);
    };
    
    // Call once to set initial state
    validateHeader();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
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
      <header 
        className={`
          ${headerState.isFixed ? 'is-fixed' : ''}
          ${headerState.canAnimate ? 'can-animate' : ''}
          ${headerState.isScrollUp ? 'scroll-up' : ''}
        `}
      >
        <Link to="/" aria-label="Go to homepage">
          <div className="header-left">
            <img src={process.env.PUBLIC_URL + '/images/my-logo.png'} alt="Jiwoo Lee's logo" className="logo" />
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
