/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    LUCIA_SECRET: process.env.LUCIA_SECRET,
  },
};

export default nextConfig;
