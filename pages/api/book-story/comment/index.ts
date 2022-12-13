import type { NextApiRequest, NextApiResponse } from 'next';
import BookStoryComment, { IBookStoryComment } from 'models/BookStoryComment';
import { options, middleware } from 'lib/nextConnect';
import { throwError } from 'lib';
import db from 'lib/db';
import nextConnect from 'next-connect';
import { HydratedDocument, PaginateModel } from 'mongoose';
import Joi from 'joi';
import mongoose from 'mongoose';
import { IPageInfo } from '@types';

const postSchema = {
  postId: Joi.string().required(),
};

const schema = Joi.object({
  ...postSchema,
  _id: Joi.string().required(),
  content: Joi.string().required(),
});

const handler = nextConnect(middleware.options);

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  await db.connect();
  const page = Number(req.query.page || 1);
  const limit = Number(req.query.limit || 3);
  const { error } = Joi.object(postSchema).validate(req.query);
  if (error) {
    throwError({ status: 422, message: error.message });
  }

  const _id = mongoose.Types.ObjectId.createFromHexString(req.query.postId as string);
  const totalDoc = await BookStoryComment.find({ post: _id }).countDocuments({});
  console.log('totalDoc: ', totalDoc);

  const items = await BookStoryComment.find({ post: _id })
    .sort({ createdAt: -1 })
    .skip(limit * (page - 1))
    .limit(limit)
    .populate('author');

  console.log('items: ', items);
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

  res.status(200).json({
    status: 200,
    result: {
      pageInfo,
      items,
    },
  });
});

handler.use(middleware.authentication).post(async (req: NextApiRequest, res: NextApiResponse) => {
  await db.connect();
  const { error } = schema.validate(req.body);
  if (error) {
    throwError({ status: 422, message: error.message });
  }
  const bookStoryComment: HydratedDocument<IBookStoryComment> = new BookStoryComment({
    post: req.body.postId,
    author: req.body._id,
    content: req.body.content,
  });
  await bookStoryComment.save();
  await db.disconnect();
  res.status(200).json({ status: 200 });
});

export default handler;
