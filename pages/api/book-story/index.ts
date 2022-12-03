import type { NextApiRequest, NextApiResponse } from 'next';
import BookStoryPost from 'models/BookStoryPost';
import { publicHandler } from 'lib/createHandler';
import db from 'lib/db';
import { notInitialized } from 'react-redux/es/utils/useSyncExternalStore';

interface IPageInfo {
  totalPage: number;
  totalDoc: number;
  prev: number | null;
  next: number | null;
}

export default publicHandler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const page = Number(req.query.page || 1); // 값이 없다면 기본값으로 1 사용
  const limit = 10;
  await db.connect();
  const totalDoc = await BookStoryPost.countDocuments({});
  const items = await BookStoryPost.find()
    .sort({ createdAt: -1 })
    .skip(limit * (page - 1))
    .limit(limit)
    .populate('author');

  const totalPage = Math.ceil(totalDoc / limit); // 만약 전체 게시글 99개고 perPage가 10개면 값은 9.9 그래서 총 페이지수는 10개가 되어야 한다. 그래서 올림을 해준다.

  const pageInfo: IPageInfo = {
    totalPage,
    totalDoc,
    prev: null,
    next: null,
  };
  const endIndex = page * limit;
  const startIndex = (page - 1) * limit;

  if (endIndex < totalDoc) {
    pageInfo.next = page + 1;
  }
  if (endIndex >= totalDoc) {
    pageInfo.next = null;
  }
  if (startIndex !== 0) {
    pageInfo.prev = page - 1;
  }
  if (startIndex <= 0) {
    pageInfo.prev = null;
  }

  const responseData = {
    result: {
      pageInfo,
      items,
    },
    status: 200,
  };

  res.status(200).json(responseData);
});
