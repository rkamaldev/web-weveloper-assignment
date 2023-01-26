const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  publicRuntimeConfig: {
    GOOGLE_AUTH_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID,
    FETCH_USERS_API: process.env.FETCH_USERS_API,
    GOOGLE_API: process.env.GOOGLE_API,
    CONTACT_EMAIL: process.env.CONTACT_EMAIL,
  },
};

module.exports = nextConfig;
