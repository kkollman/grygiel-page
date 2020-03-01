import React from 'react';

import Layout from 'components/Layout/Layout.component';
import SEO from 'components/Seo/Seo.component';
import Hero from 'components/Hero';
import Middle from 'components/Middle';
import Examples from 'components/Examples';
import Footer from 'components/Footer';

const IndexPage = () => (
  <Layout>
    <SEO title="Grygiel" />
    <Hero />
    <Middle />
    <Examples />
    <Footer />
  </Layout>
);

export default IndexPage;
