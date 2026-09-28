import type { NextConfig } from "next";
import path from "node:path";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withVanillaExtract = createVanillaExtractPlugin();

const repoBasePath = "/portfolio-site";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isProd ? repoBasePath : undefined,
  assetPrefix: isProd ? repoBasePath : undefined,
  outputFileTracingRoot: path.join(__dirname),
};

export default withVanillaExtract(nextConfig);
