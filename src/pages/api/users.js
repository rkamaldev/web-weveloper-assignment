import { fetchUsers } from '@/pages/api/usersService/';
import { validateSession } from '@/pages/api/authService/';

export default async function handler(req, res) {
  const isValid = await validateSession(req);
  //fetch only is user session is valid
  if (isValid) {
    const data = await fetchUsers();
    return res.status(200).json(data);
  } else {
    return res.status(401).send();
  }
}
