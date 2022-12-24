/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    EMAIL_PUBLIC_KEY: "2b75T56k5e94ZIrs_",
    EMAIL_SERVICE_ID: "service_6vt3wy5",
    EMAIL_TEMPLATE_ID: "template_hjay5qd"
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;
