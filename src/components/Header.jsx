// components/Header.jsx
import React from 'react';
import Navbar from './Navbar';

/**
 * Header Component
 * Wraps the Navbar with an overflow-hidden container to prevent unwanted scrollbars.
 * Useful as the topmost layout section across pages.
 */
const Header = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
    </div>
  );
};

export default Header;
