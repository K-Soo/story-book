import Library from 'models/Library';
import { middleware } from 'lib/nextConnect';
import { throwError } from 'lib';
import db from 'lib/db';
import nextConnect from 'next-connect';
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions, TSessionTypes } from 'pages/api/auth/[...nextauth]';
import type { NextApiRequest, NextApiResponse } from 'next';
import Joi from 'joi';

const handler = nextConnect(middleware.options);

const bookStoryQuerySchema = Joi.object({
  type: Joi.string().required(),
});

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  await db.connect();
  const { error } = bookStoryQuerySchema.validate(req.query);
  if (error) {
    throwError({ status: 422, message: error.message });
  }
  const session: TSessionTypes | null = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    throwError({ status: 401 });
  }

  const findDocs = await Library.findOne({ user: session?.user?.id }).select({ wishBooks: 1, readBooks: 1, _id: 0 });
  res.status(200).json({ status: 200, result: findDocs });
  // res.status(404).json({ status: 2002, result: findDocs });

  await db.disconnect();
});

export default handler;
