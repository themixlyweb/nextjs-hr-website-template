// SocialLinks.jsx
import React from 'react';

// Social media links configuration
const links = [
  {
    id: 1,
    icon: 'uil uil-facebook', // Icon class for Facebook
    url: 'https://www.facebook.com/', // External URL
  },
  {
    id: 1,
    icon: 'uil uil-instagram', // Icon class for Instagram
    url: 'https://www.instagram.com/', // External URL
  },
  {
    id: 1,
    icon: 'uil uil-linkedin', // Icon class for LinkedIn
    url: 'https://www.linkedin.com/', // External URL
  },
];

// Reusable SocialLinks component
const SocialLinks = ({ className = 'nav social mt-4' }) => {
  return (
    <nav className={className}>
      {links.map(({ id, icon, url }) => (
        <a
          key={id}
          href={url}
          target="_blank" // Opens link in a new tab
          rel="noreferrer" // Security best practice
          aria-label="Social Media Link" // Improves accessibility
        >
          <i className={`${icon} fs-34 bg-white rounded`} />
        </a>
      ))}
    </nav>
  );
};

export default SocialLinks;
