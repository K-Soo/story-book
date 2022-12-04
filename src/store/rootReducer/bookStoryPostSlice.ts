import { createAsyncThunk, createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { Get } from '@api';
import { BookDetailInfo } from '@types';
export interface IBookStoryPostState {
  status: 'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR';
  currentRequestId: undefined | string;
  form: {
    [index: string]: string;
    title: string;
    content: string;
    bookInfo: string;
  };
  bookInfo: BookDetailInfo | undefined;
}

const initialState: IBookStoryPostState = {
  status: 'IDLE',
  currentRequestId: undefined,
  form: {
    title: '',
    content: '',
    bookInfo: '',
  },
  bookInfo: undefined,
};

const asyncGetFetchPost = createAsyncThunk(
  'bookStoryPost/asyncGetFetchPost',
  async (idx: string, { getState, requestId }) => {
    // prettier-ignore
    // (같은 요청이 진행 중일 경우 취소, loading state 포함)
    const { bookStoryPost: { status,currentRequestId } } = getState() as { bookStoryPost: IBookStoryPostState };
    if (status === 'IDLE' || requestId === currentRequestId) {
      return;
    }

    const response = await Get.getBookStoryPostDetail({ id: idx });
    return response.result;
  },
  {
    // 비동기 로직 실행 전에 취소하거나, 실행 도중에 취소할 수 있다.
    condition: (_, { getState, extra }) => {
      // const { bookStoryPost } = getState() as { bookStoryPost: IBookStoryPostState };
      // if (bookStoryPost.status === 'SUCCESS') {
      //   return false;
      // }
      return true;
    },
    // thunk가 취소되더라도 rejected 액션이 디스패치되길 원한다면
    dispatchConditionRejection: true,
  }
);

export const bookStoryPostSlice = createSlice({
  name: 'bookStoryPost',
  initialState,
  reducers: {
    setForm: (state, action) => {
      const { target } = action.payload;
      state.form[target.name] = target.value;
    },
    setData: (state, action) => {
      state.form[action.payload.name] = action.payload.value;
    },
    setBookDetailInfo: (state, action) => {
      state.bookInfo = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(asyncGetFetchPost.pending, state => {
      state.status = 'LOADING';
    });
    builder.addCase(asyncGetFetchPost.fulfilled, (state, action) => {
      if (action.payload) {
        state.form.title = action.payload.title;
        state.form.content = action.payload.content;
        state.currentRequestId = action.meta.requestId;
        state.status = 'SUCCESS';
      }
    });
    builder.addCase(asyncGetFetchPost.rejected, state => {
      state.status = 'ERROR';
    });
  },
});

export const getBookStoryPostState = (state: { bookStoryPost: IBookStoryPostState }) => state.bookStoryPost;

export const { setForm, setData, setBookDetailInfo } = bookStoryPostSlice.actions;
export { asyncGetFetchPost };

export default bookStoryPostSlice.reducer;
