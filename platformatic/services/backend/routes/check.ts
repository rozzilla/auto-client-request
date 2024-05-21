/// <reference path="../global.d.ts" />
import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { JsonSchemaToTsProvider } from "@fastify/type-provider-json-schema-to-ts";

export default async function (
  fastify: FastifyInstance,
  opts: FastifyPluginOptions
) {
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
              status: { type: "string" },
              ping: { type: "string" },
            },
            required: ["status"],
          },
        },
      },
    },
    async ({ query }) => {
      return { status: "OK", ping: query.ping || "" };
    }
  );
}
