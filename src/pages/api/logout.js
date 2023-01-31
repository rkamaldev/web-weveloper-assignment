import { deleteSession } from '@/pages/api/authService/';

export default async function handler(req, res) {
  const data = await deleteSession(req, res);
  if (data) {
    return res.status(200).json(data);
  } else {
    return res.status(401).send();
  }
}
