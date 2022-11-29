import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

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
  },
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
  put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
  delete: (url: string) => instance.delete(url).then(responseBody),
};

export const Get = {
  getSearchKeyword: ({ keyword, page }: { keyword: string; page: number }): Promise<any> => {
    return requests.get(`/api/search?keyword=${keyword}&page=${page}`);
  },
  getBookDetail: (isbn: string): Promise<any> => {
    console.log('isbn: ', isbn);
    return requests.get(`/api/books?isbn=${isbn}`);
  },
  getBookStoryList: ({ page }: { page: number }): Promise<any> => requests.get(`/api/book-story?page=${page}`),
};

export const Post = {
  // 회원가입 하기
  createUser: (body: any): Promise<any> => requests.post('/api/auth/sign-up', body),
  // 북스토리 글 쓰기
  createWriteBookStory: (body: any): Promise<any> => requests.post('/api/book-story/write', body),
};

export const Put = {
  // updateBasket: (body: any) => requests.put('/api/users/basket', body),
};

export const Delete = {
  // deleteBasket: (user: string, id: string) => requests.delete(`/api/users/basket/${user}/${id}`,),
};
