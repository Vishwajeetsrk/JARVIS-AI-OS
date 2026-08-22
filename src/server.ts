import { createStartHandler, defaultStreamHandler } from "@tanstack/react-start/server";

const handler = createStartHandler(defaultStreamHandler);

const serve = (request: Request, options?: { context?: Record<string, unknown>; request?: Request }) => {
  const timeout = new AbortController();
  const timer = setTimeout(() => timeout.abort(), 120_000);
  return Promise.race([
    handler(request, options),
    new Promise<Response>((_, reject) => {
      timeout.signal.addEventListener("abort", () => {
        reject(new Error("SSR handler timed out after 120s"));
      });
    }),
  ]).finally(() => clearTimeout(timer));
};

// The dev server plugin (start-plugin-core >= 1.171) calls default.fetch(req),
// while older versions and the Nitro build call the default export directly.
export default Object.assign(serve, { fetch: serve });
