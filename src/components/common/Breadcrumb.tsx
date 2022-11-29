import React from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';

interface IBreadcrumb {
  className?: string;
  children: React.ReactNode;
}

function Breadcrumb(props: IBreadcrumb) {
  const BreadcrumbItem = ({ children }: IBreadcrumb) => <li className='breadcrumb-item'>{children}</li>;

  let children: any[] = React.Children.toArray(props.children);

  children = children.map((child, index) => <BreadcrumbItem key={`breadcrumb_item${index}`}>{child}</BreadcrumbItem>);

  const lastIndex = children.length - 1;

  children = children.reduce((acc, child, index) => {
    const notLast = index < lastIndex;
    if (notLast) {
      acc.push(child, <span>&gt;</span>);
    } else {
      acc.push(child);
    }
    return acc;
  }, []);

  return (
    <S.Breadcrumb className={props.className}>
      <S.BreadcrumbLists>{children}</S.BreadcrumbLists>
    </S.Breadcrumb>
  );
}

const S = {
  Breadcrumb: styled.nav`
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    ${({ theme }) => theme.mobile`
      display: none;
    `};
  `,
  BreadcrumbLists: styled.ol`
    display: flex;
    font-size: 14px;
    span {
      padding: 0 5px;
    }
    li {
      a {
        display: inline-block;
      }
      &:last-child {
        font-weight: 600;
        color: #000;
      }
    }
  `,
};

export default dynamic(() => Promise.resolve(Breadcrumb), {
  ssr: false,
});
