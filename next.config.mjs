/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cfzuypbljirmibmxpabi.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "images.preconfactory.com",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;
