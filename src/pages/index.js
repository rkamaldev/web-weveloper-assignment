import React from 'react';
import Head from 'next/head';
import getConfig from 'next/config';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Body from '@/components/layout/Body';
import Login from '@/components/login';

import styles from '@/styles/Home.module.scss';

export default function Home() {
  const { publicRuntimeConfig } = getConfig();
  const { GOOGLE_AUTH_CLIENT_ID } = publicRuntimeConfig;

  return (
    <>
      <Head>
        <title>Zurich customer portal</title>
        <meta name="description" content="Zurich customer portal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <Body>
          <GoogleOAuthProvider clientId={GOOGLE_AUTH_CLIENT_ID}>
            <Login />
          </GoogleOAuthProvider>
        </Body>
        <Footer
          footerItems={[
            {
              type: 'link',
              link: 'https://www.zurich.com/contact-us',
              content: 'Contact us',
              target: '',
            },
            {
              type: 'link',
              link: 'https://www.zurich.com/services/privacy',
              content: 'Privacy',
              target: '_blank',
            },
            {
              type: 'text',
              content: '© 2023 Rights Reserved',
            },
          ]}
        />
      </main>
    </>
  );
}
