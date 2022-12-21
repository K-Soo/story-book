import type { NextApiRequest, NextApiResponse } from 'next';
import BookStoryPost from 'models/BookStoryPost';
import BookStoryLike from 'models/BookStoryLike';
import { middleware } from 'lib/nextConnect';
import { throwError } from 'lib';
import mongoose from 'mongoose';
import db from 'lib/db';
import nextConnect from 'next-connect';
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions, TSessionTypes } from 'pages/api/auth/[...nextauth]';

const handler = nextConnect(middleware.options);

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.query) {
    throwError({ status: 404 });
  }

  await db.connect();
  const query = Array.isArray(req.query) ? req.query[0] : req.query;
  const _id = mongoose.Types.ObjectId.createFromHexString(query.idx);

  const session: TSessionTypes | null = await unstable_getServerSession(req, res, authOptions);
  console.log('session: ', session);

  const bookStoryPost = await BookStoryPost.findById(_id).populate('author').lean();
  const bookStoryLikeCount = await BookStoryLike.find({ postId: _id }).then(docs => {
    if (!session) {
      return { isLike: 'NO', likeCount: docs.length };
    }
    const findUser = docs.find(el => el.userId.toString() === session.user?.id);
    if (findUser) {
      return { isLike: 'YES', likeCount: docs.length };
    }
    return { isLike: 'NO', likeCount: docs.length };
  });

  await db.disconnect();

  res.status(200).json({
    status: 200,
    result: { likeCount: bookStoryLikeCount.likeCount, isLike: bookStoryLikeCount.isLike, ...bookStoryPost },
  });
});

export default handler;
