import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { IBookStoryPostDetailResponse, INaverBookSearchResponse,IBookDetailInfo, IBookStoryCommentRequest,TDocumentId } from '@types';

const config: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  withCredentials: true,
};

const instance = axios.create(config);

instance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
  put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
  delete: (url: string) => instance.delete(url).then(responseBody),
};

export const Get = {
  // 네이버 도서 검색
  getSearchKeyword: ({ keyword, page }: { keyword: string; page: number }): Promise<INaverBookSearchResponse> => requests.get(`/api/search?keyword=${keyword}&page=${page}`),
  // 네이버 도서 상세
  getBookDetail: (isbn: string): Promise<object> => requests.get(`/api/books?isbn=${isbn}`),
  // 북스토리 리스트
  getBookStoryList: ({ page ,sort}: { page: number, sort:string }): Promise<any> => requests.get(`/api/book-story?page=${page}&sort=${sort}`),
  // 북스토리 상세 글
  getBookStoryPostDetail: ({ id }: { id: string }): Promise<IBookStoryPostDetailResponse> => requests.get(`/api/book-story/posts/${id}`),
  // 북스토리 댓글 리스트
  getBookStoryCommentList: ({ postId, page }: { postId:TDocumentId, page:string }): Promise<any> => requests.get(`/api/book-story/comment?postId=${postId}&page=${page}`),
  // 유저 like 4
  getMemberPreviewLikes: ({ type }: { type: string }): Promise<any> => requests.get(`/api/members/preview?type=${type}`),
};

export const Post = {
  // 회원가입 하기
  createUser: (body: any): Promise<any> => requests.post('/api/auth/sign-up', body),
  // 북스토리 글 쓰기
  createWriteBookStory: (body: any): Promise<{status:number,result:string}> => requests.post('/api/book-story/write', body),
  // 글 좋아요
  createLikeBookStory: (body: {postId:TDocumentId}): Promise<{status:number}> => requests.post('/api/book-story/like', body),
  // 북스토리 댓글 생성
  createCommentBookStory: (body: IBookStoryCommentRequest): Promise<{status:number}> => requests.post('/api/book-story/comment', body),
};

export const Put = {
  // 읽고싶은책
  updateWishBook: (body: {form:IBookDetailInfo}): Promise<{status:number}> => requests.put('/api/members/library/wish', body),
  // 읽고있는 책
  updateReadBook: (body: {form:IBookDetailInfo}): Promise<{status:number}> => requests.put('/api/members/library/read', body),
};

export const Delete = {
  deleteBookStoryCommentItem: ({ postId }: { postId:TDocumentId }): Promise<{status:number}> => requests.get(`/api/book-story/comment?postId=${postId}`),
};
