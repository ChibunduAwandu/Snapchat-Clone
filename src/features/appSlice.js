import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';

// const initialState = {
//   value: 0,
//   status: 'idle',
// };


export const incrementAsync = createAsyncThunk(
  '/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);

    return response.data;
  }
);

export const appSlice = createSlice({
  name: 'app',
  initialState:{
    value :0
  },

  reducers: {

    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      });
  },
});

export const {incrementByAmount } = appSlice.actions;


export const selectapp = (state) => state.app.value;




export default appSlice.reducer;
