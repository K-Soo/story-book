import { useRouter } from 'next/router';

/**
 * @description 권한이 없는 페이지에대해 로그인페이지로 이동 후 로그인 완료시 queryString값으로 리다이렉트 시킨다
 */

const MAIN = '/';

export default function useReturnTo() {
  const { query } = useRouter();

  if (query?.returnTo === undefined) {
    return { prevPath: MAIN };
  }
  return { prevPath: query.returnTo as string };
}
