import Fastify from "fastify";
import fs from "fs";
import path from "path";

const app = Fastify({
  logger: true,
});

app.get("/video", function (req, reply) {
  const videoStream = fs.createReadStream(
    path.join(__dirname, "assets", "video_uhd_2160_4096_30fps.mp4")
  );
  reply.send(videoStream);
});

app.listen({ host: "0.0.0.0", port: 9000 }, function (err, address) {
  console.log("[*] Server starts at http://0.0.0.0:9000/");
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});
