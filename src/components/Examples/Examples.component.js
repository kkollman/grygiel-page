import React from 'react';
import cls from 'classnames';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Heading from 'components/Heading';
import Story from 'components/Story';
import Exhibit from 'components/Exhibit';

import styles from './Examples.module.scss';

const Examples = () => {
  const data = useStaticQuery(graphql`
    query {
      maintenance: file(relativePath: { eq: "maintenance.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 680, maxHeight: 250, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <section className={cls(styles['examples'])}>
      <Heading>Przykładowe realizacje</Heading>
      <Story>Ta sekcja jest jeszcze w budowie. Zapraszamy wkrótce!</Story>
      <section className={styles.exhibits}>
        <Exhibit>
          <Img fluid={data.maintenance.childImageSharp.fluid} />
        </Exhibit>
      </section>
    </section>
  );
};

export default Examples;
