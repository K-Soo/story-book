import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from '../../auth/[...nextauth]';
import axios from 'axios';
import BookStoryPost from 'models/BookStoryPost';
import { publicHandler } from 'lib/createHandler';
import Joi from 'joi';
import { throwError } from 'lib';
import mongoose from 'mongoose';
import db from 'lib/db';

export default publicHandler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.query) {
    throwError({ status: 404 });
  }
  await db.connect();
  const query = Array.isArray(req.query) ? req.query[0] : req.query;
  const _id = mongoose.Types.ObjectId.createFromHexString(query.idx);

  const bookStoryPost = await BookStoryPost.findById(_id).populate('author');
  await db.disconnect();

  res.status(200).json({ status: 200, result: bookStoryPost, url: req.url });
});