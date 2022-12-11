import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { TAuthor, IPostCardTypes } from '@types';

interface IProfileSummary {
  summaryInfo: Pick<TAuthor, 'name'> & Pick<IPostCardTypes, 'createdAt'>;
}

export default function ProfileSummary({ summaryInfo }: IProfileSummary) {
  return (
    <S.ProfileSummary>
      <p className='wrapper'>
        <span className='wrapper__name'>{summaryInfo.name}</span>
        <span className='wrapper__date'>{moment(summaryInfo.createdAt).format('YYYY.MM.DD')}</span>
      </p>
    </S.ProfileSummary>
  );
}

const S = {
  ProfileSummary: styled.div`
    margin-bottom: 30px;
    .wrapper {
      &__name {
        color: #000;
        margin-right: 10px;
      }
      &__date {
      }
    }
  `,
};
