import { validateAccessToken } from '@/pages/api/authService/';

export default async function handler(req, res) {
  const data = await validateAccessToken(req, res);
  return res.status(200).json(data);
}
