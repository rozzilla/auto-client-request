/// <reference path="../global.d.ts" />
import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { JsonSchemaToTsProvider } from "@fastify/type-provider-json-schema-to-ts";

export default async function (
  fastify: FastifyInstance,
  opts: FastifyPluginOptions
) {
  fastify.withTypeProvider<JsonSchemaToTsProvider>().get(
    "/example",
    {
      schema: {
        querystring: {
          type: "object",
          properties: { test: { type: "string" } },
        },
        response: {
          "200": {
            type: "object",
            properties: { hello: { type: "string" } },
          },
        },
      },
    },
    async (request) => {
      return { hello: `world - ${request.query.test}` };
    }
  );
}
