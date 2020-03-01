import React from 'react';
import cls from 'classnames';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

import Logo from 'components/Logo';

import styles from './Hero.module.scss';

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wall: file(relativePath: { eq: "wall.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <section id={'hero'} className={cls(styles['hero'])}>
      <div className={styles.heroTitle}>
        <div className={styles.background}>
          <Img
            fluid={data.hero.childImageSharp.fluid}
            className={styles.heroImage}
          />
        </div>
        <div className={styles.heroLogo}>
          <Logo size={296} color={'#F6C414'} withStripe />
        </div>
      </div>
      <div className={styles.heroSide}>
        <div className={styles.background}>
          <Img
            fluid={data.wall.childImageSharp.fluid}
            className={cls(styles.heroImage, styles.wall)}
          />
        </div>
        <header className={styles.header}>
          <h1>Grygiel</h1>
          <h2>Usługi budowlane</h2>
        </header>
      </div>
    </section>
  );
};

export default Hero;
