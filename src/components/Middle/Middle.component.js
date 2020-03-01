import React from 'react';
import cls from 'classnames';
import { Parallax } from 'react-scroll-parallax';

import About from 'components/About';
import Cube from 'components/Cube';
import Services from 'components/Services';

import styles from './Middle.module.scss';

const Middle = () => {
  return (
    <div className={cls(styles['middle'])}>
      <div className={styles.smallCube}>
        <Parallax y={['0px', '-100px']} x={['0px', '80px']}>
          <Cube size={186} />
        </Parallax>
      </div>
      <div className={styles.largeCube}>
        <Parallax y={['0px', '100px']} x={['0px', '-100px']}>
          <Cube size={686} />
        </Parallax>
      </div>
      <About />
      <Services />
    </div>
  );
};

export default Middle;
