import { combineReducers, AnyAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import userSlice, { IUserState } from './userSlice';
import searchSlice, { ISearchState } from './searchSlice';
import bookStoryPostSlice, { IBookStoryPostState } from './bookStoryPostSlice';
import layoutSlice, { ILayoutState } from './layoutSlice';

export interface IState {
  user: IUserState;
  search: ISearchState;
  bookStoryPost: IBookStoryPostState;
  layout: ILayoutState;
}

const rootReducer = (state: IState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        user: userSlice,
        search: searchSlice,
        bookStoryPost: bookStoryPostSlice,
        layout: layoutSlice,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
