// Navbar.jsx
import { Fragment, useRef } from 'react';
import { useRouter } from 'next/router';
import useSticky from 'hooks/useSticky';
import Image from 'next/image';
import NextLink from 'components/NextLink';
import SocialLinks from 'components/SocialLinks';

const Navbar = (props) => {
  // Destructure props with defaults applied via defaultProps below
  const { navClassName, navOtherClass, fancy, stickyBox, logoAlt } = props;

  // Determine if navbar should be sticky, using a custom hook triggered at scrollY === 350
  const sticky = useSticky(350);

  // Ref for the main navbar element (used for measuring height, etc.)
  const navbarRef = useRef(null);

  // Determine which logo to display based on sticky state; fallback to provided logoAlt or default 'logo-light'
  const logo = sticky ? 'logo' : logoAlt ?? 'logo-light';

  // Predefined class applied when navbar is sticky/fixed
  const fixedClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed';

  // Header content markup for both fancy and standard layouts
  const headerContent = (
    <Fragment>
      {/* Navbar Brand / Logo */}
      <div className="navbar-brand w-100">
        <NextLink
          href="/"
          title={
            <Image
              alt="Logo | HRMate"
              src={`/img/${logo}.png`}
              width={200}
              height={50}
              className="my-2"
            />
          }
        />
      </div>

      {/* Offcanvas Navigation for mobile/tablet */}
      <div
        id="offcanvas-nav"
        data-bs-scroll="true"
        className="navbar-collapse offcanvas offcanvas-nav offcanvas-start"
      >
        {/* Offcanvas Header visible on small screens */}
        <div className="offcanvas-header d-lg-none offcavas-bg">
          <NextLink
            href="/"
            title={
              <Image
                alt="Logo | HRMate"
                src="/img/logo-light.png"
                width={180}
                height={60}
                data-bs-dismiss="offcanvas"
              />
            }
          />
          <button
            type="button"
            aria-label="Close"
            data-bs-dismiss="offcanvas"
            className="ms-8 btn-close btn-close-white"
          />
        </div>

        {/* Offcanvas Body with navigation links */}
        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100 offcavas-bg">
          <ul className="navbar-nav">
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="/" title="Home" className="nav-link rounded" />
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="#" title="About Us" className="nav-link rounded" />
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="#" title="Services" className="nav-link rounded" />
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="#" title="Open Job Posting" className="nav-link rounded" />
            </li>
            <li className="nav-item align-items-center d-flex" data-bs-dismiss="offcanvas">
              <NextLink
                title="Contact Us"
                href="#"
                className={`btn btn-sm ${
                  sticky ? 'secondary-bg text-white' : 'bg-white'
                } text-second mt-2 mt-lg-0 rounded border border-md-none`}
              />
            </li>
          </ul>

          {/* Offcanvas Footer with contact info & social links (visible on small screens) */}
          <div className="offcanvas-footer d-lg-none">
            <div>
              <NextLink
                title="info@hrconsulancy.com"
                className="link-inverse"
                href="mailto:info@hrconsulancy.com"
              />
              <br />
              <NextLink href="tel:+919876543210" title="+91 98765 43210" />
              <br />
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      {/* Navbar toggler for mobile (hamburger icon) */}
      <div className={navOtherClass}>
        <ul className="navbar-nav flex-row align-items-center ms-auto">
          <li className="nav-item d-lg-none">
            <button
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvas-nav"
              className={`hamburger offcanvas-nav-btn ${sticky ? '' : 'text-white'}`}
            >
              <span />
            </button>
          </li>
        </ul>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      {/* Optionally add a spacer element equal to the navbar height when sticky */}
      {stickyBox && (
        <div style={{ paddingTop: sticky ? navbarRef.current?.clientHeight : 0 }} />
      )}

      {/* Main Navbar element: apply fixed styles if sticky */}
      <nav ref={navbarRef} className={sticky ? fixedClassName : navClassName}>
        {fancy ? (
          <div className="container">
            <div className="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-end">
              {headerContent}
            </div>
          </div>
        ) : (
          <div className="container flex-lg-row flex-nowrap align-items-center">
            {headerContent}
          </div>
        )}
      </nav>
    </Fragment>
  );
};

// Default props for the Navbar component
Navbar.defaultProps = {
  stickyBox: true,
  navOtherClass: 'navbar-other d-flex d-lg-none',
  navClassName: 'navbar navbar-expand-lg classic transparent position-absolute navbar-dark'
  // Alternative class option: 'navbar navbar-expand-lg bg-image'
};

export default Navbar;
