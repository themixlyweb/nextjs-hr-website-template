// components/Footer.jsx
import Image from 'next/image';
import NextLink from 'components/NextLink';
import SocialLinks from 'components/SocialLinks';
import { usefulLinks } from '../data';

/**
 * Generates a widget with a list of links
 * @param {Array} list - List of link objects
 * @param {string} title - Widget title
 * @param {string} [location] - Optional location suffix to append to URLs
 */
const widget = (list, title, location = '') => (
  <div className="widget">
    <h4 className="widget-title fs-24 mb-3 text-white">{title}</h4>
    <ul className="list-unstyled text-reset mb-0">
      {list.map(({ url, title, id }) => (
        <li key={id}>
          <NextLink href={`${url}${location}`} title={title} />
        </li>
      ))}
    </ul>
  </div>
);

/**
 * Footer Component
 * Contains branding, useful links, contact information, and a map embed.
 */
const Footer = () => {
  return (
    <footer className="border-top dark-bg overflow-hidden">
      <div className="container pt-10 pt-md-12 pb-7">
        <div className="row gx-10 justify-content-around">
          {/* Branding and social links */}
          <div className="col-lg-3">
            <div className="widget d-flex flex-column align-items-center">

                <Image
                  src="/img/logo-light.png"
                  alt="Logo | HRMate"
                  width={250}
                  height={70}
                  className="text-center mb-3"
                />
  
              <p className="lead mb-2 text-justify fs-18 text-white">
                Providing Your Company with All-Inclusive, Customised HR Solutions for Long-Term Success
              </p>
            </div>
            <div className="d-flex align-items-center flex-column">
              <h4 className="fs-24 text-white">Follow Us On</h4>
              <SocialLinks className="nav social text-md-end" />
            </div>
          </div>

          {/* Useful Links */}
          <div className="col-md-3 col-lg-2 mt-md-5 mt-lg-0 mt-10 text-white d-flex justify-content-md-center">
            {widget(usefulLinks, 'Useful Links')}
          </div>

          {/* Contact Info */}
          <div className="col-md-3 col-lg-3 mt-md-5 mt-lg-0 mt-10 text-white d-flex justify-content-md-center">
            <div className="widget">
              <h4 className="widget-title text-white fs-24 mb-3">Contact Us</h4>

              <div className="d-flex mb-3 align-items-start">
                <i className="uil uil-location-pin-alt fs-30 text-white" />
                <address className="text-white ms-2 m-0 mt-1">
                  123 Tech Park, Ta. Richmond,
                  Dist. Greater London,
                  United Kingdom – SW1A 1AA
                </address>
              </div>

              <div className="d-flex mb-3 align-items-center">
                <i className="uil uil-envelope fs-26 text-white" />
                <a href="mailto:info@hrconsulancy.com" className="link-body ms-2 text-white">
                  info@hrconsulancy.com
                </a>
              </div>

              <div className="d-flex">
                <i className="uil uil-phone-volume fs-26 text-white" />
                <p className="mt-1 ms-2 fs-18">
                  <a href="tel:+919876543210" className="text-white">
                    +91 98765 43210
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Map Location */}
          <div className="col-md-3 col-lg-3 mt-md-5 mt-lg-0 mt-10 text-white d-flex justify-content-md-center">
            <div className="widget">
              <h4 className="widget-title text-white fs-24 mb-5">Location</h4>
              <div className="d-flex justify-content-center border rounded overflow-hidden">
                <iframe
                  title="Company Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.978014612501!2d-121.94509168469229!3d37.54826927980085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc7e3c3b7e7c1%3A0x6f8a645f82fa4b78!2s789%20Innovation%20Dr%2C%20Fremont%2C%20CA%2094538%2C%20USA!5e0!3m2!1sen!2sin!4v1718278912937!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="mt-4 mt-md-4 mb-7" />

        {/* Copyright */}
        <div className="d-md-flex align-items-center justify-content-center">
          <p className="mb-2 mb-lg-0 text-white">
            © {new Date().getFullYear()} HRMate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
