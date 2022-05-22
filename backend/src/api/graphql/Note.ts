import { extendType, objectType } from "nexus";
import { Note as NotePrisma } from "nexus-prisma";

export const Note = objectType({
  name: "Note",
  definition(t) {
    t.field(NotePrisma.id);
    t.field(NotePrisma.title);
    t.field(NotePrisma.note);
    t.field(NotePrisma.color);
    t.field(NotePrisma.lastUpdated);
  },
});

export const GetNotesQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("Notes", {
      type: "Note",
      async resolve(_, __, { db }) {
        const res = await db.note.findMany();
        return res;
      },
    });
  },
});
