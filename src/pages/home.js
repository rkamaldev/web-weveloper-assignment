import React from 'react';
import Head from 'next/head';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Body from '@/components/layout/Body';
import User from '@/components/user';

import styles from '@/styles/Home.module.scss';

function Home() {
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
          <User />
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

export default Home;
