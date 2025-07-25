import { Fragment } from 'react';
import Head from 'next/head';
import PageProgress from 'components/PageProgress';
import Hero from 'components/Hero';
import About from 'components/About';
import ImageCard from 'components/ImageCard';
import Image from 'next/image';
import { homeSolutionsCardData } from '../src/data';

const Home = () => {
  return (
    <Fragment>
      {/* Top page loader bar */}
      <PageProgress />

      {/* SEO Metadata */}
      <Head>
        <title>HRMate – React & Next.js Template for HR Consultancy Websites</title>
        <meta
          name="description"
          content=""
        />
        <link rel="canonical" href="https://hrmate.in/" />
      </Head>

      <main className="content-wrapper overflow-hidden">
        {/* Hero Section */}
        <Hero />


        {/* remove this if you want to use video here */}
        <section className="wrapper bg-light">
          <div className="container position-relative">
            <figure
              data-delay="250"
              data-cues="fadeIn"
              className="rounded mt-n17 mt-lg-n20 position-relative justify-content-center d-flex"
            >
              <Image src="/img/movie-bg.webp" alt='Accelerating Your Business Journey with Adaptive HR Solutions for Consistent Growth' fill className='position-relative' />
            </figure>
          </div>
        </section>
        {/* Uncomment This And Use Video here */}
        {/* Promotional Video Section */}
        {/* <section className="wrapper bg-light">
          <div className="container position-relative">
            <figure
              data-delay="250"
              data-cues="fadeIn"
              className="rounded mt-n17 mt-lg-n20 position-relative justify-content-center d-flex"
            >
              <video
                loop
                muted
                autoPlay
                playsInline
                preload="auto"
                poster="/img/movie.webp"
                className="w-100 rounded caption-overlay d-block video-large"
              >
                <source src="/img/movie.mp4" type="video/mp4" media="(max-width: 720px)" />
                <source src="/img/movie.mp4" type="video/mp4" media="(min-width: 721px)" />
                <p>Your browser does not support the video tag. Please consider upgrading.</p>
              </video>
            </figure>
          </div>
        </section> */}

        {/* About Section */}
        <section className="wrapper">
          <div className="container py-12 py-md-14">
            <About
              headingH1="Welcome to "
              span="HRMate"
              para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae debitis aut in quos temporibus. Eligendi, perspiciatis, praesentium quos commodi asperiores minima voluptate maiores repellendus enim beatae unde facilis maxime sit, odio delectus sunt voluptates. Voluptates consequatur voluptatum similique molestias vero. Tempora doloremque repellat cupiditate iusto recusandae nulla officia distinctio. Dolore sunt reiciendis dicta sint culpa officiis recusandae? Rerum eos blanditiis quas pariatur, corporis quidem officiis tempora quae possimus aliquam dolores aperiam necessitatibus debitis suscipit voluptas beatae dolorem ipsa amet quibusdam dolorum nobis? Ipsa corrupti, velit quod quam praesentium voluptatem eveniet deserunt, vel, omnis at nam. Aliquam dolor repellendus eum. Dolore!"
              imgPosition="right"
              src="/img/welcome-to-hr-consultancy.webp"
              src1="/img/welcome-to-hr-consultancy-1.webp"
              alt="Welcome to HRMate"
            />
          </div>
        </section>

        {/* HR Solutions Cards Section */}
        <section className="wrapper bg-light">
          <div className="container pb-12 pb-md-16">
            <div className="row text-center section mb-5 mb-md-0">
              <h2 className="fs-46 fw-bold mb-3 mt-3">
                Comprehensive <span>HR Solutions for Businesses</span> in Location
              </h2>
            </div>
            <div className="mt-10">
              <ImageCard arr={homeSolutionsCardData} />
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
