import React from 'react';
import cls from 'classnames';

import styles from './Exhibit.module.scss';

class Exhibit extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  render() {
    let { children } = this.props;
    return (
      <article className={cls(styles['exhibit'])}>
        <div className={styles.image}>{children}</div>
      </article>
    );
  }
}

export default Exhibit;
