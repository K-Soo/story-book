import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

export interface IBookStoryPostState {
  form: {
    [index: string]: string;
    title: string;
  };
}

const initialState: IBookStoryPostState = {
  form: {
    title: '',
  },
};

type TTYpe = keyof typeof initialState.form;

export const bookStoryPostSlice = createSlice({
  name: 'bookStoryPost',
  initialState,
  reducers: {
    setForm: (state: Draft<typeof initialState>, action) => {
      const { target } = action.payload;
      state.form[target.name] = target.value;
    },
  },
});

export const getBookStoryPostState = (state: { bookStoryPost: IBookStoryPostState }) => state.bookStoryPost;

export const { setForm } = bookStoryPostSlice.actions;

export default bookStoryPostSlice.reducer;
