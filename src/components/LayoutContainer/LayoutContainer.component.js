import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';

import styles from './LayoutContainer.module.scss';

const LayoutContainer = ({ children, className }) => {
  return (
    <div className={cls(styles.layoutContainer, className)}>{children}</div>
  );
};

LayoutContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  className: PropTypes.string,
};
LayoutContainer.defaultProps = {};

export default LayoutContainer;
