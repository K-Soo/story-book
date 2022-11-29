import React from 'react';
import styled from 'styled-components';
import { BottomSheet, BottomSheetRef } from 'react-spring-bottom-sheet';
import Link from 'next/link';
import HorizontalLine from '@components/common/HorizontalLine';
import { useRouter } from 'next/router';
import 'react-spring-bottom-sheet/dist/style.css';

interface IWriteBottomSheet {
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function WriteBottomSheet({ isOpenModal, setIsOpenModal }: IWriteBottomSheet) {
  const router = useRouter();
  // const sheetRef = React.useRef<BottomSheetRef>(null);

  React.useEffect(() => {
    if (router.pathname) {
      // setIsOpenModal(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRouter = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsOpenModal(false);
    router.push(event.currentTarget.name);
  };

  const onDismiss = () => setIsOpenModal(false);

  return (
    <BottomSheet
      // ref={sheetRef}
      open={isOpenModal}
      onDismiss={onDismiss}
      blocking={false}
      snapPoints={({ minHeight }) => {
        console.log('minHeight: ', minHeight);
        return minHeight;
      }}
    >
      <S.SheetContent>
        <p className='guide-text'>작성하고 싶은 카테고리를 선택해주세요.</p>
        <HorizontalLine height='1px' />
        <ul className='lists'>
          <li className='lists__item'>
            <button name='/community/write' onClick={handleRouter}>
              커뮤니티 글 작성
            </button>
          </li>
          <li className='lists__item'>
            <button name='/book-story/write' onClick={handleRouter}>
              북스토리 글작성
            </button>
          </li>
        </ul>
      </S.SheetContent>
    </BottomSheet>
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
        /* border: 1px solid red; */
        height: 100%;
        a {
          border: 1px solid red;
          height: 100%;
        }
      }
    }
  `,
};
