const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  publicRuntimeConfig: {
    GOOGLE_AUTH_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID,
    CONTACT_EMAIL: process.env.CONTACT_EMAIL,
  },
};

module.exports = nextConfig;
