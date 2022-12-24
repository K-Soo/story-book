import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';
import axios from 'axios';
import BookStoryPost, { IBookStoryPostDocument } from 'models/BookStoryPost';
import Joi from 'joi';
import { throwError } from 'lib';
import { HydratedDocument } from 'mongoose';
import nextConnect from 'next-connect';
import { options, middleware } from 'lib/nextConnect';

const bookInfoSchema = Joi.object().keys({
  author: Joi.string().required(),
  description: Joi.string().required(),
  discount: Joi.string().required(),
  image: Joi.string().required(),
  isbn: Joi.string().required(),
  link: Joi.string().required(),
  pubdate: Joi.string().required(),
  publisher: Joi.string().required(),
  title: Joi.string().required(),
});

const schema = Joi.object({
  _id: Joi.string().required(),
  title: Joi.string().required(),
  content: Joi.string().required(),
  rate: Joi.number().required(),
  bookInfo: bookInfoSchema,
});

const handler = nextConnect(middleware.options);

// export default privateHandler.post(async (req: NextApiRequest, res: NextApiResponse) => {
//   try {
//     const { error } = schema.validate(req.body);
//     if (error) {
//       throwError({ status: 422, message: error.message });
//     }
//     const bookStoryPost: HydratedDocument<IBookStoryPostDocument> = new BookStoryPost({
//       author: req.body._id,
//       title: req.body.title,
//       content: req.body.content,
//       rate: req.body.rate,
//       bookInfo: req.body.bookInfo,
//     });

//     const postId = await bookStoryPost.save().then(savedDoc => {
//       return savedDoc.id;
//     });

//     res.status(200).json({ status: 200, result: postId });
//   } catch (error) {
//     console.log('캐치 에러: ', error);
//   }
// });

handler.use(middleware.authentication).post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { error } = schema.validate(req.body);
    if (error) {
      throwError({ status: 422, message: error.message });
    }
    const bookStoryPost: HydratedDocument<IBookStoryPostDocument> = new BookStoryPost({
      author: req.body._id,
      title: req.body.title,
      content: req.body.content,
      rate: req.body.rate,
      bookInfo: req.body.bookInfo,
    });

    const postId = await bookStoryPost.save().then(savedDoc => {
      return savedDoc.id;
    });

    res.status(200).json({ status: 200, result: postId });
  } catch (error) {
    console.log('캐치 에러: ', error);
  }
});

export default handler;
