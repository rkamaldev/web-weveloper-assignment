import React from 'react';
import PropTypes from 'prop-types';

import style from './body.module.scss';

function Body(props) {
  return <div className={style.body}>{props.children}</div>;
}

Body.propTypes = {
  children: PropTypes.any,
};

export default Body;
