import { JsonSchemaToTsProvider } from "@fastify/type-provider-json-schema-to-ts";
import { FastifyInstance } from "fastify";

export default async (app: FastifyInstance) => {
  app.withTypeProvider<JsonSchemaToTsProvider>().get(
    "/check",
    {
      schema: {
        querystring: {
          type: "object",
          properties: {
            ping: { type: "string" },
          },
        },
        response: {
          200: {
            type: "object",
            properties: {
              hello: { type: "string" },
              ping: { type: "string" },
            },
          },
        },
      },
    },
    async (request, reply) => {
      reply.send({ hello: "world", ping: request.query.ping || "empty" });
    }
  );
};
