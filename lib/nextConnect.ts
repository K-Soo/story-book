import { NextApiRequest, NextApiResponse } from 'next';
import { Options } from 'next-connect';
import { authOptions, ICustomSession, TSessionTypes } from 'pages/api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth/next';
import { throwError } from 'lib';
import nextConnect, { Middleware } from 'next-connect';

enum KeyName {
  private = 'private',
}

// type INextConnectOptions = Record<KeyName, Options<NextApiRequest, NextApiResponse>>;

export const options: Options<NextApiRequest, NextApiResponse> = {
  onError(error, _req, res) {
    console.log('onError: ', error);
    if (error.status === 500) {
      res.status(error.status).end();
    }
    if (error.status) {
      res.status(error.status).json({ message: error.message, status: error.status });
    }
    res.status(error.status).json({ message: error.message, status: error.status });
  },
  onNoMatch(req, res) {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  },
};

export const authentication = nextConnect<NextApiRequest, NextApiResponse>().use(async (req, res, next) => {
  const session: TSessionTypes | null = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    throwError({ status: 401 });
  }
  if (session) {
    req.body._id = session.user?.id;
  }
  next();
});

export const middleware = { authentication, options };
