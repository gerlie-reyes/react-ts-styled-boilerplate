import React from 'react';
import Layout from '../../components/Layout';
import gigsImg from '../../assets/images/gigs.png';
import bgImage from '../../assets/images/bannerBg.jpeg';
import HeroBanner from '../../components/Modules/HeroBanner';
import { HomeBannerLeft, HomeBannerRight } from './HomeStyles';

const Home: React.FC = () => {
  return (
    <Layout isHomePage>
      <HeroBanner banner={{ id: 'homepage-banner', bgImage: bgImage }}>
        <HomeBannerLeft>
          <h1>React-Typescript Starter</h1>
          <p>
            Kick off your web applications using this
            <br />
            React, Typescript, styled-components boilerplate.
            <br />
            Built on top of create-react-app and Typescript template. <br />
            This starter can be used for websites with responsive hamburger
            navigation.
          </p>
        </HomeBannerLeft>
        <HomeBannerRight>
          <img
            src={gigsImg}
            alt='An orbit of community logos of the skills I have learned'
          />
        </HomeBannerRight>
      </HeroBanner>
    </Layout>
  );
};

export default Home;
