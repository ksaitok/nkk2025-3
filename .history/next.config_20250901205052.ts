import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client', 'bcryptjs'],
  },
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
};

export default nextConfig;
