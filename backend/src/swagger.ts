import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import plugin from "fastify-plugin";

export default plugin(async (app) => {
  app.register(fastifySwagger);
  app.register(fastifySwaggerUI);
});
