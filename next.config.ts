import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // иначе next берёт корень по lockfile в ~/ и сыпет warning + странные баги dev
  outputFileTracingRoot: path.resolve(process.cwd()),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
