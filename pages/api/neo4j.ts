import type { NextApiRequest, NextApiResponse } from 'next';
import { getNeo4jDriver } from '../../src';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const db = getNeo4jDriver();
  const info = await db.getServerInfo();

  res.status(200).json(info);
}
