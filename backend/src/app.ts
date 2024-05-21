import Fastify from "fastify";
import routes from "./routes";
import swagger from "./swagger";

export const app = Fastify({ logger: true });

app.register(swagger);
app.register(routes);
