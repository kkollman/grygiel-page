/**
 * LayoutComponent component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { ParallaxProvider } from 'react-scroll-parallax';

import './Layout.module.scss';
import 'styles/_main.scss';
import Navbar from 'components/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <ParallaxProvider>
        <Navbar />
        <main>{children}</main>
      </ParallaxProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
