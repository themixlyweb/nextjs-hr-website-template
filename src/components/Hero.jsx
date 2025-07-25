// components/Hero.jsx
import React from "react";

/**
 * Hero Component
 * Renders the primary headline section for the landing page.
 * Includes animation cues and styled text for emphasis.
 */
const Hero = () => {
  return (
    <section className="wrapper secondary-bg bg-lines">
      {/* Main container with responsive padding and centered text */}
      <div className="container pt-16 pt-md-18 pb-18 pb-lg-21 text-center">
        <div className="row">
          {/* Centered column with animation cues for the hero heading */}
          <div
            className="col-lg-10 col-xl-9 col-xxl-8 mx-auto"
            data-cues="zoomIn"
            data-delay="500"
            data-interval="-200"
            data-group="page-title"
          >
            {/* Main headline */}
            <h2 className="display-1 fs-46 lh-sm mb-8 text-white">
              Accelerating Your Business Journey with{" "}
              <span className="underline-gradient-9 fw-bolder border-bottom border-white border-2 fs-44">
                <em>Adaptive HR Solutions</em>
              </span>{" "}
              for Consistent Growth
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
