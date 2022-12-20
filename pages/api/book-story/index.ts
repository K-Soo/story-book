import { PaginateModel } from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import BookStoryPost, { IBookStoryPostDocument } from 'models/BookStoryPost';
import { publicHandler } from 'lib/createHandler';
import db from 'lib/db';
import { notInitialized } from 'react-redux/es/utils/useSyncExternalStore';
import { IPageInfo } from '@types';

export default publicHandler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('@@@@@@@@@@@@@@: ', req.query.page);
  const page = Number(req.query.page || 1);
  const limit = Number(req.query.limit || 10);
  await db.connect();
  const totalDoc = await BookStoryPost.countDocuments({});

  const items = await BookStoryPost.find()
    .sort({ createdAt: -1 })
    .skip(limit * (page - 1))
    .limit(limit)
    .populate('author');

  const totalPage = Math.ceil(totalDoc / limit);

  const options = {
    page: 1,
    limit: 10,
  };

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
  await db.disconnect();
  res.status(200).json(responseData);
});
