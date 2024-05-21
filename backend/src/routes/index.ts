import { type FastifyInstance } from "fastify";
import plugin from "fastify-plugin";
import check from "./check";
import safe from "./safe";

const routes = async (app: FastifyInstance) => {
  check(app);
  safe(app);
};

export default plugin(async (app) => app.register(routes));
