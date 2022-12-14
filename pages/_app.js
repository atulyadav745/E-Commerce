import React from 'react';
import { Toaster } from 'react-hot-toast';

import { Layout, Testimonial } from '../components';
import '../styles/globals.css';
import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
        <Testimonial/>
      </Layout>
    </StateContext>
  )
}

export default MyApp
