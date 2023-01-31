import cookie, { serialize } from 'cookie';
import jwt from 'jsonwebtoken';

const SESSION_SECRET = process.env.SESSION_SECRET;
const SESSION_COOKIE_NAME = process.env.SESSION_COOKIE_NAME;
const GOOGLE_API = process.env.GOOGLE_API;
const SESSION_EXPIRE_IN = Number(process.env.SESSION_EXPIRE_IN_MINUTES) * 60 * 1000;

export const validateTokenWithGoogleAPI = function (tokenData) {
  return fetch(`${GOOGLE_API}/userinfo?alt=json&access_token=${tokenData.access_token}`);
};

export const validateAccessToken = async function (req, res) {
  const tokenData = req.body;
  const data = await (await validateTokenWithGoogleAPI(tokenData)).json();
  if (data.verified_email) {
    const token = jwt.sign({ ...data, expire: new Date().getTime() + SESSION_EXPIRE_IN }, SESSION_SECRET);
    res.setHeader('Set-Cookie', serialize(process.env.SESSION_COOKIE_NAME, token, { path: '/' }));
    return data;
  }
  return false;
};

export const validateSession = async function (req) {
  const cookies = cookie.parse(req.headers.cookie || '');
  const cookieValues = cookies[SESSION_COOKIE_NAME];

  if (cookieValues) {
    const decoded = jwt.verify(cookies[SESSION_COOKIE_NAME], SESSION_SECRET);
    if (decoded.verified_email && new Date().getTime() < decoded.expire) {
      return decoded;
    }
  }
  return false;
};

export const deleteSession = async function (req, res) {
  res.setHeader('Set-Cookie', serialize(process.env.SESSION_COOKIE_NAME, '', { path: '/', maxAge: -1 }));
  res.writeHead(302, { Location: '/' });
  res.end();
};
