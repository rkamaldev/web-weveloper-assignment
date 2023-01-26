import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userMetaData: {},
  userData: {},
};

export const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserMetaData(state, action) {
      state.userMetaData = action.payload;
    },
    setUserData(state, action) {
      state.userData = action.payload;
    },
  },
});

export const { setUserMetaData, setUserData } = userSlice.actions;
export const getUserMetaData = state => state.userData.userMetaData;
export const getUserData = state => state.userData.userData;
export default userSlice.reducer;
