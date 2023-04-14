import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';

// const initialState = {
//   value: 0,
//   status: 'idle',
// };

export const incrementAsync = createAsyncThunk(
    'camera/fetchCount',
    async (amount) => {
      const response = await fetchCount(amount);
  
      return response.data;
    }
  );


export const cameraSlice = createSlice({
  name: 'camera',
  initialState:{
    cameraImage: null,
  },

  reducers: {

    setCameraImage: (state, action) => {
        state.cameraImage = action.payload;
    },
    resetCameraImage: (state) => {
        state.cameraImage = null;

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

export const {setCameraImage, resetCameraImage } = cameraSlice.actions;


export const selectCameraImage = (state) => state.camera.cameraImage;




export default cameraSlice.reducer;
