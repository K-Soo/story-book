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

export type BookDetailInfo = {
  author: string;
  description: string;
  discount: string;
  image: string;
  isbn: string;
  link: string;
  pubdate: string;
  publisher: string;
  title: string;
};

export type TAuthor = {
  _id: TDocumentId;
  name: string;
  image: string;
  email: string | null;
  emailVerified: string | null;
};
export interface IPostCardTypes {
  _id: TDocumentId;
  author: TAuthor;
  comments: string[];
  content: string;
  createdAt: string;
  title: string;
  updateAt: string;
  views: number;
  status: number;
}
export interface IBookStoryPostDetailResponse {
  result: IPostCardTypes;
  status: number;
}

export type BookStoryFormValue = {
  title: string;
  content: string;
};

export interface INaverBookSearchResponse {
  items: BookDetailInfo[];
  lastBuildDate: string;
  display: number;
  start: number;
  total: number;
}

// export interface IPostCardTypes extends Omit<IBookStoryPostDetailResponse, 'status'> {}
