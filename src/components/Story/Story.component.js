import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';

import styles from './Story.module.scss';

const Story = ({ children, className }) => {
  return <p className={cls(styles['story'], className)}>{children}</p>;
};

Story.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  className: PropTypes.string,
};
Story.defaultProps = {};

export default Story;
