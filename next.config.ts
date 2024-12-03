import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    domains:["images.unsplash.com","unsplash.com","assets.aceternity.com","cdn.sanity.io"]
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/videos/[name].[hash][ext]', // Customize path and filename format
      },
    });

    return config;
  },
};

export default nextConfig;
