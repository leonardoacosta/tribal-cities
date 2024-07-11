import { fileURLToPath } from "url";
import createJiti from "jiti";

// Import env files to validate at build time. Use jiti so we can load .ts files in here.
createJiti(fileURLToPath(import.meta.url))("./src/env");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com"],
  },

  /** Enables hot reloading for local packages without a build step */
  transpilePackages: [
    "@tribal-cities/api",
    "@tribal-cities/auth",
    "@tribal-cities/db",
    "@tribal-cities/ui",
    "@tribal-cities/validators",
  ],

  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default config;