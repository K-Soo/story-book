import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

export interface IBookStoryPostState {
  form: {
    [index: string]: string;
    title: string;
    content: string;
    bookInfo: string;
  };
}

const initialState: IBookStoryPostState = {
  form: {
    title: '',
    content: '',
    bookInfo: '',
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
    setData: (state: Draft<typeof initialState>, action) => {
      console.log('action: ', action);
      state.form[action.payload.name] = action.payload.value;
    },
  },
});

export const getBookStoryPostState = (state: { bookStoryPost: IBookStoryPostState }) => state.bookStoryPost;

export const { setForm, setData } = bookStoryPostSlice.actions;

export default bookStoryPostSlice.reducer;
