import BookStoryLike from 'models/BookStoryLike';
import Library from 'models/Library';
import { middleware } from 'lib/nextConnect';
import { throwError } from 'lib';
import db from 'lib/db';
import nextConnect from 'next-connect';
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions, TSessionTypes } from 'pages/api/auth/[...nextauth]';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Schema } from 'mongoose';

const handler = nextConnect(middleware.options);

handler.use(middleware.authentication).put(async (req: NextApiRequest, res: NextApiResponse) => {
  await db.connect();

  const findDocs = await Library.findOne({ user: req.body._id });
  if (!findDocs) {
    const library = new Library({
      user: req.body._id,
      wishBooks: [req.body.form],
    });
    library.save();
    return res.status(200).json({ status: 200, result: library });
  }

  const existElem = await Library.findOne({
    user: req.body._id,
    wishBooks: {
      $elemMatch: { isbn: req.body.form.isbn },
    },
  });
  if (existElem) {
    await Library.findOneAndUpdate(
      { user: req.body._id },
      {
        $pull: {
          wishBooks: { isbn: req.body.form.isbn },
        },
      },
      { new: true }
    );
    return res.status(200).json({ status: 200 });
  } else {
    await Library.findOneAndUpdate(
      { user: req.body._id },
      {
        $push: {
          wishBooks: req.body.form,
        },
      },
      { new: true }
    );
    res.status(200).json({ status: 200 });
  }

  await db.disconnect();
});

export default handler;
