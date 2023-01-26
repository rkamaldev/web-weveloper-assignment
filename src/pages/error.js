import React from 'react';
import Head from 'next/head';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Body from '@/components/layout/Body';
import Error from '@/components/error';

import styles from '@/styles/Home.module.scss';

export default function Home() {
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
          <Error />
        </Body>
        <Footer
          footerItems={[
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
