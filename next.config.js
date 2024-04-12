/** @type {import('next').NextConfig} */
const isProd = process.env.SERVER === "production";

module.exports = {
  output: "export",
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd
    ? "https://f00852f9-9419-4a17-9a7c-cb5d30cbb45f.selcdn.net"
    : undefined,
};
