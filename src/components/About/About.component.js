import React from 'react';
import cls from 'classnames';

import Heading from 'components/Heading';
import Story from 'components/Story';
import LayoutContainer from 'components/LayoutContainer';

import styles from './About.module.scss';

const About = () => {
  return (
    <div className={cls(styles['about'])}>
      <LayoutContainer>
        <header className={styles.story}>
          <Heading>O nas</Heading>
          <Story>
            Firma usługowa Grygiel funkcjonuje od 2012 roku i prowadzi
            działalność zarówno w Polsce, jak i za granicą. Cechuje nas fachowe
            podejście do wykonywanej pracy, dbałość o detale i elastyczność we
            współpracy. Zależy nam na dobrej komunikacji z klientem. <br />
            <br />
            Naszym celem jest Państwa satysfakcja.
          </Story>
        </header>
      </LayoutContainer>
    </div>
  );
};

export default About;
