import { createSlice } from '@reduxjs/toolkit';

export interface IModalState {
  isOpen: boolean;
  text: string;
}

const initialState: IModalState = {
  isOpen: false,
  text: '로그인 후 이용가능합니다',
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setIsOpenModal: (state, action) => {
      state.isOpen = action.payload.isOpen;
      if (action.payload.text) {
        state.text = action.payload.text;
      }
    },
    setInitModal: state => {
      state.isOpen = initialState.isOpen;
      state.text = initialState.text;
    },
  },
});

export const getModalState = (state: { modal: IModalState }) => state.modal;

export const { setIsOpenModal, setInitModal } = modalSlice.actions;

export default modalSlice.reducer;
