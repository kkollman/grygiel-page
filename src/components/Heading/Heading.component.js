import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';

import styles from './Heading.module.scss';

const Heading = ({ children, className }) => {
  return <h2 className={cls(styles['heading'], className)}>{children}</h2>;
};

Heading.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  className: PropTypes.string,
};

export default Heading;
