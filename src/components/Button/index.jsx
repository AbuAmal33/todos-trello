import React from 'react';
import './button.css';
import PropTypes from 'prop-types';

function Button(props) {
  return (
    <button
      className={props.size}
      onClick={props.onClick}
      style={{ borderRadius: props.radius }}
      disabled={props.todo}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  radius: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  size: 'small',
  radius: 50,
};

export default Button;
