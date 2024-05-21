import { JsonSchemaToTsProvider } from "@fastify/type-provider-json-schema-to-ts";
import { FastifyInstance } from "fastify";

export default async (app: FastifyInstance) => {
  app.withTypeProvider<JsonSchemaToTsProvider>().post(
    "/safe",
    {
      schema: {
        body: {
          type: "object",
          required: ["name", "age"],
          properties: {
            name: { type: "string" },
            age: { type: "number" },
          },
        },
        response: {
          200: {
            type: "object",
            properties: {
              greeting: { type: "string" },
            },
          },
        },
      },
    },
    async (request, reply) => {
      const { name, age } = request.body;
      reply.send({ greeting: `Hello ${name}, you are ${age} years old!` });
    }
  );
};
