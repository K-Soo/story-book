import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { xml2json } from 'xml-js';

const configurations = {
  headers: {
    'X-Naver-Client-Id': process.env.NEXT_PUBLIC_NAVER_CLIENT_ID as string,
    'X-Naver-Client-Secret': process.env.NEXT_PUBLIC_NAVER_SECRET as string,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { isbn } = req.query;

    if (!isbn) {
      throw new Error('keyword is required');
    }
    try {
      const response = await axios.get(`https://openapi.naver.com/v1/search/book_adv.xml?d_isbn=${isbn}&display=1&start=1`, configurations);
      if (response.status !== 200) {
        throw new Error('');
      }
      const xmTojson = xml2json(response.data);
      res.status(200).json({ code: 200, result: JSON.parse(xmTojson) });
    } catch (error) {
      console.log('error: ', error);
    }
  }
}
