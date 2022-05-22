import { makeSchema } from "nexus";
import { join } from "path";
import NexusPrismaScalars from "nexus-prisma/scalars";
import * as types from "./graphql/index";

export const schema = makeSchema({
  types: [types, NexusPrismaScalars], // 1
  outputs: {
    typegen: join(__dirname, "..", "nexus-typegen.ts"), // 2
    schema: join(__dirname, "..", "schema.graphql"), // 3
  },
  contextType: {
    module: join(__dirname, "./contextModule.ts"),
    export: "Context",
  },
  sourceTypes: {
    modules: [
      {
        module: "@prisma/client",
        alias: "prisma",
      },
    ],
  },
});
