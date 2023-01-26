import React from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { useGoogleLogin } from '@react-oauth/google';
import { setGoogleAuthData } from '@/features/login/loginSlice';

import style from './loginSection.module.scss';

function Login() {
  const dispatch = useDispatch();
  const router = useRouter();

  const login = useGoogleLogin({
    onSuccess: token => {
      console.log(token);
      dispatch(setGoogleAuthData(token));
      router.push('/home');
    },
    flow: 'implicit',
  });

  return (
    <div className={style.body}>
      <div className={style.left}>
        <div className={style.wrapper}>
          <div className={style.title}>
            All in one: <br />
            FIND THE RIGHT INSURANCE FOR YOU AND YOUR LOVED ONES
          </div>

          <div className={style.googleButtonWrapper}>
            <button onClick={() => login()} className={style.googleSignInButton}>
              Sign in with Google
            </button>
          </div>
        </div>
      </div>

      <div className={style.right}>
        <img src="/zurich-home.png" alt="me" width="100%" />
      </div>
    </div>
  );
}

export default Login;
