import { createSlice } from '@reduxjs/toolkit';

import { KEY } from 'src/@constants';

const initialState = {
  themeType: KEY.themeType.light,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeThemeType: (state, action) => {
      state.themeType = action.payload;
    },
  },
});

export const { changeThemeType } = themeSlice.actions;
export default themeSlice.reducer;
