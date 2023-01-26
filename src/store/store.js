import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';

import { loginSlice } from '@/features/login/loginSlice';
import { userSlice } from '@/features/user/userSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      [loginSlice.name]: loginSlice.reducer,
      [userSlice.name]: userSlice.reducer,
    },
    devTools: true,
  });

export default createWrapper(makeStore);
