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
        response: {
          "200": {
            type: "object",
            properties: { status: { type: "string" } },
          },
        },
      },
    },
    async () => {
      return { status: "OK" };
    }
  );
}
