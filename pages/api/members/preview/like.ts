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

  const findDocs = await BookStoryLike.find({ userId: session?.user?.id }).populate('postId');
  console.log('findDocs: ', findDocs);
  await db.disconnect();

  res.status(200).json({ status: 200 });
});

export default handler;
