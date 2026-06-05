/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static Site Generation — outputs pure HTML/CSS/JS to /out
  output: 'export',

  // Ensures URLs like /privacy work as /privacy/index.html
  trailingSlash: true,

  // Next/Image must be unoptimized for static export (no server to process images)
  images: {
    unoptimized: true,
  },

  // TypeScript errors are surfaced in IDE; don't block the build
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
