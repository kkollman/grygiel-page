import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';

const Cube = ({ size, color, className, withGradient }) => {
  return (
    <svg
      className={cls(className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      height={size}
    >
      {withGradient && (
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: '#F6C414', stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: '#C19B14', stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
      )}
      <path
        fill={withGradient ? 'url(#grad1)' : color}
        d="M32 0L4.3 16v32L32 64l27.7-16V16z"
      />
    </svg>
  );
};

Cube.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  className: PropTypes.string,
};
Cube.defaultProps = {
  size: 64,
  color: '#F6C414',
};

export default Cube;
