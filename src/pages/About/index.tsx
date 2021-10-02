import React from 'react';
import Layout from '../../components/Layout';
import HeroBanner from '../../components/Modules/HeroBanner';

function About() {
  return (
    <Layout>
      <HeroBanner banner={{id: 'about-banner'}}>
        <h1>About me Hero Banner here</h1>
      </HeroBanner>
      <section>This is about me.</section>
    </Layout>
  );
}

export default About;
