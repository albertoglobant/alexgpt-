import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUser: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUser } = loginSlice.actions;

export default loginSlice.reducer;
