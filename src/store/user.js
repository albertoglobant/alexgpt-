import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  error: null,
  access_token: '',
  userInfo: {},
};

export const getUserInfo = createAsyncThunk(
  'getUserInfo',
  async (access_token, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            Accept: 'application/json',
          },
        }
      );
      return response.data;
    } catch (e) {
      return rejectWithValue({ error: e.message });
    }
  }
);

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.access_token = action.payload;
    },
  },
  extraReducers: {
    [getUserInfo.pending]: (state, action) => {
      state.loading = true;
    },
    [getUserInfo.fulfilled]: (state, action) => {
      state.userInfo = action.payload;
      state.loading = false;
    },
    [getUserInfo.rejected]: (state, action) => {
      state.error = action.payload.error;
      state.loading = false;
    },
  },
});

export const { setUser } = loginSlice.actions;

export default loginSlice.reducer;
