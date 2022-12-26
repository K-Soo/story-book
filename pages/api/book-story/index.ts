import { PaginateModel } from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import BookStoryPost, { IBookStoryPostDocument } from 'models/BookStoryPost';
import db from 'lib/db';
import { IPageInfo } from '@types';
import Joi from 'joi';
import nextConnect from 'next-connect';
import { middleware } from 'lib/nextConnect';
import { throwError } from 'lib';
import BookStoryLike from 'models/BookStoryLike';

const bookStoryQuerySchema = Joi.object({
  page: Joi.string().required(),
  sort: Joi.string().required(),
});

const handler = nextConnect(middleware.options);

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const page = Number(req.query.page || 1);
  const limit = Number(req.query.limit || 10);
  const { error } = bookStoryQuerySchema.validate(req.query);
  if (error) {
    throwError({ status: 422, message: error.message });
  }

  await db.connect();

  const totalDoc = await BookStoryPost.countDocuments({});

  const items = await BookStoryPost.find()
    .sort({ createdAt: req.query.sort === 'DESC' ? -1 : 1 })
    .skip(limit * (page - 1))
    .limit(limit)
    .populate('author')
    .lean()
    .then(async docs => {
      let values = [];

      for (const doc of docs) {
        const counted = await BookStoryLike.countDocuments({ postId: doc._id });
        values.push({ ...doc, likeCount: counted });
      }
      return values;
    });

  const totalPage = Math.ceil(totalDoc / limit);

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

export default handler;
