import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
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
