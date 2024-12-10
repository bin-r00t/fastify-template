import Fastify from "fastify";

const app = Fastify({
  logger: true,
});

app.get("/", function (req, reply) {
  return { hello: "world" };
});

app.listen({ host: "0.0.0.0", port: 9000 }, function (err, address) {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});
