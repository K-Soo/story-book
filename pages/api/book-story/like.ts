import type { NextApiRequest, NextApiResponse } from 'next';
import BookStoryLike, { IBookStoryLike } from 'models/BookStoryLike';
import { middleware } from 'lib/nextConnect';
import { throwError } from 'lib';
import db from 'lib/db';
import nextConnect from 'next-connect';
import { HydratedDocument, PaginateModel } from 'mongoose';
import Joi from 'joi';

const likeSchema = Joi.object({
  postId: Joi.string().required(),
  _id: Joi.string().required(),
});

const handler = nextConnect(middleware.options);

handler.use(middleware.authentication).post(async (req: NextApiRequest, res: NextApiResponse) => {
  await db.connect();
  const { error } = likeSchema.validate(req.body);
  if (error) {
    throwError({ status: 422, message: error.message });
  }

  const exist = await BookStoryLike.findOneAndDelete({ userId: req.body._id, postId: req.body.postId });
  if (!exist) {
    const bookStoryLike: HydratedDocument<IBookStoryLike> = new BookStoryLike({
      postId: req.body.postId,
      userId: req.body._id,
    });
    await bookStoryLike.save();
  }
  await db.disconnect();
  res.status(200).json({ status: 200 });
});

export default handler;
