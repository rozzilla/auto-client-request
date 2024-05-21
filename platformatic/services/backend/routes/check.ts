/// <reference path="../global.d.ts" />
import { FastifyInstance } from "fastify";
import { JsonSchemaToTsProvider } from "@fastify/type-provider-json-schema-to-ts";

export default async function (fastify: FastifyInstance) {
  fastify.withTypeProvider<JsonSchemaToTsProvider>().get(
    "/check",
    {
      schema: {
        querystring: {
          type: "object",
          properties: { ping: { type: "string" } },
        },
        response: {
          "200": {
            type: "object",
            properties: {
              status: { type: "string", enum: ["OK", "KO"] },
              ping: { type: "string" },
            },
            required: ["status"],
            additionalProperties: false,
          },
        },
      },
    },
    async ({ query }) => {
      return { status: "OK" as const, ping: query.ping || "" };
    }
  );
}
