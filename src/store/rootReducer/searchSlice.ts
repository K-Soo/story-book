import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

export interface ISearchState {
  keyword: string;
  isOpenSearchForm: boolean;
}

const initialState: ISearchState = {
  keyword: '',
  isOpenSearchForm: false,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setKeyword: (state: Draft<typeof initialState>, action: PayloadAction<typeof initialState.keyword>) => {
      state.keyword = action.payload;
    },
    setToggleSearchForm: (state: Draft<typeof initialState>, action: PayloadAction<typeof initialState.isOpenSearchForm>) => {
      if (action.payload) {
        state.keyword = '';
        state.isOpenSearchForm = true;
      }
      if (!action.payload) {
        state.isOpenSearchForm = false;
      }
    },
  },
});

export const getSearchState = (state: { search: ISearchState }) => state.search;

export const { setKeyword, setToggleSearchForm } = searchSlice.actions;

export default searchSlice.reducer;
