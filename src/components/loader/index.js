import React from 'react';
import PropTypes from 'prop-types';

import style from './loader.module.scss';

function Loader(props) {
  const { loader } = props;
  return (
    <>
      {loader && (
        <div className={style.loadingWrapper}>
          <div className={style.loader}></div>
        </div>
      )}
    </>
  );
}

Loader.propTypes = {
  loader: PropTypes.bool,
};

export default Loader;
