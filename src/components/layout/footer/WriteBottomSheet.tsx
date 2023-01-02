import React from 'react';
import styled from 'styled-components';
import { BottomSheet } from 'react-spring-bottom-sheet';
import HorizontalLine from '@components/common/HorizontalLine';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { setIsOpenModal as setIsOpenLoginModal } from '@slice/modalSlice';
import CustomModal from '@components/common/CustomModal';
import { useAppDispatch, useAppSelector } from '@store';
import 'react-spring-bottom-sheet/dist/style.css';
interface IWriteBottomSheet {
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function WriteBottomSheet({ isOpenModal, setIsOpenModal }: IWriteBottomSheet) {
  const router = useRouter();
  const { data } = useSession();
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector(state => state.modal);

  React.useEffect(() => {}, []);

  const handleRouter = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!data) {
      return dispatch(setIsOpenLoginModal({ isOpen: true }));
    }
    if (data) {
      setIsOpenModal(false);
      router.push(event.currentTarget.name);
    }
  };

  const onDismiss = () => setIsOpenModal(false);

  return (
    <>
      {isOpen && <CustomModal />}
      <BottomSheet
        open={isOpenModal}
        onDismiss={onDismiss}
        blocking={false}
        snapPoints={({ minHeight }) => {
          return minHeight;
        }}
      >
        <S.SheetContent>
          <p className='guide-text'>작성하고 싶은 카테고리를 선택해주세요.</p>
          <HorizontalLine height='1px' />
          <ul className='lists'>
            <li className='lists__item'>
              <button name='/book-story/write' onClick={handleRouter}>
                북스토리 글작성
              </button>
            </li>
          </ul>
        </S.SheetContent>
      </BottomSheet>
    </>
  );
}

const S = {
  SheetContent: styled.div`
    height: 150px;
    padding: 0 15px;
    .guide-text {
      margin: 15px 0;
      text-align: center;
      font-size: 14px;
      font-weight: 600;
      color: #000;
    }
    .lists {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      height: 40px;
      &__item {
        height: 100%;
        a {
          border: 1px solid red;
          height: 100%;
        }
      }
    }
  `,
};
