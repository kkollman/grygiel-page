import React from 'react';
import cls from 'classnames';

import Heading from 'components/Heading';
import Story from 'components/Story';
import ServiceBlock from 'components/ServiceBlock';

import styles from './Services.module.scss';

const Services = () => {
  return (
    <section id={'uslugi'} className={cls(styles['services'])}>
      <Heading>Oferta</Heading>
      <Story className={styles.story}>
        Oferujemy wykonanie, wycenę, naprawy w następującym zakresie:
      </Story>
      <section className={styles.blocks}>
        <ServiceBlock title={'Instalacje elektryczne'} />
        <ServiceBlock title={'Usługi glazurnicze'} />
        <ServiceBlock title={'Usługi remontowe'} />
        <ServiceBlock title={'Usługi budowlane'} />
        <ServiceBlock title={'Usługi malarskie'} />
        <ServiceBlock
          title={'Pozostałe usługi'}
          summary={
            'Nie są Państwo pewni, czego dokładnie potrzebują? Zapraszamy do kontaktu'
          }
        />
      </section>
    </section>
  );
};

Services.propTypes = {};
Services.defaultProps = {};

export default Services;

// todo: dodać separator po rozwinięciu summary
// todo: dodać separator animowany między sekcjami
