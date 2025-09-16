import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    authInterrupts: true,
    browserDebugInfoInTerminal: true,
  },
};

export default nextConfig;
