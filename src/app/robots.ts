import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/data";

export const dynamic = "force-static";

const base = () => getSiteUrl();

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base()}/sitemap.xml`,
  };
}
