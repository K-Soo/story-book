import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';
import axios from 'axios';
import BookStoryPost from 'models/BookStoryPost';
import { privateHandler } from 'lib/createHandler';
import Joi from 'joi';
import { throwError } from 'lib';

const schema = Joi.object({
  _id: Joi.string().required(),
  title: Joi.string().required(),
  content: Joi.string().required(),
});

export default privateHandler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const { error } = schema.validate(req.body);
  if (error) {
    throwError({ status: 422, message: error.message });
  }

  const bookStoryPost = new BookStoryPost({
    author: req.body._id,
    title: req.body.title,
    content: req.body.content,
  });

  await bookStoryPost.save();

  res.status(200).json({ status: 200 });
});
