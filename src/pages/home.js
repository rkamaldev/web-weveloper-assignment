import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import getConfig from 'next/config';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import { getGoogleAuthData, setSessionUserData } from '@/features/login/loginSlice';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Body from '@/components/layout/Body';
import User from '@/components/user';
import Loader from '@/components/loader';

import styles from '@/styles/Home.module.scss';

export default function Home() {
  const { publicRuntimeConfig } = getConfig();
  const { GOOGLE_API } = publicRuntimeConfig;
  const authData = useSelector(getGoogleAuthData);
  const dispatch = useDispatch();
  const router = useRouter();

  const [loaderState, setLoaderState] = useState(true);
  const [userStatus, setUserStatus] = useState(false);

  useEffect(() => {
    fetch(`${GOOGLE_API}/userinfo?alt=json&access_token=${authData.access_token}`)
      .then(res => res.json())
      .then(data => {
        dispatch(setSessionUserData(data));
        setLoaderState(false);
        if (data.verified_email) {
          setUserStatus(true);
        } else {
          router.push('/error');
        }
      })
      .catch(() => {
        setLoaderState(false);
        router.push('/error');
      });
  }, []);

  return (
    <>
      <Head>
        <title>Zurich customer portal</title>
        <meta name="description" content="Zurich customer portal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Loader loader={loaderState} />
        <Header />
        <Body>{userStatus && <User />}</Body>
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
