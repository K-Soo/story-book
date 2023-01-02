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
  if (!req.query) {
    throwError({ status: 404 });
  }
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
    throwError({ status: 404 });
  } else {
    const resultUpdate = await Library.findOneAndUpdate(
      { user: req.body._id },
      {
        $push: {
          wishBooks: req.body.form,
        },
      },
      { new: true }
    );
  }

  // console.log('resultUpdate: ', resultUpdate);

  // await Library.update(
  //     { _id: person._id },
  //     { $push: { friends: friend } },
  //     done
  // );

  // var newdoc = findDocs.wishBooks.push(req.body.form);
  // console.log('newdoc: ', newdoc);

  res.status(200).json({ status: 200, result: 200 });

  await db.disconnect();
});

export default handler;
