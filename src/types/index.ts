import React from 'react';

export type TDocumentId = {
  _id: string;
};

export interface IBookDetailInfo {
  author: string;
  description: string;
  image: string;
  isbn: string;
  link: string;
  pubdate: string;
  publisher: string;
  title: string;
  discount: string;
}

export type TAuthor = {
  _id: TDocumentId;
  email: string | null;
  emailVerified: null;
  image?: string;
  name: string;
};

export interface IPostCardTypes {
  _id: TDocumentId;
  author: TAuthor;
  comments: string[];
  content: string;
  createAt: string;
  title: string;
  updateAt: string;
  views: number;
}
