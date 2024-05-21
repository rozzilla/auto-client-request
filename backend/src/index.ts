import { app } from "./app";

const start = async () => {
  try {
    const port = 3042;
    await app.listen({ port });
    app.log.info(`Server is running on http://localhost:${port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
