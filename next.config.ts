import type { NextConfig } from "next";
import { deviceSizes, imageSizes } from "./lib/image-widths.mjs";

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  images: {
    // Variants are pre-generated at build time (scripts/generate-images.mjs),
    // so no image is resized on the server at request time.
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
    deviceSizes,
    imageSizes,
  },
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }],
      },
    ];
  },
  async redirects() {
    return [
      // Legacy URLs from the earlier German-first URL scheme.
      { source: "/en", destination: "/", permanent: true },
      { source: "/en/:path+", destination: "/:path+", permanent: true },
      { source: "/impressum", destination: "/de/impressum", permanent: true },
      { source: "/datenschutz", destination: "/de/datenschutz", permanent: true },
      { source: "/kontakt", destination: "/de/kontakt", permanent: true },
      { source: "/leistungen", destination: "/de/leistungen", permanent: true },
      { source: "/unternehmen", destination: "/de/unternehmen", permanent: true },
    ];
  },
};

export default nextConfig;
