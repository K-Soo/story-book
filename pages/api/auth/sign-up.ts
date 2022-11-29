import type { NextApiRequest, NextApiResponse } from 'next';
import db from 'lib/db';
import User from 'models/User';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return;

  const data = req.body;

  try {
    await db.connect();
    const exist = await User.findOne({ email: data.email });
    if (exist) throw new Error('이미 가입된 회원 정보입니다.');
    const user = new User(data);

    await user.setPassword(data.password);
    await user.save();

    res.status(200).json({ message: '가입 완료', status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(404).json({ message: error.message });
    }
  }
}
