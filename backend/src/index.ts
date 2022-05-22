import { createServer } from "@graphql-yoga/node";
import { context } from "./api/contextModule";
import { schema } from "./api/schema";

export default function main() {
  const server = createServer({ schema, context: context });

  server.start();
  // This is for ts-node-dev
  process.on("SIGTERM", () => process.exit());
}

main();
