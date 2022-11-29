import React from 'react';
import styled from 'styled-components';

interface ICustomModal {}

export default function CustomModal({}: ICustomModal) {
  return <S.CustomModal>CustomModal</S.CustomModal>;
}

const S = {
  CustomModal: styled.div``,
};
