const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";

export function withBasePath(src: string): string {
  if (!src.startsWith("/") || src.startsWith("//")) return src;
  if (!basePath || src === basePath || src.startsWith(`${basePath}/`)) return src;
  return `${basePath}${src}`;
}
