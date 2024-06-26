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
  wishBook?: number;
  readBook?: number;
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

export type TIsLikeTypes = 'YES' | 'NO';

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
  isLike: TIsLikeTypes;
  likeCount: number;
  bookInfo: BookDetailInfo;
}
export interface IBookStoryPostDetailResponse {
  result: IPostCardTypes;
  status: number;
}

export type BookStoryFormValue = {
  title: string;
  content: string;
  rate: number;
};

export interface INaverBookSearchResponse {
  items: BookDetailInfo[];
  lastBuildDate: string;
  display: number;
  start: number;
  total: number;
}

export interface IPageInfo {
  totalPage: number;
  totalDoc: number;
  prev: number | null;
  next: number | null;
}

export interface IBookStoryCommentRequest {
  postId: TDocumentId;
  content: string;
}

export interface ILibraryTypes {
  readBooks: IBookDetailInfo[];
  wishBooks: IBookDetailInfo[];
}
export interface ILibraryResponseTypes {
  result: {
    readBooks: IBookDetailInfo[];
    wishBooks: IBookDetailInfo[];
    wishBooksCount?: number;
    readBooksCount?: number;
  };
  status: number;
}

// export interface IPostCardTypes extends Omit<IBookStoryPostDetailResponse, 'status'> {}
