import React from 'react';
import { useRouter } from 'next/router';
import getConfig from 'next/config';

import style from './error.module.scss';

function Error() {
  const router = useRouter();
  const { publicRuntimeConfig } = getConfig();
  const { CONTACT_EMAIL } = publicRuntimeConfig;

  return (
    <div className={style.body}>
      <div className={style.left}>
        <div className={style.wrapper}>
          <div className={style.title}>Oops, looks like something went wrong!!!</div>
          <div className={style.description}>
            Please try again later or contact <span>{CONTACT_EMAIL}</span>
          </div>

          <div className={style.goHomeButtonWrapper}>
            <button className={style.goHomeButton} onClick={() => router.push('/')}>
              Back to Home
            </button>
          </div>
        </div>
      </div>
      <div className={style.right}>
        <img src="/error-page.png" alt="me" width="80%" />
      </div>
    </div>
  );
}

export default Error;
