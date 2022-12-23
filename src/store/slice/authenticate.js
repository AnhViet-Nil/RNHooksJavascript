import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: false,
};

const authenticateSlice = createSlice({
  name: 'authenticate',
  initialState,
  reducers: {
    changeStatusAuthenticate: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { changeStatusAuthenticate } = authenticateSlice.actions;
export default authenticateSlice.reducer;
