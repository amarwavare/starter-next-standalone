/** @type {import('next').NextConfig} */

const envVariables = {
  NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
}

const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  output: 'standalone',
  publicRuntimeConfig: envVariables,
};

export default nextConfig;
