import path from "node:path";
import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  // Every URL on this site -- legacy and newly built -- ends in a trailing
  // slash (/automotive/, /contact-melss/, ...). Without this, Next 308s every
  // one of them to the no-slash form, breaking all the hardcoded internal links.
  trailingSlash: true,
  turbopack: {
    root: path.resolve(__dirname),
  },
  // Lets the dev server's JS/HMR assets load when browsing via the LAN IP
  // (e.g. http://192.168.1.15:3000), not just http://localhost:3000.
  allowedDevOrigins: ["192.168.1.15", "172.54.17.45"],
};

export default withPayload(nextConfig, { devBundleServerPackages: false });
