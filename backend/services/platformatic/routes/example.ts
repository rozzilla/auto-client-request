import { FastifyInstance } from "fastify";
import { JsonSchemaToTsProvider } from "@fastify/type-provider-json-schema-to-ts";

export default async function (fastify: FastifyInstance) {
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
            properties: { data: { type: "string" } },
            required: ["data"],
          },
        },
      },
    },
    async ({ body: { num1, num2, text } }) => {
      return { data: `hi ${text} - result ${num1 + num2}` };
    }
  );
}
