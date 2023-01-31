import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const initiateSession = createAsyncThunk('session', async tokenData => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(tokenData),
  };
  const data = await (await fetch(`/api/session`, requestOptions)).json();
  return data;
});

export const clearSession = createAsyncThunk('session', async () => {
  const data = await (await fetch(`/api/logout`)).json();
  return data;
});

const initialState = {
  authData: {},
};

export const loginSlice = createSlice({
  name: 'googleAuth',
  initialState,
  reducers: {
    setGoogleAuthData(state, action) {
      state.authData = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(initiateSession.fulfilled, (state, action) => {
      state.authData = action.payload;
    });
  },
});

export const { setGoogleAuthData, setSessionUserData } = loginSlice.actions;
export const getGoogleAuthData = state => state.googleAuth.authData;
export default loginSlice.reducer;
