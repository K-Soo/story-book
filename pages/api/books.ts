import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import Library from 'models/Library';
import { xml2json } from 'xml-js';
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions, TSessionTypes } from 'pages/api/auth/[...nextauth]';
import { throwError } from 'lib';

const configurations = {
  headers: {
    'X-Naver-Client-Id': process.env.NEXT_PUBLIC_NAVER_CLIENT_ID as string,
    'X-Naver-Client-Secret': process.env.NEXT_PUBLIC_NAVER_SECRET as string,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return;
  const { isbn } = req.query;
  if (!isbn) {
    throw new Error('keyword is required');
  }
  try {
    const response = await axios.get(
      `https://openapi.naver.com/v1/search/book_adv.xml?d_isbn=${isbn}&display=1&start=1`,
      configurations
    );
    if (response.status !== 200) {
      throw new Error('');
    }
    const xmTojson = xml2json(response.data);
    const parseJson = JSON.parse(xmTojson);

    const session: TSessionTypes | null = await unstable_getServerSession(req, res, authOptions);

    if (!session) {
      return res.status(200).json({ code: 200, result: parseJson });
    }

    const existElemWish = await Library.findOne({
      user: session.user?.id,
      wishBooks: {
        $elemMatch: { isbn: isbn },
      },
    });

    const existElemRead = await Library.findOne({
      user: session.user?.id,
      readBooks: {
        $elemMatch: { isbn: isbn },
      },
    });

    return res
      .status(200)
      .json({ code: 200, result: parseJson, wishBook: existElemWish ? 1 : 0, readBook: existElemRead ? 1 : 0 });
  } catch (error) {
    throwError({ status: 404 });
  }
}
