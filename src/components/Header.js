import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsScrollingUp(false); // Scrolling down
      } else {
        setIsScrollingUp(true); // Scrolling up
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={isScrollingUp ? 'header show' : 'header hide'}>
      <Link to="/">
        <div className="header-left">
          <img src="/images/my-logo.png" alt="Logo" className="logo" />
          <p>Jiwoo Lee</p>
        </div>
      </Link>
      <nav className="header-right">
        <Link to="/">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
