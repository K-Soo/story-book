import type { NextApiRequest, NextApiResponse } from 'next';
import BookStoryPost from 'models/BookStoryPost';
import { publicHandler } from 'lib/createHandler';
import db from 'lib/db';

export default publicHandler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const myCustomLabels = {
    totalDocs: 'totalDocs',
    docs: 'items',
    limit: 'limit',
    page: 'page',
    nextPage: 'next',
    prevPage: 'prev',
    totalPages: 'totalPages',
    pagingCounter: 'pagingCounter',
    meta: 'pageInfo',
  };

  const options = {
    page: 1,
    limit: 10,
    populate: 'author',
    customLabels: myCustomLabels,
  };

  await db.connect();
  // const exist = await BookStoryPost.paginate({}, options);
  const exist = await BookStoryPost.find();

  const responseData = {
    result: exist,
    status: 200,
  };

  res.status(200).json(responseData);
});
