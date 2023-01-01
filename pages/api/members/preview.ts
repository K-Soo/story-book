import BookStoryLike from 'models/BookStoryLike';
import { middleware } from 'lib/nextConnect';
import { throwError } from 'lib';
import db from 'lib/db';
import nextConnect from 'next-connect';
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions, TSessionTypes } from 'pages/api/auth/[...nextauth]';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = nextConnect(middleware.options);

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  await db.connect();
  const session: TSessionTypes | null = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    throwError({ status: 401 });
  }
  if (!req.query) {
    throwError({ status: 404 });
  }
  const findDocs = await BookStoryLike.find({ userId: session?.user?.id })
    .sort({ createdAt: -1 })
    .skip(0)
    .limit(4)
    .select({ postId: 1, _id: 0, createdAt: 1 })
    .populate('postId');

  await db.disconnect();
  res.status(200).json({ status: 200, result: findDocs });
});

export default handler;
