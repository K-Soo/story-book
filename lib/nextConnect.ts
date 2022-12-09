import { NextApiRequest, NextApiResponse } from 'next';
import { Options } from 'next-connect';

enum KeyName {
  private = 'private',
  Public = 'public',
}

type INextConnectOptions = Record<KeyName, Options<NextApiRequest, NextApiResponse>>;

export const options: INextConnectOptions = {
  private: {
    onError(error, _req, res) {
      if (error.status === 500) {
        res.status(error.status).end();
      }
      res.status(error.status).json({ message: error.message, status: error.status });
    },
    onNoMatch(req, res) {
      res.status(405).end(`Method ${req.method} Not Allowed`);
    },
  },
  public: {
    onError(error, req, res) {
      if (error.status === 500) {
        res.status(error.status).end();
      }
      if (error.status) {
        res.status(error.status).json({ message: error.message, status: error.status });
      }
      res.status(500).json({ message: error.message + req.url, status: 500 });
    },
    onNoMatch(req, res) {
      res.status(405).end(`Method ${req.method} Not Allowed`);
    },
  },
};

export const use = {};
