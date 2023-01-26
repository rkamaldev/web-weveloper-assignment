import React from 'react';
import PropTypes from 'prop-types';

import wrapper from '@/store/store';

import '@/styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.css';

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

App.propTypes = {
  pageProps: PropTypes.any,
  Component: PropTypes.any,
};

export default wrapper.withRedux(App);
