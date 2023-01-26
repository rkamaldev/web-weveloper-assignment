import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authData: {},
  sessionUserData: {},
};

export const loginSlice = createSlice({
  name: 'googleAuth',
  initialState,
  reducers: {
    setGoogleAuthData(state, action) {
      state.authData = action.payload;
    },
    setSessionUserData(state, action) {
      state.sessionUserData = action.payload;
    },
  },
});

export const { setGoogleAuthData, setSessionUserData } = loginSlice.actions;
export const getGoogleAuthData = state => state.googleAuth.authData;
export const getSessionUserData = state => state.googleAuth.sessionUserData;
export default loginSlice.reducer;
