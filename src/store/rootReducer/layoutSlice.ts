import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

export interface ILayoutState {
  isShowFooter: boolean;
}

const initialState: ILayoutState = {
  isShowFooter: true,
};

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setVisibilityFooter: (state: Draft<typeof initialState>, action: PayloadAction<typeof initialState.isShowFooter>) => {
      state.isShowFooter = action.payload;
    },
  },
});

export const getLayoutState = (state: { layout: ILayoutState }) => state.layout;

export const { setVisibilityFooter } = layoutSlice.actions;

export default layoutSlice.reducer;
