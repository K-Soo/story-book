export interface IPath {
  [index: string]: {
    path: string;
    label: string;
  };
}

const Path: IPath = {
  MAIN: {
    path: '/',
    label: '메인',
  },
  SIGN_IN: {
    path: '/sign-in',
    label: '로그인',
  },
  SIGN_UP: {
    path: '/sign-up',
    label: '회원가입',
  },
  FIND_ID: {
    path: '/auth/login/find-id',
    label: '아이디 찾기',
  },
  FIND_PASSWORD: {
    path: '/auth/login/find-password',
    label: '비밀번호 찾기',
  },
  REGISTER: {
    path: '/auth/register',
    label: '회원가입',
  },
  BASKET: {
    path: '/order/basket',
    label: '장바구니',
  },
  ORDER_FORM: {
    path: '/order/orderform',
    label: '상품주문',
  },
  AGREEMENT: {
    path: '/shop-info/agreement',
    label: '이용약관',
  },
  PRIVACY: {
    path: '/shop-info/privacy',
    label: '개인정보취급방침',
  },
  ADMIN_MAIN: {
    path: '/admin',
    label: '관리자 메인',
  },
  ORDER: {
    path: '/order/orderform',
    label: '상품주문',
  },
  NOTICE: {
    path: '/board/notice',
    label: '공지사항',
  },
  SEARCH: {
    path: '/product/search?keyword=',
    label: '상품검색',
  },
  REVIEW: {
    path: '/product/review?idx=',
    label: '상품 리뷰',
  },
  HISTORY: {
    path: '/users/history/list',
    label: '주문내역',
  },
  HISTORY_DETAIL: {
    path: '/users/history/details',
    label: '주문상세',
  },
  USER: {
    path: '/member',
    label: '프로필',
  },
  INTEREST: {
    path: '/users/interest-products',
    label: '관심상품',
  },
  USERS_MODIFY: {
    path: '/users/modify',
    label: '회원정보 수정',
  },
  POINT: {
    path: '/users/point',
    label: '적립금',
  },
  ADMIN_NOTICE: {
    path: '/admin/notice',
    label: '공지사항 리스트',
  },
  CREATE_NOTICE: {
    path: '/admin/notice/write',
    label: '공지사항 포스트작성',
  },
} as const;

export default Path;
