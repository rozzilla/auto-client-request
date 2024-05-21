/// <reference path="../global.d.ts" />
import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { JsonSchemaToTsProvider } from "@fastify/type-provider-json-schema-to-ts";

export default async function (
  fastify: FastifyInstance,
  opts: FastifyPluginOptions
) {
  fastify.withTypeProvider<JsonSchemaToTsProvider>().post(
    "/example",
    {
      schema: {
        body: {
          type: "object",
          properties: {
            num1: { type: "number" },
            num2: { type: "number" },
            text: { type: "string" },
          },
          required: ["num1", "num2"],
        },
        response: {
          "200": {
            type: "object",
            properties: { value: { type: "string" } },
          },
        },
      },
    },
    async ({ body: { num1, num2, text } }) => {
      return { value: `hi ${text} - result ${num1 + num2}` };
    }
  );
}
