const http = require("http");
const app = require("./app");

const server = http.createServer(app);
const port = process.env.PORT || 19010;

server
  .listen(port)
  .on("listening", () =>
    console.log(`Servidor escuchando en el puerto ${port}`)
  )
  .on("error", console.log);
