/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      { source: "/", destination: "/landing" },
      { source: "/learn", destination: "/student" },
      { source: "/tutor", destination: "/tutor" },
      { source: "/supervisor", destination: "/supervisor" },
      { source: "/admin", destination: "/admin" },
    ];
  },
  experimental: {
    appDir: true, // Enable App Router if not already enabled
  },
};

export default nextConfig;
