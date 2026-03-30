import type { NextConfig } from "next";
import path from "node:path";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
};

export default withVanillaExtract(nextConfig);
