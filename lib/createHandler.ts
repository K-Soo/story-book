import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect, { Middleware } from 'next-connect';
import { throwError } from 'lib';
import { authOptions } from 'pages/api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth/next';

export const privateHandler = nextConnect<NextApiRequest, NextApiResponse>({
  onError(error, _req, res) {
    if (error.status === 500) {
      res.status(error.status).end();
    }
    res.status(error.status).json({ message: error.message, status: error.status });
  },
  onNoMatch(req, res) {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  },
}).use(async (req, res, next) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  console.log('session: ', session);
  if (!session) {
    throwError({ status: 401 });
  }
  if (session) {
    // req.body._id = session?.id as string;
  }
  next();
});

export const publicHandler = nextConnect<NextApiRequest, NextApiResponse>({
  onError(error, _req, res) {
    console.log('onError: message', error.message);
    console.log('onError: status ', error.status);
    if (error.status === 500) {
      res.status(error.status).end();
    }
    if (error.status) {
      res.status(error.status).json({ message: error.message, status: error.status });
    }
    res.status(500).json({ message: error.message, status: 500 });
  },
  onNoMatch(req, res) {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  },
}).use(async (req, res, next) => {
  next();
});
