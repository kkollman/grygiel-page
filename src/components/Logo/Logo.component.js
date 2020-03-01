import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ size, color, withStripe }) => {
  if (withStripe) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" height={size}>
        <path
          fill={`${color}`}
          d="M11.7 57.6h40.6V64H11.7v-6.4zM46.3 16.5L32 24.8l-7.8-4.4v8.4l7.8 4.5L46.3 25v6.9L32 40.1l-14.3-8.2V15.4L32 7.1l7.6 4.4L45.8 8 32 0 11.5 11.8v23.6L32 47.3l20.5-11.9V16.5z"
        />
      </svg>
    );
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      height={size}
      width={size}
    >
      <path
        fill={`${color}`}
        d="M51.5 22.4L32.1 33.6l-10.5-6V39l10.5 6.1 19.4-11.2v9.3L32.1 54.4 12.8 43.2V20.8L32.1 9.6l10.4 6 8.3-4.8L32.1 0 4.4 16v32l27.7 16 27.8-16V22.4z"
      />
    </svg>
  );
};

Logo.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
};
Logo.defaultProps = {
  size: 24,
  color: '2e3131',
};

export default Logo;
