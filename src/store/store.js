import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';

import { loginSlice } from '@/features/login/loginSlice';
import { userSlice } from '@/features/user/userSlice';

const store = configureStore({
  reducer: {
    [loginSlice.name]: loginSlice.reducer,
    [userSlice.name]: userSlice.reducer,
  },
  devTools: true,
});

const makeStore = () => store;

export const AppDispatch = store.dispatch;
export const RootState = store.getState;
export default createWrapper(makeStore);
