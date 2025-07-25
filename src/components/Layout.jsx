// Layout.jsx
import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';

/**
 * Layout Component
 * Wraps the entire page with a consistent header and footer.
 * Accepts dynamic content via the `children` prop.
 */
const Layout = ({ children }) => {
  return (
    <Fragment>
      {/* Site Header */}
      <Header />

      {/* Page Content */}
      <main>{children}</main>

      {/* Site Footer */}
      <Footer />
    </Fragment>
  );
};

export default Layout;
