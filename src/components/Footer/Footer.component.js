import React from 'react';
import cls from 'classnames';

import Heading from 'components/Heading';
import Story from 'components/Story';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <section className={cls(styles['footer'])}>
      <Heading>Kontakt</Heading>
      <Story>
        Firma Usługowa Wojciech Grygiel <br />
        ul. Zygmunta Noskowskiego 9, 58-506 Jelenia Góra <br />
        REGON: 021899470 <br />
        NIP: 6112716221 <br />
        <a href="mailto:kontakt@uslugi-grygiel.pl">kontakt@uslugi-grygiel.pl</a>
      </Story>
    </section>
  );
};

export default Footer;
