const initialState = {
  userData: [],
  apiError: null,
};

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('users', async () => {
  const data = await (await fetch(`/api/users`)).json();
  return data;
});

export const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserData(state, action) {
      state.userData = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.userData = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.apiError = action.error;
      });
  },
});

export const { setUserData } = userSlice.actions;
export const getUserData = state => state.userData.userData;
