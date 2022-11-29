import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return;
  }

  try {
    const { keyword, page } = req.query;
    if (!keyword) {
      throw new Error('keyword is required');
    }
    const configurations = {
      params: { query: keyword, start: page },
      headers: {
        'X-Naver-Client-Id': process.env.NEXT_PUBLIC_NAVER_CLIENT_ID as string,
        'X-Naver-Client-Secret': process.env.NEXT_PUBLIC_NAVER_SECRET as string,
      },
    };
    const response = await axios.get('https://openapi.naver.com/v1/search/book.json', configurations);
    console.log('SERVER 도서검색결과 API : ', response);
    res.status(200).json({ result: response.data });
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ error: error.message });
    }
  }
}
